"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

export function FeatureChip({ name }: { name: string }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05, y: -2 }}
      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full glass border border-white/10 shadow-soft text-xs font-medium text-foreground/80 cursor-default hover:border-primary-green/30 hover:text-foreground transition-colors"
    >
      <Check className="w-3 h-3 text-primary-green" />
      {name}
    </motion.div>
  );
}
