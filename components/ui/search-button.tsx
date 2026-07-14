"use client";

import * as React from "react";
import { Search } from "lucide-react";
import { motion } from "framer-motion";
import { useSearch } from "@/components/providers/search-provider";

export function SearchButton() {
  const { openSearch } = useSearch();

  const handleSearchClick = () => {
    openSearch();
  };

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={handleSearchClick}
      className="flex items-center justify-center gap-2 h-10 px-3 md:pr-1.5 rounded-full glass hover:bg-white/10 dark:hover:bg-white/5 transition-colors border border-white/10 text-muted-foreground hover:text-foreground focus:outline-none"
      aria-label="Search"
      title="Search (Ctrl+K)"
    >
      <Search className="h-4 w-4" />
      <span className="hidden md:flex items-center gap-1 text-[10px] font-medium opacity-60">
        <kbd className="px-1.5 py-0.5 rounded-md bg-white/10 border border-white/10 font-sans">Ctrl</kbd>
        <span>+</span>
        <kbd className="px-1.5 py-0.5 rounded-md bg-white/10 border border-white/10 font-sans">K</kbd>
      </span>
    </motion.button>
  );
}
