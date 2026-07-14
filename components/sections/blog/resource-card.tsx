"use client";

import { motion } from "framer-motion";
import { Resource } from "@/config/blog";
import { GlassCard } from "@/components/ui/glass-card";
import { Download, Smartphone, GitBranch, Database, FileText, Code2, Layout } from "lucide-react";

export function ResourceCard({ resource, index }: { resource: Resource; index: number }) {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Smartphone": return <Smartphone className="w-5 h-5" />;
      case "GitBranch": return <GitBranch className="w-5 h-5" />;
      case "Database": return <Database className="w-5 h-5" />;
      case "FileText": return <FileText className="w-5 h-5" />;
      case "Code2": return <Code2 className="w-5 h-5" />;
      case "Layout": return <Layout className="w-5 h-5" />;
      default: return <FileText className="w-5 h-5" />;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case "PDF": return "text-red-400 bg-red-400/10 border-red-400/30";
      case "ZIP": return "text-yellow-400 bg-yellow-400/10 border-yellow-400/30";
      case "TXT": return "text-blue-400 bg-blue-400/10 border-blue-400/30";
      case "FIG": return "text-purple-400 bg-purple-400/10 border-purple-400/30";
      default: return "text-white bg-white/10 border-white/20";
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
    >
      <GlassCard className="p-4 flex items-center justify-between border-white/5 hover:border-primary-blue/30 group transition-all duration-300">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-muted-foreground group-hover:text-primary-blue group-hover:bg-primary-blue/10 transition-colors">
            {getIcon(resource.icon)}
          </div>
          <div>
            <h5 className="font-bold text-sm text-foreground group-hover:text-primary-blue transition-colors">{resource.title}</h5>
            <div className="flex items-center gap-2 mt-1">
              <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded border ${getTypeColor(resource.fileType)}`}>
                {resource.fileType}
              </span>
              <span className="text-xs text-muted-foreground">{resource.fileSize}</span>
            </div>
          </div>
        </div>
        
        <button className="w-10 h-10 rounded-full flex items-center justify-center text-muted-foreground hover:bg-white/10 hover:text-white transition-colors">
          <Download className="w-4 h-4" />
        </button>
      </GlassCard>
    </motion.div>
  );
}
