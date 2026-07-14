import { getAppBySlug } from "@/lib/data/apps";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Shield, FileText, HelpCircle, FileClock, Trash2, ExternalLink } from "lucide-react";
import { AppHeroClient } from "@/components/apps/AppHeroClient";

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
        {/* Premium Flagship Hero */}
        <AppHeroClient app={app} />

        {/* Screenshots */}
        {app.screenshots && app.screenshots.length > 0 && (
          <div className="mb-20">
            <h2 className="text-2xl font-bold font-heading text-white mb-8 flex items-center gap-3">
              App Preview
            </h2>
            <div className="flex gap-6 overflow-x-auto pb-6 scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent snap-x">
              {app.screenshots.map((screenshot, i) => (
                <div key={i} className="w-[280px] md:w-[320px] shrink-0 snap-center rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl bg-black/40 aspect-[9/19] hover:border-white/20 transition-colors">
                  <img src={screenshot.url} alt={screenshot.alt} className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Features */}
        {app.features && app.features.length > 0 && (
          <div id="features" className="mb-24 scroll-mt-32">
            <h2 className="text-2xl md:text-3xl font-bold font-heading text-white mb-10">Key Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {app.features.map((feature, i) => (
                <div key={i} className="flex items-start gap-4 p-6 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all hover:scale-[1.02] glass">
                  <div className="w-10 h-10 rounded-2xl bg-primary-green/10 flex items-center justify-center text-primary-green shrink-0 shadow-inner">
                    <div className="w-3 h-3 rounded-full bg-primary-green shadow-[0_0_10px_rgba(74,222,128,0.5)]" />
                  </div>
                  <span className="text-muted-foreground font-medium text-lg pt-1">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Legal & Support Links - Premium Redesign */}
        <div>
          <div className="flex flex-col items-center mb-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-white mb-4">Resources & Support</h2>
            <p className="text-muted-foreground max-w-xl">Everything you need to know about {app.name}, from our privacy practices to getting help.</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <Link href={`/apps/${app.slug}/privacy-policy`} className="flex flex-col gap-4 p-6 rounded-3xl bg-gradient-to-br from-white/5 to-transparent border border-white/10 hover:border-blue-500/30 transition-all group overflow-hidden relative">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="w-12 h-12 rounded-2xl bg-blue-500/10 flex items-center justify-center text-blue-400 group-hover:scale-110 transition-transform">
                <Shield className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-1 group-hover:text-blue-400 transition-colors">Privacy Policy</h3>
                <p className="text-sm text-muted-foreground">Read how we protect and manage your data.</p>
              </div>
              <ExternalLink className="absolute top-6 right-6 w-5 h-5 text-white/20 group-hover:text-blue-400 transition-colors" />
            </Link>
            
            <Link href={`/apps/${app.slug}/terms-of-service`} className="flex flex-col gap-4 p-6 rounded-3xl bg-gradient-to-br from-white/5 to-transparent border border-white/10 hover:border-purple-500/30 transition-all group overflow-hidden relative">
              <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="w-12 h-12 rounded-2xl bg-purple-500/10 flex items-center justify-center text-purple-400 group-hover:scale-110 transition-transform">
                <FileText className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-1 group-hover:text-purple-400 transition-colors">Terms of Service</h3>
                <p className="text-sm text-muted-foreground">The rules and guidelines for using the app.</p>
              </div>
              <ExternalLink className="absolute top-6 right-6 w-5 h-5 text-white/20 group-hover:text-purple-400 transition-colors" />
            </Link>
            
            <Link href={`/apps/${app.slug}/faq`} className="flex flex-col gap-4 p-6 rounded-3xl bg-gradient-to-br from-white/5 to-transparent border border-white/10 hover:border-green-500/30 transition-all group overflow-hidden relative">
              <div className="absolute top-0 right-0 w-32 h-32 bg-green-500/10 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="w-12 h-12 rounded-2xl bg-green-500/10 flex items-center justify-center text-green-400 group-hover:scale-110 transition-transform">
                <HelpCircle className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-1 group-hover:text-green-400 transition-colors">FAQ</h3>
                <p className="text-sm text-muted-foreground">Find answers to commonly asked questions.</p>
              </div>
              <ExternalLink className="absolute top-6 right-6 w-5 h-5 text-white/20 group-hover:text-green-400 transition-colors" />
            </Link>

            <Link href={`/apps/${app.slug}/changelog`} className="flex flex-col gap-4 p-6 rounded-3xl bg-gradient-to-br from-white/5 to-transparent border border-white/10 hover:border-teal-500/30 transition-all group overflow-hidden relative">
              <div className="absolute top-0 right-0 w-32 h-32 bg-teal-500/10 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="w-12 h-12 rounded-2xl bg-teal-500/10 flex items-center justify-center text-teal-400 group-hover:scale-110 transition-transform">
                <FileClock className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-1 group-hover:text-teal-400 transition-colors">Release Notes</h3>
                <p className="text-sm text-muted-foreground">Discover what's new in the latest versions.</p>
              </div>
              <ExternalLink className="absolute top-6 right-6 w-5 h-5 text-white/20 group-hover:text-teal-400 transition-colors" />
            </Link>

            <Link href={`/apps/${app.slug}/support`} className="flex flex-col gap-4 p-6 rounded-3xl bg-gradient-to-br from-white/5 to-transparent border border-white/10 hover:border-orange-500/30 transition-all group overflow-hidden relative lg:col-span-2">
              <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/10 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="flex items-center gap-6">
                <div className="w-16 h-16 rounded-2xl bg-orange-500/10 flex items-center justify-center text-orange-400 group-hover:scale-110 transition-transform shrink-0">
                  <Shield className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-1 group-hover:text-orange-400 transition-colors">24/7 Support</h3>
                  <p className="text-sm text-muted-foreground">Need help? Get in touch with our dedicated support team.</p>
                </div>
              </div>
              <ExternalLink className="absolute top-6 right-6 w-5 h-5 text-white/20 group-hover:text-orange-400 transition-colors" />
            </Link>
          </div>

          <div className="mt-8">
            <Link href={`/apps/${app.slug}/delete-account`} className="flex items-center justify-between p-6 rounded-3xl bg-red-500/5 border border-red-500/10 hover:bg-red-500/10 hover:border-red-500/30 transition-all group max-w-2xl mx-auto">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-red-500/10 flex items-center justify-center text-red-500 group-hover:scale-110 transition-transform">
                  <Trash2 className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-red-400 mb-1 group-hover:text-red-300 transition-colors">Delete Account</h3>
                  <p className="text-sm text-red-500/60">Permanently remove your account and data.</p>
                </div>
              </div>
              <ExternalLink className="w-5 h-5 text-red-500/30 group-hover:text-red-400 transition-colors" />
            </Link>
          </div>
        </div>
      </Container>
    </main>
  );
}
