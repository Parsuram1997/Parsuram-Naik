const fs = require('fs');
const path = require('path');

const baseDir = path.join(__dirname, '../app/apps/[slug]');

const files = [
  'page.tsx',
  'privacy-policy/page.tsx',
  'terms-of-service/page.tsx',
  'delete-account/page.tsx',
  'support/page.tsx',
  'faq/page.tsx',
  'changelog/page.tsx'
];

for (const file of files) {
  const filePath = path.join(baseDir, file);
  if (!fs.existsSync(filePath)) {
    console.log(`Skipping ${filePath} - not found`);
    continue;
  }
  
  let content = fs.readFileSync(filePath, 'utf8');
  
  // 1. Update interface AppParams
  content = content.replace(
    /interface AppParams \{\s*params: \{\s*slug: string;\s*\};\s*\}/,
    `type AppParams = {
  params: Promise<{
    slug: string;
  }>;
}`
  );
  
  // Update the one that didn't use interface (faq/page.tsx)
  content = content.replace(
    /export default function FAQPage\(\{ params \}: \{ params: \{ slug: string \} \}\) \{/,
    `export default async function FAQPage({ params }: { params: Promise<{ slug: string }> }) {\n  const { slug } = await params;`
  );
  if (file === 'faq/page.tsx') {
      content = content.replace(/const app = getAppBySlug\(params\.slug\);/, `const app = getAppBySlug(slug);`);
  }

  // 2. Update generateMetadata
  if (content.includes('generateMetadata')) {
    content = content.replace(
      /export async function generateMetadata\(\{ params \}: AppParams\): Promise<Metadata> \{\s*const app = getAppBySlug\(params\.slug\);/,
      `export async function generateMetadata({ params }: AppParams): Promise<Metadata> {\n  const { slug } = await params;\n  const app = getAppBySlug(slug);`
    );
  }
  
  // 3. Update component
  if (file !== 'faq/page.tsx') {
    const compMatch = content.match(/export default function ([A-Za-z0-9_]+)\(\{ params \}: AppParams\) \{/);
    if (compMatch) {
      const compName = compMatch[1];
      content = content.replace(
        `export default function ${compName}({ params }: AppParams) {`,
        `export default async function ${compName}({ params }: AppParams) {\n  const { slug } = await params;`
      );
      content = content.replace(
        `const app = getAppBySlug(params.slug);`,
        `const app = getAppBySlug(slug);`
      );
    }
  }

  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`Updated ${file}`);
}
