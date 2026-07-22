"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface BrowserMockupProps {
  screenshots: string[];
}

export function BrowserMockup({ screenshots }: BrowserMockupProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Preload all screenshots immediately on mount
  useEffect(() => {
    if (!screenshots || screenshots.length === 0) return;
    screenshots.forEach((src) => {
      const img = new window.Image();
      img.src = src;
    });
  }, [screenshots]);

  // Auto-slide every 4 seconds
  useEffect(() => {
    if (!screenshots || screenshots.length <= 1) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % screenshots.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [screenshots]);

  if (!screenshots || screenshots.length === 0) return null;

  return (
    <motion.div 
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.5 }}
      className="relative w-full rounded-xl overflow-hidden glass border border-white/10 shadow-elevation group"
    >
      {/* Browser Chrome (Header) */}
      <div className="flex items-center px-4 py-3 bg-black/40 border-b border-white/5 backdrop-blur-md">
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500/80" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
          <div className="w-3 h-3 rounded-full bg-green-500/80" />
        </div>
        <div className="mx-auto bg-white/5 rounded-full px-4 py-1 text-[10px] text-muted-foreground w-1/2 text-center max-w-[200px] truncate border border-white/5">
          parsuram-naik.com
        </div>
      </div>

      {/* Screen Content */}
      <div className="relative aspect-[16/10] bg-gradient-to-b from-slate-800 to-zinc-900 overflow-hidden">
        {/* Instant Base Screenshot (Never Black) */}
        <img
          src={screenshots[0]}
          alt="Website Screenshot"
          className="absolute inset-0 w-full h-full object-cover object-top"
        />

        {/* Animated Slide Transitions for index > 0 */}
        <AnimatePresence>
          {currentIndex > 0 && (
            <motion.img
              key={currentIndex}
              src={screenshots[currentIndex]}
              alt={`Screenshot ${currentIndex + 1}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="absolute inset-0 w-full h-full object-cover object-top"
            />
          )}
        </AnimatePresence>
        <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent pointer-events-none" />
      </div>

      {/* Glow Behind Mockup */}
      <div className="absolute inset-[-20%] bg-gradient-to-tr from-primary-blue/20 to-primary-green/20 blur-3xl -z-10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
    </motion.div>
  );
}
