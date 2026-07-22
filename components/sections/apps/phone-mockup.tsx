"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

interface PhoneMockupProps {
  screenshots: string[];
}

export function PhoneMockup({ screenshots }: PhoneMockupProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Preload all screenshots immediately on mount
  useEffect(() => {
    if (!screenshots || screenshots.length === 0) return;
    screenshots.forEach((src) => {
      const img = new window.Image();
      img.src = src;
    });
  }, [screenshots]);

  // Auto-slide every 3.5 seconds
  useEffect(() => {
    if (!screenshots || screenshots.length <= 1) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % screenshots.length);
    }, 3500);
    return () => clearInterval(interval);
  }, [screenshots]);

  if (!screenshots || screenshots.length === 0) return null;

  return (
    <motion.div 
      whileHover={{ y: -10 }}
      transition={{ duration: 0.5 }}
      className="relative w-full max-w-[240px] aspect-[9/19.5] mx-auto"
    >
      {/* Phone Frame (Hardware) */}
      <div className="absolute inset-0 rounded-[2.5rem] border-[8px] border-black bg-black shadow-2xl z-20 pointer-events-none overflow-hidden">
        {/* Notch */}
        <div className="absolute top-0 inset-x-0 h-6 bg-black rounded-b-3xl w-1/2 mx-auto z-30" />
      </div>

      {/* Screen Content */}
      <div className="absolute inset-0 rounded-[2rem] overflow-hidden bg-gradient-to-b from-slate-800 to-zinc-900 z-10 m-[8px]">
        {/* Instant Base Screenshot (Never Black) */}
        <img
          src={screenshots[0]}
          alt="App Screenshot"
          className="absolute inset-0 w-full h-full object-cover"
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
              className="absolute inset-0 w-full h-full object-cover"
            />
          )}
        </AnimatePresence>
      </div>

      {/* Glow Behind Phone */}
      <div className="absolute inset-[-20%] bg-gradient-to-tr from-primary-blue/30 to-primary-green/30 blur-2xl -z-10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
    </motion.div>
  );
}
