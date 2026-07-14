"use client";

import { motion } from "framer-motion";
import { faqCategories } from "@/config/faq";

interface CategoryFilterProps {
  active: string;
  onChange: (category: string) => void;
}

export function CategoryFilter({ active, onChange }: CategoryFilterProps) {
  return (
    <div className="flex flex-wrap items-center justify-center gap-2 mb-16">
      {faqCategories.map((category) => {
        const isActive = active === category;
        return (
          <motion.button
            key={category}
            onClick={() => onChange(category)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
              isActive
                ? "bg-gradient-to-r from-primary-blue to-primary-green text-white shadow-[0_0_15px_rgba(0,255,170,0.3)]"
                : "glass bg-white/5 border border-white/10 text-muted-foreground hover:text-foreground hover:bg-white/10"
            }`}
          >
            {category}
          </motion.button>
        );
      })}
    </div>
  );
}
