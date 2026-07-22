import { getAppBySlug } from "@/lib/data/apps";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Shield, FileText, HelpCircle, FileClock, Trash2, ExternalLink, Sparkles, ShieldCheck, BarChart3, Cloud, Target, Zap, CheckCircle2 } from "lucide-react";
import { AppHeroClient } from "@/components/apps/AppHeroClient";

function getFeatureIcon(featureText: string) {
  const text = featureText.toLowerCase();
  if (text.includes("ai") || text.includes("smart") || text.includes("categorization")) return Sparkles;
  if (text.includes("budget") || text.includes("chart") || text.includes("insight") || text.includes("analytics")) return BarChart3;
  if (text.includes("cloud") || text.includes("sync") || text.includes("backup")) return Cloud;
  if (text.includes("secure") || text.includes("privacy") || text.includes("lock")) return ShieldCheck;
  if (text.includes("goal") || text.includes("target")) return Target;
  if (text.includes("real-time") || text.includes("fast") || text.includes("speed")) return Zap;
  return CheckCircle2;
}

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
    title: `${app.name} - App Details & Features`,
    description: app.description,
  };
}

export default async function AppDetailPage({ params }: AppParams) {
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
            <h2 className="text-2xl font-bold font-heading text-white mb-6 flex items-center gap-3">
              <span>App Preview</span>
            </h2>
            <div className="flex gap-5 overflow-x-auto pb-6 scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent snap-x">
              {app.screenshots.map((screenshot, i) => (
                <div key={i} className="w-[180px] sm:w-[210px] md:w-[240px] shrink-0 snap-center rounded-[1.75rem] overflow-hidden border border-white/10 dark:border-white/15 border-slate-200 shadow-xl bg-slate-900 aspect-[9/18] hover:border-primary-blue/50 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                  <img src={screenshot.url} alt={screenshot.alt} className="w-full h-full object-cover object-top" />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Features - Premium Redesign */}
        {app.features && app.features.length > 0 && (
          <div id="features" className="mb-24 scroll-mt-32">
            <div className="flex flex-col items-start mb-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-[11px] font-extrabold text-emerald-400 tracking-wider uppercase mb-3">
                <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
                Key Capabilities
              </div>
              <h2 className="text-3xl md:text-4xl font-bold font-heading text-white">
                Everything You Need to Succeed
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {app.features.map((feature, i) => {
                const IconComponent = getFeatureIcon(feature);
                const featureNum = (i + 1).toString().padStart(2, "0");
                return (
                  <div 
                    key={i} 
                    className="group relative p-7 rounded-3xl bg-gradient-to-br from-white/5 via-black/40 to-primary-blue/5 border border-white/10 dark:border-white/10 border-slate-300 backdrop-blur-xl hover:border-primary-blue/50 hover:shadow-[0_0_30px_rgba(37,99,235,0.2)] transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between"
                  >
                    {/* Top Row: Icon + Number Badge */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary-blue/20 via-cyan-500/10 to-teal-400/20 border border-primary-blue/30 flex items-center justify-center text-cyan-400 shrink-0 shadow-md group-hover:scale-110 group-hover:border-cyan-400/50 transition-all duration-300">
                        <IconComponent className="w-6 h-6" />
                      </div>
                      <span className="font-mono text-xs font-black text-muted-foreground px-2.5 py-1 rounded-lg bg-white/5 border border-white/10">
                        #{featureNum}
                      </span>
                    </div>

                    {/* Feature Description */}
                    <p className="text-foreground font-bold text-lg leading-relaxed group-hover:text-primary-blue transition-colors">
                      {feature}
                    </p>

                    {/* Bottom Status Dot Accent */}
                    <div className="mt-6 pt-4 border-t border-white/5 flex items-center gap-2 text-xs font-semibold text-muted-foreground">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)] animate-pulse" />
                      Production Feature
                    </div>
                  </div>
                );
              })}
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

            <Link href={`/apps/${app.slug}/support`} className="flex flex-col gap-4 p-6 rounded-3xl bg-gradient-to-br from-white/5 to-transparent border border-white/10 hover:border-orange-500/30 transition-all group overflow-hidden relative">
              <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/10 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="w-12 h-12 rounded-2xl bg-orange-500/10 flex items-center justify-center text-orange-400 group-hover:scale-110 transition-transform">
                <Shield className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-1 group-hover:text-orange-400 transition-colors">24/7 Support</h3>
                <p className="text-sm text-muted-foreground">Need help? Get in touch with our dedicated support team.</p>
              </div>
              <ExternalLink className="absolute top-6 right-6 w-5 h-5 text-white/20 group-hover:text-orange-400 transition-colors" />
            </Link>

            <Link href={`/apps/${app.slug}/delete-account`} className="flex flex-col gap-4 p-6 rounded-3xl bg-gradient-to-br from-red-500/5 to-transparent border border-red-500/10 hover:border-red-500/30 transition-all group overflow-hidden relative">
              <div className="absolute top-0 right-0 w-32 h-32 bg-red-500/10 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="w-12 h-12 rounded-2xl bg-red-500/10 flex items-center justify-center text-red-500 group-hover:scale-110 transition-transform">
                <Trash2 className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-red-400 mb-1 group-hover:text-red-300 transition-colors">Delete Account</h3>
                <p className="text-sm text-red-500/60">Permanently remove your account and data.</p>
              </div>
              <ExternalLink className="absolute top-6 right-6 w-5 h-5 text-red-500/30 group-hover:text-red-400 transition-colors" />
            </Link>
          </div>
        </div>
      </Container>
    </main>
  );
}
