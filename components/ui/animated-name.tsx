"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface AnimatedNameProps {
  name?: string;
  greeting?: string;
}

export function AnimatedName({ 
  name = "Parsuram Naik", 
  greeting = "Hi, I'm" 
}: AnimatedNameProps) {
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timer: NodeJS.Timeout;

    if (!isDeleting && displayedText.length < name.length) {
      // Typing phase
      timer = setTimeout(() => {
        setDisplayedText(name.slice(0, displayedText.length + 1));
      }, 80);
    } else if (!isDeleting && displayedText.length === name.length) {
      // Pause at full name for 3.5 seconds
      timer = setTimeout(() => {
        setIsDeleting(true);
      }, 3500);
    } else if (isDeleting && displayedText.length > 0) {
      // Erasing phase (faster)
      timer = setTimeout(() => {
        setDisplayedText(name.slice(0, displayedText.length - 1));
      }, 40);
    } else if (isDeleting && displayedText.length === 0) {
      // Pause before re-typing
      timer = setTimeout(() => {
        setIsDeleting(false);
      }, 400);
    }

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, name]);

  return (
    <span className="block w-full">
      {/* Line 1: Static Greeting (Always 1 Line - Never Shifts) */}
      <span className="block text-foreground font-bold leading-tight">
        {greeting}
      </span>
      
      {/* Line 2: Fixed Height Typewriter Name (Always 1 Line - Zero Layout Shift) */}
      <span className="block min-h-[1.25em] relative font-extrabold bg-gradient-to-r from-foreground via-primary-blue to-primary-green bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(37,99,235,0.4)] leading-tight">
        {displayedText}
        <motion.span
          animate={{ opacity: [1, 0, 1] }}
          transition={{ duration: 0.8, repeat: Infinity, ease: "easeInOut" }}
          className="inline-block w-[3px] h-[0.75em] ml-1.5 align-baseline bg-primary-blue rounded-full shadow-[0_0_10px_#2563EB]"
        />
      </span>
    </span>
  );
}
