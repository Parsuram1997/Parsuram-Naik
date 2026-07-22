"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  animated?: boolean;
}

export const GlassCard = React.forwardRef<HTMLDivElement, GlassCardProps>(
  ({ className, animated = false, children, ...props }, ref) => {
    const Component: any = animated ? motion.div : "div";
    
    return (
      <Component
        ref={ref as any}
        className={cn(
          "glass rounded-2xl p-6 shadow-soft transition-all duration-300 hover:shadow-elevation",
          className
        )}
        {...(animated ? {
          initial: { opacity: 0, y: 15 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true, margin: "100px" },
          transition: { duration: 0.3 }
        } : {})}
        {...props}
      >
        {children}
      </Component>
    );
  }
);
GlassCard.displayName = "GlassCard";
