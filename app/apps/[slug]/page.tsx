import { getAppBySlug } from "@/lib/data/apps";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Download, Info, Shield, FileText, HelpCircle, FileClock, Trash2, ExternalLink } from "lucide-react";

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
      title: "App Not Found",
    };
  }

  return {
    title: `${app.name} | Parsuram Naik`,
    description: app.description,
    openGraph: {
      title: `${app.name} - Premium Android App`,
      description: app.description,
      images: [{ url: app.icon }],
    },
  };
}

export default async function AppLandingPage({ params }: AppParams) {
  const { slug } = await params;
  const app = getAppBySlug(slug);

  if (!app) {
    notFound();
  }

  return (
    <main className="min-h-screen pt-32 pb-24">
      <Container className="max-w-[1400px]">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row gap-8 items-start mb-16 bg-white/5 border border-white/10 rounded-3xl p-6 md:p-10 glass">
          <div className="w-32 h-32 md:w-40 md:h-40 rounded-3xl overflow-hidden bg-black/40 border border-white/10 shrink-0 shadow-2xl">
            <img 
              src={app.icon} 
              alt={`${app.name} icon`} 
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="flex-1">
            <div className="flex flex-wrap items-center gap-3 mb-3">
              <h1 className="text-3xl md:text-5xl font-heading font-bold text-white tracking-tight">
                {app.name}
              </h1>
              <span className="px-3 py-1 rounded-full bg-primary-blue/10 border border-primary-blue/20 text-primary-blue text-xs uppercase tracking-wider font-semibold">
                v{app.version}
              </span>
            </div>
            
            <p className="text-muted-foreground mb-6 text-lg max-w-2xl">
              {app.description}
            </p>
            
            <div className="flex flex-wrap items-center gap-4">
              {app.playStoreUrl && (
                <a 
                  href={app.playStoreUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-white text-black font-semibold hover:bg-gray-200 transition-colors"
                >
                  <Download className="w-5 h-5" />
                  Get on Google Play
                </a>
              )}
              {app.downloadUrl && (
                <a 
                  href={app.downloadUrl}
                  className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-white/10 text-white font-semibold hover:bg-white/20 transition-colors border border-white/10"
                >
                  <Download className="w-5 h-5" />
                  Direct Download
                </a>
              )}
            </div>
          </div>
          
          <div className="hidden lg:block w-[300px] shrink-0 bg-black/40 rounded-2xl p-6 border border-white/5">
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">App Info</h3>
            <div className="space-y-3">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Developer</span>
                <span className="text-white font-medium">{app.developer}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Updated</span>
                <span className="text-white font-medium">{app.lastUpdated}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Version</span>
                <span className="text-white font-medium">{app.version}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Screenshots */}
        {app.screenshots && app.screenshots.length > 0 && (
          <div className="mb-16">
            <h2 className="text-2xl font-bold font-heading text-white mb-8">Screenshots</h2>
            <div className="flex gap-6 overflow-x-auto pb-6 scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent snap-x">
              {app.screenshots.map((screenshot, i) => (
                <div key={i} className="w-[280px] shrink-0 snap-center rounded-2xl overflow-hidden border border-white/10 shadow-xl bg-black/40 aspect-[9/19]">
                  <img src={screenshot.url} alt={screenshot.alt} className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Features */}
        {app.features && app.features.length > 0 && (
          <div className="mb-16">
            <h2 className="text-2xl font-bold font-heading text-white mb-8">Key Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {app.features.map((feature, i) => (
                <div key={i} className="flex items-start gap-3 p-4 rounded-xl bg-white/5 border border-white/10">
                  <div className="w-6 h-6 rounded-full bg-primary-green/10 flex items-center justify-center text-primary-green shrink-0 mt-0.5">
                    <div className="w-2 h-2 rounded-full bg-primary-green" />
                  </div>
                  <span className="text-muted-foreground">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Legal & Support Links */}
        <div>
          <h2 className="text-2xl font-bold font-heading text-white mb-8">Resources & Legal</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <Link href={`/apps/${app.slug}/privacy-policy`} className="flex items-center gap-3 p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors group">
              <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-500">
                <Shield className="w-5 h-5" />
              </div>
              <div className="flex-1 font-medium text-white group-hover:text-primary-blue transition-colors">Privacy Policy</div>
              <ExternalLink className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
            </Link>
            
            <Link href={`/apps/${app.slug}/terms-of-service`} className="flex items-center gap-3 p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors group">
              <div className="w-10 h-10 rounded-lg bg-purple-500/10 flex items-center justify-center text-purple-500">
                <FileText className="w-5 h-5" />
              </div>
              <div className="flex-1 font-medium text-white group-hover:text-purple-400 transition-colors">Terms of Service</div>
              <ExternalLink className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
            </Link>
            
            <Link href={`/apps/${app.slug}/faq`} className="flex items-center gap-3 p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors group">
              <div className="w-10 h-10 rounded-lg bg-green-500/10 flex items-center justify-center text-green-500">
                <HelpCircle className="w-5 h-5" />
              </div>
              <div className="flex-1 font-medium text-white group-hover:text-green-400 transition-colors">FAQ</div>
              <ExternalLink className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
            </Link>

            <Link href={`/apps/${app.slug}/support`} className="flex items-center gap-3 p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors group">
              <div className="w-10 h-10 rounded-lg bg-orange-500/10 flex items-center justify-center text-orange-500">
                <Info className="w-5 h-5" />
              </div>
              <div className="flex-1 font-medium text-white group-hover:text-orange-400 transition-colors">Support</div>
              <ExternalLink className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
            </Link>

            <Link href={`/apps/${app.slug}/changelog`} className="flex items-center gap-3 p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors group">
              <div className="w-10 h-10 rounded-lg bg-teal-500/10 flex items-center justify-center text-teal-500">
                <FileClock className="w-5 h-5" />
              </div>
              <div className="flex-1 font-medium text-white group-hover:text-teal-400 transition-colors">Release Notes</div>
              <ExternalLink className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
            </Link>

            <Link href={`/apps/${app.slug}/delete-account`} className="flex items-center gap-3 p-4 rounded-xl bg-red-500/5 border border-red-500/10 hover:bg-red-500/10 transition-colors group">
              <div className="w-10 h-10 rounded-lg bg-red-500/10 flex items-center justify-center text-red-500">
                <Trash2 className="w-5 h-5" />
              </div>
              <div className="flex-1 font-medium text-red-400 group-hover:text-red-300 transition-colors">Delete Account</div>
              <ExternalLink className="w-4 h-4 text-red-500/50 opacity-0 group-hover:opacity-100 transition-opacity" />
            </Link>
          </div>
        </div>
      </Container>
    </main>
  );
}
