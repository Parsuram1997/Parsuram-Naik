import { getAppBySlug } from "@/lib/data/apps";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { Container } from "@/components/ui/container";
import Link from "next/link";
import { ChevronLeft, FileClock } from "lucide-react";

interface AppParams {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params }: AppParams): Promise<Metadata> {
  const app = getAppBySlug(params.slug);
  if (!app) return { title: "Not Found" };
  return {
    title: `Release Notes | ${app.name} | Parsu Tech`,
    description: `Release notes and version history for ${app.name}.`,
  };
}

export default function ChangelogPage({ params }: AppParams) {
  const app = getAppBySlug(params.slug);

  if (!app || !app.changelog) {
    notFound();
  }

  return (
    <main className="min-h-screen pt-32 pb-24">
      <Container className="max-w-4xl">
        <Link href={`/apps/${app.slug}`} className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-white transition-colors mb-8">
          <ChevronLeft className="w-4 h-4 mr-1" />
          Back to {app.name}
        </Link>
        
        <div className="bg-white/5 border border-white/10 rounded-3xl p-8 md:p-12 glass">
          <div className="flex items-center gap-4 mb-12 border-b border-white/10 pb-8">
            <div className="w-16 h-16 rounded-2xl bg-teal-500/10 flex items-center justify-center text-teal-500 shrink-0">
              <FileClock className="w-8 h-8" />
            </div>
            <div>
              <h1 className="text-3xl md:text-5xl font-heading font-bold text-white tracking-tight mb-2">
                Release Notes
              </h1>
              <p className="text-lg text-muted-foreground">
                What's new in {app.name}
              </p>
            </div>
          </div>
          
          <div className="space-y-12 relative before:absolute before:inset-0 before:ml-4 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-white/10 before:to-transparent">
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
      </Container>
    </main>
  );
}
