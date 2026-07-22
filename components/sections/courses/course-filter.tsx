"use client";

import { motion } from "framer-motion";

interface CourseFilterProps {
  categories: string[];
  activeCategory: string;
  onSelect: (category: string) => void;
}

export function CourseFilter({ categories, activeCategory, onSelect }: CourseFilterProps) {
  return (
    <div className="w-full flex flex-wrap items-center justify-center gap-2.5 mb-16 p-3 sm:p-4 rounded-3xl glass border border-white/10 dark:border-white/10 border-slate-200 shadow-sm">
      {categories.map((category) => {
        const isActive = activeCategory === category;
        return (
          <motion.button
            key={category}
            onClick={() => onSelect(category)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-bold tracking-wide transition-all duration-300 ${
              isActive
                ? "bg-gradient-to-r from-primary-blue to-primary-green text-white shadow-[0_0_20px_rgba(37,99,235,0.4)]"
                : "glass bg-white/5 border border-white/10 dark:border-white/10 border-slate-200 text-muted-foreground hover:text-foreground hover:bg-white/10"
            }`}
          >
            {category}
          </motion.button>
        );
      })}
    </div>
  );
}
