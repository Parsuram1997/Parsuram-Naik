"use client";

import { motion } from "framer-motion";
import { AppData } from "@/types/app";
import { Download, Star, ShieldCheck, Activity, Zap, Shield, Smartphone, ArrowRight, ExternalLink } from "lucide-react";

export function AppHeroClient({ app }: { app: AppData }) {
  return (
    <div className="relative w-full overflow-hidden rounded-[2.5rem] bg-black/40 border border-white/10 glass mb-16 p-6 md:p-12">
      {/* Background Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[2.5rem]">
        <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-primary-blue/20 blur-3xl transform-gpu" />
        <div className="absolute top-[40%] -right-[10%] w-[40%] h-[60%] rounded-full bg-purple-600/15 blur-3xl transform-gpu" />
      </div>

      <div className="relative z-10 flex flex-col xl:flex-row gap-12 items-start justify-between">
        {/* Left Content Area */}
        <div className="flex-1 w-full xl:max-w-3xl">
          <div className="flex flex-col md:flex-row gap-8 items-start mb-8">
            {/* Premium App Icon */}
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="relative shrink-0"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-primary-blue to-purple-500 rounded-3xl blur-xl opacity-40 group-hover:opacity-60 transition-opacity" />
              <div className="relative w-32 h-32 md:w-44 md:h-44 rounded-3xl overflow-hidden bg-black border border-white/20 shadow-2xl">
                <img 
                  src={app.icon} 
                  alt={`${app.name} icon`} 
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                />
              </div>
              
              {/* Category Badge Floating on Icon */}
              {app.category && (
                <div className="absolute -bottom-3 -right-3 px-4 py-1.5 rounded-xl bg-black/80 backdrop-blur-md border border-white/20 shadow-xl flex items-center gap-1.5">
                  <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                  <span className="text-xs font-semibold text-white tracking-wide uppercase">{app.category}</span>
                </div>
              )}
            </motion.div>
            
            {/* App Title and Quick Stats */}
            <div className="flex-1 mt-2">
              <motion.div 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="flex flex-wrap items-center gap-3 mb-4"
              >
                <h1 className="text-4xl md:text-6xl font-heading font-black tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-white/60">
                  {app.name}
                </h1>
                {app.status === "Stable" && (
                  <span className="px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-xs font-bold tracking-wider uppercase flex items-center gap-1">
                    <ShieldCheck className="w-3 h-3" /> Stable
                  </span>
                )}
              </motion.div>
              
              <motion.p 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl leading-relaxed"
              >
                {app.description}
              </motion.p>
              
              {/* Premium Stat Pills */}
              <motion.div 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="flex flex-wrap gap-4 mb-8"
              >
                {app.rating && (
                  <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/10 glass">
                    <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                    <span className="text-white font-bold">{app.rating}</span>
                    <span className="text-muted-foreground text-sm border-l border-white/10 pl-2">Rating</span>
                  </div>
                )}
                {app.downloads && (
                  <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/10 glass">
                    <Download className="w-4 h-4 text-primary-blue" />
                    <span className="text-white font-bold">{app.downloads}</span>
                    <span className="text-muted-foreground text-sm border-l border-white/10 pl-2">Downloads</span>
                  </div>
                )}
                <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/10 glass">
                  <Activity className="w-4 h-4 text-purple-400" />
                  <span className="text-white font-bold">v{app.version}</span>
                  <span className="text-muted-foreground text-sm border-l border-white/10 pl-2">Latest</span>
                </div>
              </motion.div>

              {/* CTAs */}
              <motion.div 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="flex flex-wrap items-center gap-4"
              >
                {app.playStoreUrl && (
                  <a 
                    href={app.playStoreUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative flex items-center justify-center gap-3 px-8 py-4 rounded-2xl bg-white text-black font-bold hover:scale-[1.02] active:scale-[0.98] transition-all overflow-hidden"
                  >
                    <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-black/5 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]" />
                    <Download className="w-5 h-5" />
                    <span className="text-lg">Get on Google Play</span>
                  </a>
                )}
                <a 
                  href="#features"
                  className="flex items-center justify-center gap-2 px-8 py-4 rounded-2xl bg-white/5 text-white font-semibold hover:bg-white/10 transition-colors border border-white/10 glass"
                >
                  <Zap className="w-5 h-5 text-yellow-400" />
                  View Features
                </a>
              </motion.div>
            </div>
          </div>
        </div>
        
        {/* Right Info Panel - Premium Details */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="w-full xl:w-[320px] shrink-0"
        >
          <div className="bg-black/60 rounded-[2rem] p-6 border border-white/10 shadow-2xl backdrop-blur-xl">
            <h3 className="text-xs font-bold text-muted-foreground uppercase tracking-[0.2em] mb-6 flex items-center gap-2">
              <Shield className="w-4 h-4 text-primary-blue" />
              App Information
            </h3>
            
            <div className="space-y-4">
              <InfoRow label="Developer" value={app.developer} highlight />
              <InfoRow label="Platform" value={app.platform || "Android"} icon={<Smartphone className="w-4 h-4 text-muted-foreground" />} />
              <InfoRow label="Version" value={app.version} />
              <InfoRow label="Last Updated" value={app.lastUpdated} />
              <div className="h-px w-full bg-white/10 my-2" />
              <InfoRow label="Category" value={app.category || "Utility"} />
              <InfoRow label="Cloud Sync" value={app.cloudSync || "N/A"} />
              <InfoRow label="Auth" value={app.authentication || "N/A"} />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

function InfoRow({ label, value, highlight = false, icon }: { label: string, value: string, highlight?: boolean, icon?: React.ReactNode }) {
  return (
    <div className="flex justify-between items-center text-sm group">
      <div className="flex items-center gap-2">
        {icon}
        <span className="text-muted-foreground group-hover:text-white/70 transition-colors">{label}</span>
      </div>
      <span className={`font-semibold ${highlight ? 'text-primary-blue' : 'text-white'}`}>
        {value}
      </span>
    </div>
  );
}
