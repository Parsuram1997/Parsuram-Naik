"use client";

import { motion } from "framer-motion";
import { TechItem } from "@/config/skills-tech";
import { TechIcon } from "./tech-icon";
import { GradientText } from "@/components/ui/gradient-text";
import { GlassCard } from "@/components/ui/glass-card";

export function PrimaryStackCard({ stack }: { stack: TechItem[] }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="mb-12"
    >
      <GlassCard className="relative overflow-hidden p-8 border-primary-green/20 group">
        {/* Glows */}
        <div className="absolute -top-32 -right-32 w-64 h-64 bg-primary-green/20 rounded-full blur-3xl pointer-events-none group-hover:bg-primary-green/30 transition-colors duration-700" />
        <div className="absolute -bottom-32 -left-32 w-64 h-64 bg-primary-blue/20 rounded-full blur-3xl pointer-events-none group-hover:bg-primary-blue/30 transition-colors duration-700" />
        
        <div className="relative z-10 flex flex-col md:flex-row items-center gap-8 md:gap-12">
          
          <div className="flex-1 text-center md:text-left">
            <h3 className="text-xl md:text-2xl font-heading font-bold text-foreground mb-2">
              My <GradientText>Primary Stack</GradientText>
            </h3>
            <p className="text-sm text-muted-foreground">
              The core technologies I use daily to build robust, scalable, and beautiful digital products from front to back.
            </p>
          </div>

          <div className="flex-shrink-0 flex flex-wrap justify-center md:justify-end gap-3 w-full md:w-auto">
            {stack.map((tech, idx) => (
              <motion.div
                key={tech.id}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                whileHover={{ y: -5, scale: 1.1 }}
                className="w-12 h-12 md:w-14 md:h-14 rounded-2xl glass border border-white/20 flex items-center justify-center bg-white/5 shadow-elevation hover:border-primary-green/50 hover:bg-white/10 transition-colors group/icon"
                title={tech.name}
              >
                <TechIcon name={tech.icon} className="text-2xl md:text-3xl text-foreground/80 group-hover/icon:text-primary-green transition-colors" />
              </motion.div>
            ))}
          </div>
          
        </div>
      </GlassCard>
    </motion.div>
  );
}
