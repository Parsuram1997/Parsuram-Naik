"use client";

import { motion } from "framer-motion";
import { Search } from "lucide-react";

interface SearchBarProps {
  value: string;
  onChange: (val: string) => void;
}

export function SearchBar({ value, onChange }: SearchBarProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="max-w-2xl mx-auto w-full mb-12"
    >
      <div className="relative group">
        {/* Glow */}
        <div className="absolute inset-0 bg-primary-blue/20 rounded-full blur-xl group-hover:bg-primary-blue/30 transition-colors pointer-events-none" />
        
        <div className="relative flex items-center bg-background/50 border border-white/10 rounded-full overflow-hidden backdrop-blur-md focus-within:border-primary-blue/50 transition-colors">
          <div className="pl-6 text-muted-foreground group-focus-within:text-primary-blue transition-colors">
            <Search className="w-5 h-5" />
          </div>
          <input 
            type="text" 
            placeholder="Search your question..." 
            value={value}
            onChange={(e) => onChange(e.target.value)}
            className="w-full bg-transparent border-none py-4 px-4 text-foreground focus:outline-none placeholder:text-muted-foreground/50 text-sm md:text-base"
          />
        </div>
      </div>
    </motion.div>
  );
}
