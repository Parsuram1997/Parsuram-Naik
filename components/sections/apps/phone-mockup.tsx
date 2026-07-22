"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Smartphone, Sparkles } from "lucide-react";

interface PhoneMockupProps {
  screenshots: string[];
}

export function PhoneMockup({ screenshots }: PhoneMockupProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [imgError, setImgError] = useState(false);

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
      className="relative w-full max-w-[240px] aspect-[9/19.5] mx-auto group"
    >
      {/* Phone Hardware Frame (Clean Border Overlay - No Blur or Dark Tinting) */}
      <div className="absolute inset-0 rounded-[2.5rem] border-[6px] border-slate-700/80 dark:border-white/20 shadow-2xl z-20 pointer-events-none overflow-hidden">
        {/* Notch */}
        <div className="absolute top-2 inset-x-0 h-4 bg-slate-900 dark:bg-black rounded-full w-24 mx-auto z-30 flex items-center justify-center">
          <div className="w-2.5 h-2.5 rounded-full bg-slate-700 mr-2" />
          <div className="w-1.5 h-1.5 rounded-full bg-blue-500/80" />
        </div>
      </div>

      {/* Screen Content (Crystal Clear High Definition Image Container) */}
      <div className="absolute inset-0 rounded-[2rem] overflow-hidden bg-slate-900 z-10 m-[6px] flex flex-col justify-center items-center">
        {!imgError ? (
          <>
            {/* Instant Base Screenshot */}
            <img
              src={screenshots[0]}
              alt="App Screenshot"
              onError={() => setImgError(true)}
              className="absolute inset-0 w-full h-full object-cover object-top filter-none"
            />

            {/* Animated Slide Transitions */}
            <AnimatePresence>
              {currentIndex > 0 && (
                <motion.img
                  key={currentIndex}
                  src={screenshots[currentIndex]}
                  alt={`Screenshot ${currentIndex + 1}`}
                  onError={() => setImgError(true)}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  className="absolute inset-0 w-full h-full object-cover object-top filter-none"
                />
              )}
            </AnimatePresence>
          </>
        ) : (
          /* High-Tech Fallback Card when Image Error Occurs */
          <div className="p-6 text-center flex flex-col items-center justify-center relative z-10 bg-slate-900 w-full h-full">
            <div className="w-14 h-14 rounded-2xl bg-primary-blue/20 border border-primary-blue/30 flex items-center justify-center mb-3 text-primary-blue shadow-lg">
              <Smartphone className="w-7 h-7" />
            </div>
            <span className="text-xs font-bold text-foreground mb-1">Android App Preview</span>
            <span className="text-[10px] text-muted-foreground flex items-center gap-1">
              <Sparkles className="w-3 h-3 text-primary-green" /> Live Interactive UI
            </span>
          </div>
        )}
      </div>

      {/* Glow Behind Phone */}
      <div className="absolute inset-[-15%] bg-gradient-to-tr from-primary-blue/30 to-primary-green/30 blur-2xl -z-10 rounded-full opacity-60 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
    </motion.div>
  );
}
