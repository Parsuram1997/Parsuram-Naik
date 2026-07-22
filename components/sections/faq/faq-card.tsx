"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ThumbsUp, ThumbsDown, Check, HelpCircle, Smartphone, GraduationCap, Globe, Briefcase, Rocket, Video } from "lucide-react";
import { FAQItem } from "@/config/faq";
import { GlassCard } from "@/components/ui/glass-card";

interface FAQCardProps {
  faq: FAQItem;
  isOpen: boolean;
  onToggle: () => void;
  index: number;
}

export function FAQCard({ faq, isOpen, onToggle, index }: FAQCardProps) {
  const [feedback, setFeedback] = useState<"helpful" | "unhelpful" | null>(null);

  // Category Icon & Color Helper
  const getCategoryTheme = (category: string) => {
    switch (category) {
      case "Apps":
        return {
          icon: Smartphone,
          badge: "bg-cyan-500/10 border-cyan-500/30 text-cyan-400",
          glow: "hover:border-cyan-500/40",
          activeGlow: "border-cyan-500/50 bg-gradient-to-r from-cyan-950/20 via-black/60 to-transparent"
        };
      case "YouTube":
        return {
          icon: Video,
          badge: "bg-rose-500/10 border-rose-500/30 text-rose-400",
          glow: "hover:border-rose-500/40",
          activeGlow: "border-rose-500/50 bg-gradient-to-r from-rose-950/20 via-black/60 to-transparent"
        };
      case "Courses":
        return {
          icon: GraduationCap,
          badge: "bg-emerald-500/10 border-emerald-500/30 text-emerald-400",
          glow: "hover:border-emerald-500/40",
          activeGlow: "border-emerald-500/50 bg-gradient-to-r from-emerald-950/20 via-black/60 to-transparent"
        };
      case "Websites":
        return {
          icon: Globe,
          badge: "bg-indigo-500/10 border-indigo-500/30 text-indigo-400",
          glow: "hover:border-indigo-500/40",
          activeGlow: "border-indigo-500/50 bg-gradient-to-r from-indigo-950/20 via-black/60 to-transparent"
        };
      case "Business":
        return {
          icon: Briefcase,
          badge: "bg-amber-500/10 border-amber-500/30 text-amber-400",
          glow: "hover:border-amber-500/40",
          activeGlow: "border-amber-500/50 bg-gradient-to-r from-amber-950/20 via-black/60 to-transparent"
        };
      case "Career":
        return {
          icon: Rocket,
          badge: "bg-purple-500/10 border-purple-400/30 text-purple-400",
          glow: "hover:border-purple-500/40",
          activeGlow: "border-purple-500/50 bg-gradient-to-r from-purple-950/20 via-black/60 to-transparent"
        };
      default:
        return {
          icon: HelpCircle,
          badge: "bg-blue-500/10 border-blue-500/30 text-blue-400",
          glow: "hover:border-blue-500/40",
          activeGlow: "border-primary-blue/50 bg-gradient-to-r from-blue-950/20 via-black/60 to-transparent"
        };
    }
  };

  const theme = getCategoryTheme(faq.category);
  const CategoryIcon = theme.icon;
  const itemNumber = (index + 1).toString().padStart(2, "0");

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: Math.min(index * 0.04, 0.2) }}
    >
      <GlassCard 
        className={`p-0 overflow-hidden rounded-2xl border transition-all duration-300 ${
          isOpen 
            ? `${theme.activeGlow} shadow-[0_0_25px_rgba(37,99,235,0.15)]` 
            : `border-white/10 dark:border-white/10 border-slate-300 bg-black/30 dark:bg-black/30 bg-white ${theme.glow} hover:-translate-y-0.5`
        }`}
      >
        {/* Accordion Toggle Bar */}
        <button
          onClick={onToggle}
          className="w-full flex items-center justify-between p-5 md:p-6 text-left focus:outline-none cursor-pointer group"
          aria-expanded={isOpen}
        >
          <div className="flex items-center gap-4 min-w-0 pr-4">
            {/* Number Badge */}
            <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 font-mono text-xs font-black text-foreground group-hover:border-white/30 transition-colors shadow-inner">
              {itemNumber}
            </div>

            <div className="min-w-0">
              {/* Category Pill Tag */}
              <div className="mb-1.5 flex items-center gap-2">
                <span className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full border text-[10px] font-extrabold tracking-widest uppercase ${theme.badge}`}>
                  <CategoryIcon className="w-3 h-3" />
                  {faq.category}
                </span>
                {faq.featured && (
                  <span className="text-[9px] font-bold px-2 py-0.5 rounded-full bg-yellow-500/10 border border-yellow-500/30 text-yellow-400 uppercase tracking-wider">
                    Popular
                  </span>
                )}
              </div>

              {/* Question Text */}
              <h4 className={`font-heading font-extrabold text-base md:text-lg leading-snug transition-colors ${
                isOpen ? "text-foreground" : "text-foreground/90 group-hover:text-primary-blue"
              }`}>
                {faq.question}
              </h4>
            </div>
          </div>

          {/* Glowing Chevron Button */}
          <div className={`w-10 h-10 rounded-full border flex items-center justify-center shrink-0 transition-all duration-300 ${
            isOpen 
              ? "rotate-180 bg-primary-blue text-white border-primary-blue shadow-[0_0_15px_rgba(37,99,235,0.6)]" 
              : "border-white/10 dark:border-white/10 border-slate-300 text-muted-foreground group-hover:text-foreground group-hover:border-white/30 group-hover:scale-110"
          }`}>
            <ChevronDown className="w-5 h-5" />
          </div>
        </button>
        
        {/* Animated Answer Body */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.35, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <div className="px-6 md:px-8 pb-6 pt-2 text-muted-foreground text-sm border-t border-white/10 dark:border-white/10 border-slate-200">
                <div className="flex gap-4 pt-4">
                  {/* Left Gradient Vertical Accent Bar */}
                  <div className="w-1 rounded-full bg-gradient-to-b from-primary-blue via-teal-400 to-primary-green shrink-0 my-0.5" />
                  
                  <div className="flex-1 space-y-4">
                    <p className="text-base text-foreground/90 leading-relaxed font-medium">
                      {faq.answer}
                    </p>

                    {/* Helpful Feedback Toolbar */}
                    <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-white/5">
                      <span className="text-xs font-semibold text-muted-foreground">
                        Was this answer helpful?
                      </span>

                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => setFeedback("helpful")}
                          className={`px-3 py-1.5 rounded-lg border text-xs font-bold flex items-center gap-1.5 transition-all cursor-pointer ${
                            feedback === "helpful"
                              ? "bg-emerald-500/20 text-emerald-400 border-emerald-500/50 shadow-md"
                              : "bg-white/5 border-white/10 text-muted-foreground hover:text-white hover:bg-white/10"
                          }`}
                        >
                          {feedback === "helpful" ? <Check className="w-3.5 h-3.5" /> : <ThumbsUp className="w-3.5 h-3.5" />}
                          Yes
                        </button>

                        <button
                          onClick={() => setFeedback("unhelpful")}
                          className={`px-3 py-1.5 rounded-lg border text-xs font-bold flex items-center gap-1.5 transition-all cursor-pointer ${
                            feedback === "unhelpful"
                              ? "bg-rose-500/20 text-rose-400 border-rose-500/50 shadow-md"
                              : "bg-white/5 border-white/10 text-muted-foreground hover:text-white hover:bg-white/10"
                          }`}
                        >
                          {feedback === "unhelpful" ? <Check className="w-3.5 h-3.5" /> : <ThumbsDown className="w-3.5 h-3.5" />}
                          No
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </GlassCard>
    </motion.div>
  );
}
