"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useTransform, animate, useInView } from "framer-motion";
import { useRef } from "react";
import { GlassCard } from "@/components/ui/glass-card";
import { FaMobileAlt, FaDownload, FaVideo, FaLaptopCode } from "react-icons/fa";

function AnimatedCounter({ from, to, duration = 2, suffix = "" }: { from: number; to: number; duration?: number, suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "100px" });
  const count = useMotionValue(from);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const [displayValue, setDisplayValue] = useState<string | number>(from);

  useEffect(() => {
    rounded.on("change", (v) => {
      setDisplayValue(v);
    });
  }, [rounded]);

  useEffect(() => {
    if (inView) {
      const controls = animate(count, to, { duration, ease: "easeOut" });
      return controls.stop;
    }
  }, [inView, count, to, duration]);

  return <span ref={ref}>{displayValue}{suffix}</span>;
}

const stats = [
  { value: 5, suffix: "+", label: "Android Apps", icon: FaMobileAlt },
  { value: 10, suffix: "K+", label: "Downloads", icon: FaDownload },
  { value: 100, suffix: "+", label: "Tutorials", icon: FaVideo },
  { value: 5, suffix: "+", label: "Live Projects", icon: FaLaptopCode },
];

export function HeroStats() {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mt-16 lg:mt-24 w-full relative z-20">
      {stats.map((stat, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "150px" }}
          transition={{ duration: 0.3, delay: index * 0.05 }}
        >
          <GlassCard className="flex items-center gap-4 p-4 md:p-6 hover:-translate-y-2 hover:shadow-[0_0_20px_rgba(37,99,235,0.2)] hover:border-primary-blue/40 transition-all duration-300 bg-background/40 border border-white/5 relative overflow-hidden group">
            {/* Subtle animated border glow on hover */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary-blue/0 via-primary-blue/10 to-primary-green/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            <div className="flex-shrink-0 h-10 w-10 md:h-12 md:w-12 rounded-full bg-gradient-to-br from-primary-blue/10 to-primary-green/10 flex items-center justify-center border border-white/10 relative z-10">
              <stat.icon className="h-5 w-5 md:h-6 md:w-6 text-primary-blue group-hover:text-primary-green transition-colors duration-300" />
            </div>
            <div>
              <h4 className="font-heading text-2xl md:text-3xl font-bold text-foreground">
                <AnimatedCounter from={0} to={stat.value} suffix={stat.suffix} />
              </h4>
              <p className="text-xs md:text-sm text-muted-foreground font-medium mt-0.5">
                {stat.label}
              </p>
            </div>
          </GlassCard>
        </motion.div>
      ))}
    </div>
  );
}
