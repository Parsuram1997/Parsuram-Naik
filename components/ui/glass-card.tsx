"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  animated?: boolean;
}

export const GlassCard = React.forwardRef<HTMLDivElement, GlassCardProps>(
  ({ className, animated = true, children, ...props }, ref) => {
    // We cast to any here to satisfy both standard div and motion.div props
    // without conflicting on React 19 ReactNode vs framer motion children types
    const Component: any = animated ? motion.div : "div";
    
    return (
      <Component
        ref={ref as any}
        className={cn(
          "glass rounded-2xl p-6 shadow-soft transition-all duration-300 hover:shadow-elevation",
          className
        )}
        {...(animated ? {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          transition: { duration: 0.5 }
        } : {})}
        {...props}
      >
        {children}
      </Component>
    );
  }
);
GlassCard.displayName = "GlassCard";
