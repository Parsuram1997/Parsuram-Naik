import { getAppBySlug } from "@/lib/data/apps";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { Container } from "@/components/ui/container";
import Link from "next/link";
import { ChevronLeft, ShieldAlert, FileText, Info, Trash2 } from "lucide-react";
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
    <main className="min-h-screen pt-32 pb-24 relative z-0 overflow-hidden">
      {/* Background Decor Ambient Mesh Glows */}
      <div className="absolute top-[-10%] right-[-5%] w-[400px] h-[400px] md:w-[600px] md:h-[600px] bg-primary-blue/10 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] md:w-[600px] md:h-[600px] bg-primary-green/10 rounded-full blur-[120px] pointer-events-none -z-10" />

      <Container className="max-w-4xl relative z-10">

        
        <div className="bg-white/[0.02] border border-white/5 rounded-[2.5rem] p-8 md:p-14 shadow-[0_8px_32px_rgba(0,0,0,0.4)] backdrop-blur-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-primary-blue/5 rounded-full blur-[100px] pointer-events-none"></div>
          
          <div className="mb-14 border-b border-white/5 pb-10 relative z-10">
            <h1 className="text-4xl md:text-6xl font-heading font-extrabold tracking-tight mb-6">
              <span className="bg-clip-text text-transparent bg-gradient-to-br from-white via-white/90 to-white/30">
                Frequently Asked Questions
              </span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground/80 font-light">
              Common questions and answers about <strong className="text-white font-medium">{app.name}</strong>.
            </p>
          </div>
          
          <div className="relative z-10">
            <FAQClient faq={app.faq} />
          </div>
        </div>

        {/* Footer Navigation Buttons */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 print:hidden">
          <Link href={`/apps/${app.slug}`} className="flex flex-col items-center justify-center p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors text-center group">
            <ChevronLeft className="w-6 h-6 text-muted-foreground group-hover:text-white mb-2 transition-colors" />
            <span className="text-sm font-medium text-white">Back to App</span>
          </Link>
          
          <Link href={`/apps/${app.slug}/privacy-policy`} className="flex flex-col items-center justify-center p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors text-center group">
            <ShieldAlert className="w-6 h-6 text-green-400 mb-2" />
            <span className="text-sm font-medium text-white">Privacy Policy</span>
          </Link>

          <Link href={`/apps/${app.slug}/terms-of-service`} className="flex flex-col items-center justify-center p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors text-center group">
            <FileText className="w-6 h-6 text-purple-400 mb-2" />
            <span className="text-sm font-medium text-white">Terms of Service</span>
          </Link>

          <Link href={`/apps/${app.slug}/delete-account`} className="flex flex-col items-center justify-center p-6 rounded-2xl bg-red-500/5 border border-red-500/10 hover:bg-red-500/10 transition-colors text-center group">
            <Trash2 className="w-6 h-6 text-red-500 mb-2" />
            <span className="text-sm font-medium text-red-400">Delete Account</span>
          </Link>
        </div>
      </Container>
    </main>
  );
}
