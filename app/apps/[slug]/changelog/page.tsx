import { getAppBySlug } from "@/lib/data/apps";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { Container } from "@/components/ui/container";
import Link from "next/link";
import { ChevronLeft, FileClock, ShieldAlert, FileText, Info, Trash2 } from "lucide-react";

type AppParams = {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({ params }: AppParams): Promise<Metadata> {
  const { slug } = await params;
  const app = getAppBySlug(slug);
  if (!app) return { title: "Not Found" };
  return {
    title: `Release Notes | ${app.name} | Parsuram Naik`,
    description: `Release notes and version history for ${app.name}.`,
  };
}

export default async function ChangelogPage({ params }: AppParams) {
  const { slug } = await params;
  const app = getAppBySlug(slug);

  if (!app || !app.changelog) {
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
          <div className="flex flex-col md:flex-row items-start md:items-center gap-6 mb-14 border-b border-white/5 pb-10 relative z-10">
            <div className="w-16 h-16 rounded-[1.25rem] bg-teal-500/10 flex items-center justify-center text-teal-500 shrink-0 border border-teal-500/20 shadow-[inset_0_0_20px_rgba(20,184,166,0.1)]">
              <FileClock className="w-8 h-8" />
            </div>
            <div>
              <h1 className="text-4xl md:text-6xl font-heading font-extrabold tracking-tight mb-2">
                <span className="bg-clip-text text-transparent bg-gradient-to-br from-white via-white/90 to-white/30">
                  Release Notes
                </span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground/80 font-light">
                What's new in <strong className="text-white font-medium">{app.name}</strong>
              </p>
            </div>
          </div>
          
          <div className="space-y-12 relative z-10 before:absolute before:inset-0 before:ml-4 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-white/10 before:to-transparent">
            {app.changelog.map((release, index) => (
              <div key={index} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                <div className="flex items-center justify-center w-8 h-8 rounded-full border-4 border-background bg-white/20 group-hover:bg-teal-500 text-teal-500 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 ml-[2px] z-10 transition-colors" />
                <div className="w-[calc(100%-3rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-2xl bg-white/5 border border-white/10 shadow-xl group-hover:border-white/20 transition-colors">
                  <div className="flex flex-wrap items-center gap-3 mb-4">
                    <h3 className="font-bold text-white text-xl">v{release.version}</h3>
                    <time className="text-sm text-muted-foreground font-medium px-2 py-0.5 rounded-full bg-white/5 border border-white/5">
                      {release.date}
                    </time>
                  </div>
                  <ul className="space-y-2">
                    {release.changes.map((change, i) => (
                      <li key={i} className="flex items-start gap-2 text-muted-foreground text-sm">
                        <span className="w-1.5 h-1.5 rounded-full bg-teal-500/50 shrink-0 mt-2" />
                        {change}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
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

          <Link href={`/apps/${app.slug}/faq`} className="flex flex-col items-center justify-center p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors text-center group">
            <Info className="w-6 h-6 text-blue-400 mb-2" />
            <span className="text-sm font-medium text-white">FAQ</span>
          </Link>
        </div>
      </Container>
    </main>
  );
}
