"use client";

import { motion } from "framer-motion";
import { trustStats } from "@/config/testimonials";
import { GlassCard } from "@/components/ui/glass-card";
import { useEffect, useState, useRef } from "react";
import { useInView } from "framer-motion";

function Counter({ end, suffix = "", prefix = "" }: { end: number; suffix?: string; prefix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (inView) {
      let start = 0;
      // Animate for 2 seconds (2000ms)
      const duration = 2000;
      const stepTime = 16;
      const steps = duration / stepTime;
      const increment = end / steps;

      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.ceil(start));
        }
      }, stepTime);

      return () => clearInterval(timer);
    }
  }, [inView, end]);

  // Format with decimal if it's a small number like 4.9, otherwise integer
  const formattedCount = end % 1 !== 0 ? count.toFixed(1) : count.toLocaleString();

  return (
    <span ref={ref} className="font-heading font-bold text-4xl text-transparent bg-clip-text bg-gradient-to-r from-primary-blue to-primary-green">
      {prefix}{formattedCount}{suffix}
    </span>
  );
}

export function Stats() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
      {trustStats.map((stat, idx) => (
        <motion.div
          key={stat.id}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: idx * 0.1 }}
        >
          <GlassCard className="p-6 flex flex-col items-center justify-center text-center h-full border-white/5 hover:border-primary-green/30 transition-colors">
            <Counter end={stat.value} suffix={stat.suffix} prefix={stat.prefix} />
            <p className="text-xs text-muted-foreground uppercase tracking-widest font-semibold mt-2">
              {stat.label}
            </p>
          </GlassCard>
        </motion.div>
      ))}
    </div>
  );
}
