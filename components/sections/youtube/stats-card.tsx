"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { YouTubeStatistic } from "@/config/youtube";
import { PlaySquare, Radio, Smartphone, Users, Eye, Calendar } from "lucide-react";
import { GlassCard } from "@/components/ui/glass-card";

function StatIcon({ name }: { name: string }) {
  const props = { className: "w-6 h-6 text-foreground group-hover:text-primary-blue transition-colors" };
  switch (name) {
    case "PlaySquare": return <PlaySquare {...props} />;
    case "Radio": return <Radio {...props} />;
    case "Smartphone": return <Smartphone {...props} />;
    case "Users": return <Users {...props} />;
    case "Eye": return <Eye {...props} />;
    case "Calendar": return <Calendar {...props} />;
    default: return <PlaySquare {...props} />;
  }
}

export function StatsCard({ stat, index }: { stat: YouTubeStatistic; index: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;
    let startTime: number | null = null;
    const duration = 2000;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const easeProgress = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(easeProgress * stat.value));
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [isInView, stat.value]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <GlassCard className="p-6 flex flex-col items-center text-center group border-white/5 hover:border-primary-blue/30 transition-colors h-full justify-center">
        <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-primary-blue/10 transition-all duration-300">
          <StatIcon name={stat.icon} />
        </div>
        <div className="text-3xl font-heading font-bold text-foreground mb-1 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-primary-blue group-hover:to-primary-green transition-all">
          {count}{stat.suffix}
        </div>
        <p className="text-xs uppercase tracking-wider font-semibold text-muted-foreground">
          {stat.title}
        </p>
      </GlassCard>
    </motion.div>
  );
}
