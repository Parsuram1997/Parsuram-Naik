"use client";

import { motion } from "framer-motion";
import { Value } from "@/config/journey";
import { GlassCard } from "@/components/ui/glass-card";
import { Lightbulb, Star, GraduationCap, Users, Repeat, Puzzle } from "lucide-react";

const valueThemes: Record<string, { gradient: string; text: string; border: string; glow: string }> = {
  Lightbulb: {
    gradient: "from-amber-500/20 to-orange-500/10",
    text: "text-amber-500 dark:text-amber-400",
    border: "border-amber-500/30",
    glow: "group-hover:shadow-[0_0_20px_rgba(245,158,11,0.2)]",
  },
  Star: {
    gradient: "from-blue-500/20 to-indigo-500/10",
    text: "text-blue-500 dark:text-blue-400",
    border: "border-blue-500/30",
    glow: "group-hover:shadow-[0_0_20px_rgba(59,130,246,0.2)]",
  },
  GraduationCap: {
    gradient: "from-purple-500/20 to-pink-500/10",
    text: "text-purple-500 dark:text-purple-400",
    border: "border-purple-500/30",
    glow: "group-hover:shadow-[0_0_20px_rgba(168,85,247,0.2)]",
  },
  Users: {
    gradient: "from-emerald-500/20 to-teal-500/10",
    text: "text-emerald-500 dark:text-emerald-400",
    border: "border-emerald-500/30",
    glow: "group-hover:shadow-[0_0_20px_rgba(16,185,129,0.2)]",
  },
  Repeat: {
    gradient: "from-cyan-500/20 to-sky-500/10",
    text: "text-cyan-500 dark:text-cyan-400",
    border: "border-cyan-500/30",
    glow: "group-hover:shadow-[0_0_20px_rgba(6,182,212,0.2)]",
  },
  Puzzle: {
    gradient: "from-rose-500/20 to-red-500/10",
    text: "text-rose-500 dark:text-rose-400",
    border: "border-rose-500/30",
    glow: "group-hover:shadow-[0_0_20px_rgba(244,63,94,0.2)]",
  },
};

function ValueIcon({ name, className }: { name: string; className?: string }) {
  switch (name) {
    case "Lightbulb": return <Lightbulb className={className} />;
    case "Star": return <Star className={className} />;
    case "GraduationCap": return <GraduationCap className={className} />;
    case "Users": return <Users className={className} />;
    case "Repeat": return <Repeat className={className} />;
    case "Puzzle": return <Puzzle className={className} />;
    default: return <Star className={className} />;
  }
}

export function ValuesGrid({ values }: { values: Value[] }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5">
      {values.map((value, index) => {
        const theme = valueThemes[value.icon] || valueThemes.Star;

        return (
          <motion.div
            key={value.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.08 }}
          >
            <GlassCard className={`p-5 md:p-6 h-full flex flex-col justify-between border-white/10 hover:border-white/20 transition-all duration-300 group hover:-translate-y-1 ${theme.glow}`}>
              <div>
                {/* Icon Container with Custom Gradient */}
                <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${theme.gradient} border ${theme.border} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-sm`}>
                  <ValueIcon name={value.icon} className={`w-6 h-6 ${theme.text}`} />
                </div>

                {/* Title */}
                <h4 className="text-base md:text-lg font-bold text-foreground mb-2 group-hover:text-primary-blue transition-colors">
                  {value.title}
                </h4>

                {/* Description */}
                <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </div>
            </GlassCard>
          </motion.div>
        );
      })}
    </div>
  );
}
