"use client";

import { motion } from "framer-motion";
import { Resource } from "@/config/blog";
import { GlassCard } from "@/components/ui/glass-card";
import { Download, Smartphone, GitBranch, Database, FileText, Code2, Layout, CheckCircle2 } from "lucide-react";

export function ResourceCard({ resource, index }: { resource: Resource; index: number }) {
  const getIconTheme = (iconName: string) => {
    switch (iconName) {
      case "Smartphone": return { icon: <Smartphone className="w-5 h-5" />, bg: "from-emerald-500/20 to-teal-500/10", text: "text-emerald-500 dark:text-emerald-400", border: "border-emerald-500/30" };
      case "GitBranch": return { icon: <GitBranch className="w-5 h-5" />, bg: "from-orange-500/20 to-red-500/10", text: "text-orange-500 dark:text-orange-400", border: "border-orange-500/30" };
      case "Database": return { icon: <Database className="w-5 h-5" />, bg: "from-blue-500/20 to-indigo-500/10", text: "text-blue-500 dark:text-blue-400", border: "border-blue-500/30" };
      case "FileText": return { icon: <FileText className="w-5 h-5" />, bg: "from-purple-500/20 to-pink-500/10", text: "text-purple-500 dark:text-purple-400", border: "border-purple-500/30" };
      case "Code2": return { icon: <Code2 className="w-5 h-5" />, bg: "from-cyan-500/20 to-sky-500/10", text: "text-cyan-500 dark:text-cyan-400", border: "border-cyan-500/30" };
      case "Layout": return { icon: <Layout className="w-5 h-5" />, bg: "from-amber-500/20 to-yellow-500/10", text: "text-amber-500 dark:text-amber-400", border: "border-amber-500/30" };
      default: return { icon: <FileText className="w-5 h-5" />, bg: "from-blue-500/20 to-teal-500/10", text: "text-blue-500 dark:text-blue-400", border: "border-blue-500/30" };
    }
  };

  const getTypeBadge = (type: string) => {
    switch (type) {
      case "PDF": return "text-rose-500 bg-rose-500/10 border-rose-500/30";
      case "ZIP": return "text-amber-500 bg-amber-500/10 border-amber-500/30";
      case "TXT": return "text-blue-500 bg-blue-500/10 border-blue-500/30";
      case "FIG": return "text-purple-500 bg-purple-500/10 border-purple-500/30";
      default: return "text-emerald-500 bg-emerald-500/10 border-emerald-500/30";
    }
  };

  const theme = getIconTheme(resource.icon);

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
    >
      <GlassCard className="p-4 flex items-center justify-between border-white/10 dark:border-white/10 border-slate-200 hover:border-primary-blue/40 group transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-0.5">
        
        <div className="flex items-center gap-3.5">
          {/* Theme-Aware Gradient Icon Container */}
          <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${theme.bg} border ${theme.border} flex items-center justify-center ${theme.text} shrink-0 group-hover:scale-110 transition-transform duration-300`}>
            {theme.icon}
          </div>

          <div>
            <h5 className="font-bold text-sm text-foreground group-hover:text-primary-blue transition-colors line-clamp-1">
              {resource.title}
            </h5>
            <div className="flex items-center gap-2 mt-1">
              <span className={`text-[10px] font-extrabold tracking-wider px-2 py-0.5 rounded-full border ${getTypeBadge(resource.fileType)}`}>
                {resource.fileType}
              </span>
              <span className="text-xs text-muted-foreground font-mono">{resource.fileSize}</span>
            </div>
          </div>
        </div>
        
        {/* Interactive Glowing Download Button */}
        <button 
          aria-label={`Download ${resource.title}`}
          className="w-10 h-10 rounded-xl bg-primary-blue/10 border border-primary-blue/20 text-primary-blue flex items-center justify-center hover:bg-gradient-to-r hover:from-primary-blue hover:to-primary-green hover:text-white hover:border-transparent hover:shadow-[0_0_15px_rgba(37,99,235,0.4)] transition-all duration-300 shrink-0"
        >
          <Download className="w-4 h-4" />
        </button>

      </GlassCard>
    </motion.div>
  );
}
