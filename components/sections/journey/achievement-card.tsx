"use client";

import { useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Achievement } from "@/config/journey";
import { GlassCard } from "@/components/ui/glass-card";

function Counter({ from, to, duration = 2 }: { from: number; to: number; duration?: number }) {
  const [count, setCount] = useState(from);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "100px" });

  useEffect(() => {
    if (!isInView) return;

    let startTime: number | null = null;
    const updateCounter = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      
      // Easing function: easeOutExpo
      const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      
      setCount(Math.floor(easeProgress * (to - from) + from));

      if (progress < 1) {
        requestAnimationFrame(updateCounter);
      }
    };

    requestAnimationFrame(updateCounter);
  }, [isInView, from, to, duration]);

  return <span ref={ref}>{count}</span>;
}

export function AchievementCard({ achievement, index }: { achievement: Achievement; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "150px" }}
      transition={{ duration: 0.3, delay: Math.min(index * 0.05, 0.2) }}
    >
      <GlassCard className="p-6 text-center group hover:border-primary-green/30 transition-colors duration-500 h-full flex flex-col justify-center">
        <div className="text-4xl md:text-5xl mb-4 group-hover:scale-110 transition-transform duration-500">
          {achievement.icon}
        </div>
        
        <div className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-2 flex justify-center items-baseline group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-primary-blue group-hover:to-primary-green transition-all">
          <Counter from={0} to={achievement.value} />
          {achievement.suffix && <span>{achievement.suffix}</span>}
        </div>
        
        <h4 className="text-sm font-semibold tracking-wider uppercase text-muted-foreground mb-1">
          {achievement.title}
        </h4>
        <p className="text-xs text-muted-foreground/70">
          {achievement.description}
        </p>
      </GlassCard>
    </motion.div>
  );
}
