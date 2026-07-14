"use client";

import { motion } from "framer-motion";
import { TechItem } from "@/config/skills-tech";
import { TechIcon } from "./tech-icon";

export function TechCard({ tech, index }: { tech: TechItem; index: number }) {
  
  // Map experience to progress percentage
  const expProgress = {
    Beginner: 25,
    Intermediate: 50,
    Advanced: 75,
    Expert: 100
  }[tech.experience] || 50;

  // Map experience to color
  const expColor = {
    Beginner: "bg-blue-400",
    Intermediate: "bg-yellow-400",
    Advanced: "bg-primary-blue",
    Expert: "bg-primary-green"
  }[tech.experience] || "bg-white";

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9, y: 20 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: (index % 10) * 0.05 }}
      whileHover={{ y: -5 }}
      className="relative group rounded-2xl glass border border-white/10 p-5 overflow-hidden flex flex-col gap-4 shadow-soft hover:shadow-elevation hover:border-primary-green/30 transition-all duration-300"
    >
      {/* Background Glow on Hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-blue/5 to-primary-green/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <div className="relative z-10 flex items-start justify-between gap-4">
        <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300 group-hover:border-primary-green/20">
          <TechIcon name={tech.icon} className="text-2xl text-foreground group-hover:text-primary-green transition-colors" />
        </div>
        
        <div className="flex-grow text-right">
          <span className="inline-block px-2 py-1 rounded-md bg-white/5 text-[10px] font-bold tracking-wider uppercase text-muted-foreground border border-white/5">
            {tech.category}
          </span>
        </div>
      </div>

      <div className="relative z-10 mt-2">
        <h3 className="font-bold text-lg text-foreground mb-1 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-primary-blue group-hover:to-primary-green transition-all">
          {tech.name}
        </h3>
        <p className="text-xs text-muted-foreground line-clamp-2 min-h-[32px]">
          {tech.description}
        </p>
      </div>

      <div className="relative z-10 mt-auto pt-4 flex items-center justify-between gap-4 border-t border-white/5">
        <span className="text-[11px] font-semibold uppercase tracking-wider text-foreground">
          {tech.experience}
        </span>
        <div className="h-1.5 flex-grow bg-white/5 rounded-full overflow-hidden">
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: `${expProgress}%` }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 + (index % 10) * 0.05 }}
            className={`h-full ${expColor} shadow-[0_0_10px_rgba(255,255,255,0.2)]`}
          />
        </div>
      </div>
    </motion.div>
  );
}
