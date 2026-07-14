import { getAppBySlug } from "@/lib/data/apps";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { Container } from "@/components/ui/container";
import Link from "next/link";
import { ChevronLeft, Mail, Info, Bug, Lightbulb } from "lucide-react";

interface AppParams {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params }: AppParams): Promise<Metadata> {
  const app = getAppBySlug(params.slug);
  if (!app) return { title: "Not Found" };
  return {
    title: `Support | ${app.name} | Parsu Tech`,
    description: `Get support for ${app.name}.`,
  };
}

export default function SupportPage({ params }: AppParams) {
  const app = getAppBySlug(params.slug);

  if (!app) {
    notFound();
  }

  return (
    <main className="min-h-screen pt-32 pb-24">
      <Container className="max-w-4xl">
        <Link href={`/apps/${app.slug}`} className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-white transition-colors mb-8">
          <ChevronLeft className="w-4 h-4 mr-1" />
          Back to {app.name}
        </Link>
        
        <div className="bg-white/5 border border-white/10 rounded-3xl p-8 md:p-12 glass mb-8">
          <div className="mb-12 border-b border-white/10 pb-8">
            <h1 className="text-3xl md:text-5xl font-heading font-bold text-white tracking-tight mb-4">
              {app.name} Support
            </h1>
            <p className="text-lg text-muted-foreground">
              How can we help you today?
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex flex-col p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-500 mb-4">
                <Info className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">General Inquiry</h3>
              <p className="text-sm text-muted-foreground mb-6 flex-1">
                Have a question about how to use the app? Need help with your account?
              </p>
              <a href={`mailto:${app.supportEmail}?subject=General Inquiry - ${app.name}`} className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-blue-500 text-white font-medium hover:bg-blue-600 transition-colors">
                <Mail className="w-4 h-4" /> Contact Support
              </a>
            </div>

            <div className="flex flex-col p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-orange-500/10 flex items-center justify-center text-orange-500 mb-4">
                <Bug className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Report a Bug</h3>
              <p className="text-sm text-muted-foreground mb-6 flex-1">
                Found something that isn't working right? Let us know so we can fix it.
              </p>
              <a href={`mailto:${app.supportEmail}?subject=Bug Report - ${app.name}&body=App Version: ${app.version}%0D%0ADevice: %0D%0AOS Version: %0D%0A%0D%0ASteps to reproduce: `} className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-orange-500 text-white font-medium hover:bg-orange-600 transition-colors">
                <Bug className="w-4 h-4" /> Report Issue
              </a>
            </div>

            <div className="flex flex-col p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-green-500/10 flex items-center justify-center text-green-500 mb-4">
                <Lightbulb className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Feature Request</h3>
              <p className="text-sm text-muted-foreground mb-6 flex-1">
                Have an idea to make {app.name} better? We'd love to hear it!
              </p>
              <a href={`mailto:${app.supportEmail}?subject=Feature Request - ${app.name}`} className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-green-500 text-white font-medium hover:bg-green-600 transition-colors">
                <Lightbulb className="w-4 h-4" /> Suggest Feature
              </a>
            </div>
          </div>
        </div>
      </Container>
    </main>
  );
}
