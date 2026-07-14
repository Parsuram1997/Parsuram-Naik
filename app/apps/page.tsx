import { apps } from "@/lib/data/apps";
import { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Zap, ChevronRight, Smartphone } from "lucide-react";

export const metadata: Metadata = {
  title: "Apps | Parsu Tech",
  description: "Explore all premium Android applications and software products created by Parsu Tech.",
};

export default function AppsHubPage() {
  return (
    <main className="min-h-screen pt-32 pb-24">
      <Container className="max-w-[1400px]">
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-sm font-medium text-muted-foreground mb-6">
            <Smartphone className="w-4 h-4 text-primary-blue" />
            Apps Hub
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-6 tracking-tight">
            Our <span className="bg-gradient-to-r from-primary-blue to-primary-green bg-clip-text text-transparent">Applications</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Explore our suite of premium Android applications designed to solve real-world problems with elegant solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {apps.map((app) => (
            <Link key={app.id} href={`/apps/${app.slug}`} className="group block">
              <div className="flex flex-col h-full bg-white/5 border border-white/10 rounded-2xl overflow-hidden glass transition-all hover:bg-white/10 hover:border-white/20">
                <div className="p-6 flex items-start gap-4">
                  <div className="w-16 h-16 rounded-2xl overflow-hidden bg-black/40 border border-white/10 shrink-0 relative">
                    <img 
                      src={app.icon} 
                      alt={`${app.name} icon`} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h2 className="text-xl font-bold text-white mb-1 truncate">{app.name}</h2>
                    <p className="text-sm text-muted-foreground mb-2">{app.developer}</p>
                    <div className="inline-flex px-2 py-0.5 rounded bg-primary-blue/10 text-primary-blue text-[10px] uppercase tracking-wider font-semibold">
                      v{app.version}
                    </div>
                  </div>
                </div>
                
                <div className="px-6 pb-6 flex-1 flex flex-col">
                  <p className="text-sm text-muted-foreground line-clamp-3 mb-6 flex-1">
                    {app.description}
                  </p>
                  
                  <div className="flex items-center text-sm font-semibold text-white group-hover:text-primary-green transition-colors">
                    View Details
                    <ChevronRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </main>
  );
}
