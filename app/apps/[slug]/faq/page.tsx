import { getAppBySlug } from "@/lib/data/apps";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { Container } from "@/components/ui/container";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import { FAQClient } from "@/components/apps/FAQClient";

type AppParams = {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({ params }: AppParams): Promise<Metadata> {
  const { slug } = await params;
  const app = getAppBySlug(slug);

  if (!app) {
    return {
      title: "Not Found",
    };
  }

  return {
    title: `FAQ | ${app.name} | Parsuram Naik`,
    description: `Frequently asked questions for ${app.name}.`,
    alternates: {
      canonical: `https://parsuramnaik.in/apps/${app.slug}/faq`,
    },
  };
}

export default async function FAQPage({ params }: AppParams) {
  const { slug } = await params;
  const app = getAppBySlug(slug);

  if (!app || !app.faq) {
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
              Frequently Asked Questions
            </h1>
            <p className="text-lg text-muted-foreground">
              Common questions and answers about {app.name}.
            </p>
          </div>
          
          <FAQClient faq={app.faq} />
        </div>
      </Container>
    </main>
  );
}
