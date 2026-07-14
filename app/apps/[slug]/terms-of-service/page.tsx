import { getAppBySlug } from "@/lib/data/apps";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { Container } from "@/components/ui/container";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";

interface AppParams {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params }: AppParams): Promise<Metadata> {
  const app = getAppBySlug(params.slug);
  
  if (!app) {
    return {
      title: "Not Found",
    };
  }

  return {
    title: `Terms of Service | ${app.name} | Parsu Tech`,
    description: `Terms of Service for ${app.name} developed by ${app.developer}.`,
    openGraph: {
      title: `${app.name} - Terms of Service`,
      description: `Terms of Service for ${app.name} developed by ${app.developer}.`,
    },
  };
}

export default function TermsOfServicePage({ params }: AppParams) {
  const app = getAppBySlug(params.slug);

  if (!app || !app.terms) {
    notFound();
  }

  return (
    <main className="min-h-screen pt-32 pb-24">
      <Container className="max-w-4xl">
        <Link 
          href={`/apps/${app.slug}`}
          className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-white transition-colors mb-8"
        >
          <ChevronLeft className="w-4 h-4 mr-1" />
          Back to {app.name}
        </Link>
        
        <div className="bg-white/5 border border-white/10 rounded-3xl p-8 md:p-12 glass">
          <div className="mb-12 border-b border-white/10 pb-8">
            <h1 className="text-3xl md:text-5xl font-heading font-bold text-white tracking-tight mb-4">
              Terms of Service
            </h1>
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-6 text-muted-foreground">
              <p>App: <strong className="text-white">{app.name}</strong></p>
              <p>Last Updated: <strong className="text-white">{app.terms.lastUpdated}</strong></p>
            </div>
          </div>
          
          <div className="space-y-12 text-muted-foreground leading-relaxed">
            {app.terms.sections.map((section, index) => (
              <section key={index}>
                <h2 className="text-xl font-bold text-white mb-4">{section.title}</h2>
                <div className="space-y-4">
                  {section.content.map((paragraph, pIndex) => (
                    <p key={pIndex}>{paragraph}</p>
                  ))}
                </div>
              </section>
            ))}
            
            <section className="pt-8 border-t border-white/10">
              <h2 className="text-xl font-bold text-white mb-4">Contact Us</h2>
              <p>
                If you have any questions about these Terms, please contact us at:{" "}
                <a href={`mailto:${app.supportEmail}`} className="text-purple-400 hover:underline">
                  {app.supportEmail}
                </a>
              </p>
            </section>
          </div>
        </div>
      </Container>
    </main>
  );
}
