"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { YouTubeStatistic } from "@/config/youtube";
import { PlaySquare, Radio, Smartphone, Users, Eye, Calendar } from "lucide-react";
import { GlassCard } from "@/components/ui/glass-card";

function StatIcon({ name, className }: { name: string; className?: string }) {
  const props = { className: className || "w-6 h-6" };
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

  const themes = [
    {
      tag: "PUBLISHED",
      bg: "from-red-500/20 to-rose-500/10",
      text: "text-red-500 dark:text-red-400",
      border: "border-red-500/30",
      hoverBorder: "hover:border-red-500/50",
      hoverGlow: "hover:shadow-[0_0_30px_rgba(239,68,68,0.15)]",
      tagStyle: "text-red-500 bg-red-500/10 border-red-500/30",
      gradText: "from-red-500 to-rose-400"
    },
    {
      tag: "LIVE SESSIONS",
      bg: "from-emerald-500/20 to-teal-500/10",
      text: "text-emerald-500 dark:text-emerald-400",
      border: "border-emerald-500/30",
      hoverBorder: "hover:border-emerald-500/50",
      hoverGlow: "hover:shadow-[0_0_30px_rgba(16,185,129,0.15)]",
      tagStyle: "text-emerald-500 bg-emerald-500/10 border-emerald-500/30",
      gradText: "from-emerald-400 to-teal-300"
    },
    {
      tag: "VERTICAL",
      bg: "from-purple-500/20 to-indigo-500/10",
      text: "text-purple-500 dark:text-purple-400",
      border: "border-purple-500/30",
      hoverBorder: "hover:border-purple-500/50",
      hoverGlow: "hover:shadow-[0_0_30px_rgba(168,85,247,0.15)]",
      tagStyle: "text-purple-500 bg-purple-500/10 border-purple-500/30",
      gradText: "from-purple-400 to-indigo-300"
    },
    {
      tag: "COMMUNITY",
      bg: "from-amber-500/20 to-yellow-500/10",
      text: "text-amber-500 dark:text-amber-400",
      border: "border-amber-500/30",
      hoverBorder: "hover:border-amber-500/50",
      hoverGlow: "hover:shadow-[0_0_30px_rgba(245,158,11,0.15)]",
      tagStyle: "text-amber-500 bg-amber-500/10 border-amber-500/30",
      gradText: "from-amber-400 to-yellow-300"
    },
    {
      tag: "TOTAL IMPACT",
      bg: "from-cyan-500/20 to-blue-500/10",
      text: "text-cyan-500 dark:text-cyan-400",
      border: "border-cyan-500/30",
      hoverBorder: "hover:border-cyan-500/50",
      hoverGlow: "hover:shadow-[0_0_30px_rgba(6,182,212,0.15)]",
      tagStyle: "text-cyan-500 bg-cyan-500/10 border-cyan-500/30",
      gradText: "from-cyan-400 to-blue-400"
    },
    {
      tag: "EXPERIENCE",
      bg: "from-sky-500/20 to-indigo-500/10",
      text: "text-sky-500 dark:text-sky-400",
      border: "border-sky-500/30",
      hoverBorder: "hover:border-sky-500/50",
      hoverGlow: "hover:shadow-[0_0_30px_rgba(14,165,233,0.15)]",
      tagStyle: "text-sky-500 bg-sky-500/10 border-sky-500/30",
      gradText: "from-sky-400 to-indigo-400"
    }
  ];

  const theme = themes[index % themes.length];

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
    >
      <GlassCard className={`p-6 sm:p-7 flex flex-col justify-between group border-white/10 dark:border-white/10 border-slate-200 ${theme.hoverBorder} ${theme.hoverGlow} transition-all duration-300 hover:-translate-y-1.5 h-full`}>
        
        {/* Top Row: Icon Badge + Pill Tag */}
        <div className="flex items-center justify-between gap-4 mb-6">
          <div className={`w-13 h-13 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-br ${theme.bg} border ${theme.border} flex items-center justify-center ${theme.text} shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-sm`}>
            <StatIcon name={stat.icon} className="w-6 h-6 sm:w-7 sm:h-7" />
          </div>

          <span className={`text-[10px] font-black tracking-wider uppercase px-2.5 py-1 rounded-full border ${theme.tagStyle}`}>
            {theme.tag}
          </span>
        </div>

        {/* Metric Value */}
        <div className="mb-2">
          <span className={`text-3xl sm:text-4xl md:text-5xl font-extrabold font-heading text-transparent bg-clip-text bg-gradient-to-r ${theme.gradText}`}>
            {count}{stat.suffix}
          </span>
        </div>

        {/* Title */}
        <p className="text-xs sm:text-sm uppercase tracking-wider font-bold text-muted-foreground group-hover:text-foreground transition-colors">
          {stat.title}
        </p>
      </GlassCard>
    </motion.div>
  );
}
