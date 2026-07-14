"use client";

import { motion } from "framer-motion";

export function TechBadge({ name }: { name: string }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="inline-flex items-center px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-[11px] font-semibold tracking-wide uppercase text-muted-foreground hover:text-primary-blue hover:border-primary-blue/30 transition-colors cursor-default"
    >
      {name}
    </motion.div>
  );
}
