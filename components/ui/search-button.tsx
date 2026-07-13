"use client";

import * as React from "react";
import { Search } from "lucide-react";
import { motion } from "framer-motion";

export function SearchButton() {
  const handleSearchClick = () => {
    alert("Search Coming Soon");
  };

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={handleSearchClick}
      className="flex items-center justify-center w-10 h-10 rounded-full glass hover:bg-white/10 dark:hover:bg-white/5 transition-colors border border-white/10 text-muted-foreground hover:text-foreground focus:outline-none"
      aria-label="Search"
      title="Search"
    >
      <Search className="h-4 w-4" />
    </motion.button>
  );
}
