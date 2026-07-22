"use client";

import { motion } from "framer-motion";
import { faqCategories, faqData } from "@/config/faq";

interface CategoryFilterProps {
  active: string;
  onChange: (category: string) => void;
}

export function CategoryFilter({ active, onChange }: CategoryFilterProps) {
  // Count items per category
  const getCount = (cat: string) => {
    if (cat === "All") return faqData.length;
    return faqData.filter(item => item.category === cat).length;
  };

  return (
    <div className="w-full flex flex-wrap items-center justify-center gap-2.5 md:gap-3 mb-16 p-3 sm:p-4 rounded-3xl glass border border-white/10 dark:border-white/10 border-slate-300 shadow-lg bg-black/40 dark:bg-black/40 bg-white/80 backdrop-blur-xl">
      {faqCategories.map((category) => {
        const isActive = active === category;
        const count = getCount(category);

        return (
          <motion.button
            key={category}
            onClick={() => onChange(category)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`px-4 sm:px-5 py-2.5 rounded-full text-xs sm:text-sm font-extrabold transition-all duration-300 flex items-center gap-2 cursor-pointer ${
              isActive
                ? "bg-gradient-to-r from-primary-blue via-teal-400 to-primary-green text-white shadow-[0_0_20px_rgba(0,255,170,0.4)] scale-105"
                : "glass bg-black/30 dark:bg-black/30 bg-white border border-white/10 dark:border-white/10 border-slate-300 text-muted-foreground hover:text-foreground hover:bg-white/20"
            }`}
          >
            <span>{category}</span>
            <span className={`px-2 py-0.5 rounded-full text-[10px] font-mono font-bold ${
              isActive ? "bg-black/30 text-white" : "bg-white/10 text-muted-foreground"
            }`}>
              {count}
            </span>
          </motion.button>
        );
      })}
    </div>
  );
}
