"use client";

import { motion } from "framer-motion";
import { Goal } from "@/config/journey";
import { GlassCard } from "@/components/ui/glass-card";
import { Smartphone, GraduationCap, Sparkles, Globe, ArrowRight, CheckCircle2 } from "lucide-react";
import { FiYoutube } from "react-icons/fi";

const goalIcons: Record<string, any> = {
  current: Smartphone,
  next: FiYoutube,
  future: GraduationCap,
  ai: Sparkles,
  vision: Globe,
};

const phaseBadges: Record<string, { label: string; bg: string; text: string; border: string; pulsing?: boolean }> = {
  Current: {
    label: "ACTIVE FOCUS",
    bg: "bg-emerald-500/10 dark:bg-emerald-500/20",
    text: "text-emerald-500 dark:text-emerald-400",
    border: "border-emerald-500/30",
    pulsing: true,
  },
  "Next Goal": {
    label: "UP NEXT",
    bg: "bg-blue-500/10 dark:bg-blue-500/20",
    text: "text-blue-500 dark:text-blue-400",
    border: "border-blue-500/30",
  },
  "Future Goal": {
    label: "ROADMAP",
    bg: "bg-purple-500/10 dark:bg-purple-500/20",
    text: "text-purple-500 dark:text-purple-400",
    border: "border-purple-500/30",
  },
  "Long-Term Vision": {
    label: "STRATEGIC VISION",
    bg: "bg-amber-500/10 dark:bg-amber-500/20",
    text: "text-amber-500 dark:text-amber-400",
    border: "border-amber-500/30",
  },
};

export function GoalRoadmap({ goals }: { goals: Goal[] }) {
  return (
    <div className="relative flex flex-col gap-6 pl-4 md:pl-6">
      {/* Vertical Connecting Line */}
      <div className="absolute left-[31px] md:left-[39px] top-6 bottom-6 w-0.5 bg-gradient-to-b from-primary-blue via-primary-green to-purple-500/40 pointer-events-none" />

      {goals.map((goal, index) => {
        const IconComponent = goalIcons[goal.id] || Sparkles;
        const badge = phaseBadges[goal.phase] || phaseBadges["Future Goal"];
        const isCurrent = goal.phase === "Current";

        return (
          <motion.div
            key={goal.id}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="relative flex items-start gap-4 md:gap-6 group"
          >
            {/* Step Node Icon */}
            <div className={`relative z-10 flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-2xl shrink-0 transition-all duration-300 ${
              isCurrent 
                ? "bg-gradient-to-br from-primary-blue to-primary-green text-white shadow-[0_0_20px_rgba(37,99,235,0.4)] scale-105" 
                : "glass bg-background/80 dark:bg-background/50 border border-white/10 text-muted-foreground group-hover:text-primary-blue group-hover:border-primary-blue/30 group-hover:scale-105"
            }`}>
              <IconComponent className="w-5 h-5 md:w-6 md:h-6" />
              {isCurrent && (
                <span className="absolute -top-1 -right-1 flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
                </span>
              )}
            </div>

            {/* Goal Card */}
            <div className="flex-1">
              <GlassCard className={`p-5 md:p-6 transition-all duration-300 border-white/10 relative overflow-hidden group-hover:-translate-y-1 ${
                isCurrent 
                  ? "border-primary-blue/40 shadow-[0_0_25px_rgba(37,99,235,0.15)] bg-gradient-to-r from-primary-blue/5 via-transparent to-primary-green/5" 
                  : "hover:border-primary-blue/30"
              }`}>
                {/* Background glow on hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary-blue/5 via-primary-green/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                
                <div className="relative z-10 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div>
                    <div className="flex items-center gap-2 mb-1.5">
                      <span className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full border text-[11px] font-bold tracking-wider uppercase ${badge.bg} ${badge.text} ${badge.border}`}>
                        {badge.pulsing && <CheckCircle2 className="w-3 h-3 animate-pulse" />}
                        {badge.label}
                      </span>
                      <span className="text-xs text-muted-foreground font-mono">STEP 0{index + 1}</span>
                    </div>

                    <h4 className="text-base md:text-lg font-bold text-foreground group-hover:text-primary-blue transition-colors">
                      {goal.title}
                    </h4>
                  </div>

                  <div className="hidden sm:flex items-center justify-center w-8 h-8 rounded-full bg-white/5 border border-white/10 text-muted-foreground group-hover:text-primary-blue group-hover:border-primary-blue/30 group-hover:translate-x-1 transition-all shrink-0">
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </GlassCard>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}
