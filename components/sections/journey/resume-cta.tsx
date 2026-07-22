"use client";

import { motion } from "framer-motion";
import { GlassCard } from "@/components/ui/glass-card";
import { Button } from "@/components/ui/button";
import { Download, ArrowRight, FileText, Briefcase, Sparkles, Code } from "lucide-react";
import { useResumeModal } from "@/components/providers/resume-provider";

export function ResumeCTA() {
  const { openResumeModal } = useResumeModal();

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="w-full text-center"
    >
      <GlassCard className="relative overflow-hidden p-8 sm:p-12 md:p-16 border-white/10 dark:border-primary-blue/30 border-slate-200 shadow-2xl group transition-all duration-500 hover:shadow-[0_0_50px_rgba(37,99,235,0.15)]">
        
        {/* Ambient Glow & Mesh Background */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-gradient-to-r from-primary-blue/15 via-primary-green/15 to-purple-500/15 rounded-full blur-[100px] pointer-events-none -z-10" />

        <div className="relative z-10 flex flex-col items-center max-w-3xl mx-auto">
          
          {/* Top Pill Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass border border-primary-blue/30 text-xs font-bold text-primary-blue tracking-wider uppercase mb-6 shadow-sm"
          >
            <Sparkles className="w-3.5 h-3.5 text-primary-blue animate-pulse" />
            <span>Career Overview & Resume</span>
          </motion.div>
          
          {/* Animated Icon Badge */}
          <div 
            onClick={openResumeModal}
            className="w-18 h-18 sm:w-20 sm:h-20 rounded-3xl bg-gradient-to-br from-primary-blue/20 via-primary-green/15 to-purple-500/20 border border-primary-blue/40 flex items-center justify-center mb-6 text-primary-blue shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300 cursor-pointer"
          >
            <FileText className="w-9 h-9 sm:w-10 sm:h-10 text-primary-blue" />
          </div>
          
          <h3 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold text-foreground mb-4 leading-tight">
            Want to Know <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-blue to-primary-green">More?</span>
          </h3>
          
          <p className="text-sm sm:text-base md:text-lg text-muted-foreground mb-8 max-w-xl leading-relaxed">
            Download my updated resume to inspect my full professional history, technical architecture stack, and project achievements.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center mb-10">
            <Button 
              size="lg" 
              onClick={openResumeModal}
              className="rounded-full bg-gradient-to-r from-primary-blue to-primary-green text-white border-0 font-bold px-8 py-6 shadow-md hover:shadow-xl group/btn w-full sm:w-auto inline-flex items-center justify-center gap-2 text-sm sm:text-base cursor-pointer"
            >
              <Download className="w-4 h-4 sm:w-5 sm:h-5 group-hover/btn:-translate-y-1 transition-transform" />
              <span>Download Resume</span>
              <span className="px-2 py-0.5 bg-black/25 rounded-md text-[10px] uppercase tracking-wider font-extrabold">v3.2</span>
            </Button>
            
            <Button 
              size="lg" 
              variant="outline" 
              className="rounded-full font-bold px-8 py-6 border-white/20 dark:border-white/20 border-slate-300 hover:bg-white/10 text-foreground group/btn2 w-full sm:w-auto inline-flex items-center justify-center gap-2 text-sm sm:text-base cursor-pointer"
              onClick={() => {
                const el = document.getElementById("apps") || document.getElementById("websites");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }}
            >
              <span>Explore Projects</span>
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover/btn2:translate-x-1 transition-transform" />
            </Button>
          </div>

          {/* Quick Highlights Bar */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-6 w-full pt-8 border-t border-white/10 dark:border-white/10 border-slate-200">
            <div className="flex items-center justify-center gap-2.5 text-xs sm:text-sm font-semibold text-muted-foreground">
              <Briefcase className="w-4 h-4 text-primary-blue shrink-0" />
              <span>3+ Years Engineering</span>
            </div>
            <div className="flex items-center justify-center gap-2.5 text-xs sm:text-sm font-semibold text-muted-foreground">
              <Code className="w-4 h-4 text-primary-green shrink-0" />
              <span>Android & Full-Stack</span>
            </div>
            <div className="flex items-center justify-center gap-2.5 text-xs sm:text-sm font-semibold text-muted-foreground">
              <Sparkles className="w-4 h-4 text-purple-400 shrink-0" />
              <span>AI Stack & Mobile Apps</span>
            </div>
          </div>

        </div>
      </GlassCard>
    </motion.div>
  );
}
