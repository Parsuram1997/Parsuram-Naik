"use client";

import { motion, useSpring, useTransform, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { GlassCard } from "@/components/ui/glass-card";

interface AchievementItem {
  label: string;
  value: number;
  suffix: string;
}

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "100px" });
  
  // Spring configuration for smooth counting
  const springValue = useSpring(0, {
    stiffness: 50,
    damping: 20,
    duration: 2000
  });
  
  // Display value rounded to nearest integer
  const displayValue = useTransform(springValue, (current) => Math.floor(current));
  
  // Trigger animation when in view
  useEffect(() => {
    if (isInView) {
      springValue.set(value);
    }
  }, [isInView, value, springValue]);

  return (
    <span ref={ref} className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-primary-blue to-primary-green">
      <motion.span>{displayValue}</motion.span>{suffix}
    </span>
  );
}

export function AboutAchievements({ data }: { data: AchievementItem[] }) {
  return (
    <div className="mb-16">
      <h4 className="text-xl font-heading font-bold mb-6 text-foreground">Milestones & Impact</h4>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {data.map((item, idx) => (
          <GlassCard
            key={idx}
            className="flex flex-col items-center justify-center py-6 px-4 text-center group"
          >
            <Counter value={item.value} suffix={item.suffix} />
            <div className="text-sm font-semibold text-muted-foreground mt-2 group-hover:text-foreground transition-colors">
              {item.label}
            </div>
          </GlassCard>
        ))}
      </div>
    </div>
  );
}
