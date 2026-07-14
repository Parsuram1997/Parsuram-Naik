"use client";

import * as React from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

export function AnimatedDivider({ className, ...props }: HTMLMotionProps<"div">) {
  return (
    <motion.div
      initial={{ scaleX: 0, opacity: 0 }}
      whileInView={{ scaleX: 1, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={cn("h-px bg-gradient-to-r from-transparent via-border to-transparent w-full origin-left", className)}
      {...props}
    />
  );
}
