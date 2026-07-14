"use client";

import { motion } from "framer-motion";

interface CourseFilterProps {
  categories: string[];
  activeCategory: string;
  onSelect: (category: string) => void;
}

export function CourseFilter({ categories, activeCategory, onSelect }: CourseFilterProps) {
  return (
    <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
      {categories.map((category) => {
        const isActive = activeCategory === category;
        return (
          <motion.button
            key={category}
            onClick={() => onSelect(category)}
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
