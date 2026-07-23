const fs = require('fs');
const path = require('path');
const PDFDocument = require('pdfkit');

const outDir = path.join(__dirname, 'public', 'resources');
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

// Generates a ~2000 word tech article text
function getArticleText(title) {
  const paragraph = `In the rapidly evolving landscape of modern software engineering, mastering the core principles of architecture and design is paramount. As developers, we are constantly faced with the challenge of building systems that are not only scalable and performant but also maintainable over the long term. This requires a deep understanding of design patterns, data structures, and the underlying infrastructure that powers our applications. Whether you are working on a simple mobile app or a complex distributed microservices architecture, the fundamental concepts remain the same. The key to success lies in your ability to abstract complexity, decouple components, and ensure that each piece of the system has a single, well-defined responsibility. This principle, often referred to as the Single Responsibility Principle, is the cornerstone of robust software design. When components are loosely coupled and highly cohesive, they become easier to test, easier to refactor, and ultimately, easier to understand. Furthermore, as systems scale, the importance of efficient data management cannot be overstated. Choosing the right database, designing an optimal schema, and implementing effective caching strategies are critical factors that determine the overall performance of your application. In addition to technical skills, effective communication and collaboration within a team are equally important. Code reviews, pair programming, and comprehensive documentation are essential practices that help maintain a high standard of quality across the codebase. As we look towards the future, emerging technologies such as artificial intelligence and machine learning are poised to revolutionize the way we build software. By staying curious, continuously learning, and embracing new paradigms, we can navigate this ever-changing landscape and build systems that stand the test of time. `;
  
  // A paragraph has roughly 270 words. We need ~2000 words, so about 8 paragraphs.
  let content = `${title}\n\n`;
  content += "A Comprehensive Guide to Mastery in Software Engineering\n\n";
  for (let i = 0; i < 8; i++) {
    content += `Section ${i + 1}: Core Principles\n`;
    content += paragraph + "\n\n";
  }
  return content;
}

const resources = [
  { id: "r1", title: "Android Cheat Sheet 2024", fileType: "PDF" },
  { id: "r2", title: "Essential Git Commands", fileType: "PDF" },
  { id: "r3", title: "Firebase Security Guide", fileType: "PDF" },
  { id: "r4", title: "Developer Resume Template", fileType: "FIG" },
  { id: "r5", title: "DSA Quick Notes", fileType: "TXT" },
  { id: "r6", title: "UI Components Library", fileType: "ZIP" },
  { id: "r7", title: "Next.js Performance Guide", fileType: "PDF" },
  { id: "r8", title: "System Architecture Notes", fileType: "TXT" },
];

resources.forEach((res) => {
  const filePath = path.join(outDir, `${res.id}.${res.fileType.toLowerCase()}`);
  
  if (res.fileType === "PDF") {
    const doc = new PDFDocument({ margin: 50, bufferPages: true, info: { Title: res.title, Author: 'Parsuram Naik' } });
    doc.pipe(fs.createWriteStream(filePath));
    
    // BRANDING HEADER
    doc.fillColor('#2563EB').fontSize(10).text('PARSURAM NAIK', { align: 'left', continued: true })
       .fillColor('#059669').text(' | Software Engineer', { align: 'left' });
    doc.fillColor('#64748B').fontSize(9).text('parsuramnaik.in | github.com/Parsuram-Naik', { align: 'left' });
    doc.moveDown(3);
    
    // TITLE
    doc.fillColor('#0F172A').fontSize(28).font('Helvetica-Bold').text(res.title, { align: 'center' });
    doc.moveDown(0.5);
    doc.rect(50, doc.y, 512, 2).fill('#2563EB'); // Blue accent line
    doc.moveDown(2);
    
    // CONTENT
    doc.fillColor('#334155').fontSize(12).font('Helvetica').text(getArticleText(res.title), {
      align: 'justify',
      lineGap: 4
    });
    
    // FOOTER ON EACH PAGE
    let pages = doc.bufferedPageRange();
    for (let i = 0; i < pages.count; i++) {
      doc.switchToPage(i);
      doc.fontSize(8).fillColor('#94A3B8').text(
        `© ${new Date().getFullYear()} Parsuram Naik. All rights reserved.`, 
        50, 
        doc.page.height - 40, 
        { align: 'center' }
      );
    }
    
    doc.end();
    console.log(`Generated Branded PDF: ${filePath}`);
  } else {
    // For TXT, ZIP, FIG, prepend branding text
    const branding = "=========================================\n" +
                     " PARSURAM NAIK | SOFTWARE ENGINEER\n" +
                     " Website: parsuramnaik.in\n" +
                     " GitHub: github.com/Parsuram-Naik\n" +
                     " © " + new Date().getFullYear() + " Parsuram Naik. All rights reserved.\n" +
                     "=========================================\n\n";
    fs.writeFileSync(filePath, branding + getArticleText(res.title));
    console.log(`Generated Branded ${res.fileType}: ${filePath}`);
  }
});
