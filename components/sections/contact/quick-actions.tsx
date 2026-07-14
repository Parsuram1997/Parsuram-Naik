"use client";

import { motion } from "framer-motion";
import { quickActions } from "@/config/contact";
import { GlassCard } from "@/components/ui/glass-card";
import { Download, Calendar, Smartphone, Play, ArrowRight } from "lucide-react";

export function QuickActions() {
  
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Download": return <Download className="w-6 h-6" />;
      case "Calendar": return <Calendar className="w-6 h-6" />;
      case "Smartphone": return <Smartphone className="w-6 h-6" />;
      case "Play": return <Play className="w-6 h-6" />;
      default: return <ArrowRight className="w-6 h-6" />;
    }
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {quickActions.map((action, idx) => (
        <motion.a
          key={action.id}
          href={action.actionUrl}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: idx * 0.1 }}
          className="block h-full group"
        >
          <GlassCard className="p-6 h-full flex flex-col items-center text-center gap-4 border-white/5 group-hover:border-primary-blue/30 group-hover:bg-white/[0.03] transition-all duration-300 group-hover:-translate-y-2">
            <div className="w-16 h-16 rounded-full glass bg-white/5 border border-white/10 flex items-center justify-center text-primary-green group-hover:text-primary-blue transition-colors duration-300">
              {getIcon(action.icon)}
            </div>
            <div>
              <h4 className="font-bold text-foreground mb-1">{action.title}</h4>
              <p className="text-sm text-muted-foreground">{action.description}</p>
            </div>
          </GlassCard>
        </motion.a>
      ))}
    </div>
  );
}
