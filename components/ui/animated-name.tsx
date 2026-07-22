"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface AnimatedNameProps {
  prefix?: string;
  name?: string;
  className?: string;
}

export function AnimatedName({ fullText = "Hi, I'm Parsuram Naik" }: { fullText?: string }) {
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timer: NodeJS.Timeout;

    if (!isDeleting && displayedText.length < fullText.length) {
      // Typing phase
      timer = setTimeout(() => {
        setDisplayedText(fullText.slice(0, displayedText.length + 1));
      }, 75);
    } else if (!isDeleting && displayedText.length === fullText.length) {
      // Pause at full text for 3 seconds before erasing
      timer = setTimeout(() => {
        setIsDeleting(true);
      }, 3000);
    } else if (isDeleting && displayedText.length > 0) {
      // Erasing phase (faster)
      timer = setTimeout(() => {
        setDisplayedText(fullText.slice(0, displayedText.length - 1));
      }, 35);
    } else if (isDeleting && displayedText.length === 0) {
      // Pause before re-typing
      timer = setTimeout(() => {
        setIsDeleting(false);
      }, 500);
    }

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, fullText]);

  const prefixLength = "Hi, I'm ".length;
  const prefixPart = displayedText.slice(0, prefixLength);
  const namePart = displayedText.slice(prefixLength);

  return (
    <span className="inline-block">
      {/* Greeting part: "Hi, I'm " */}
      <span className="text-foreground">
        {prefixPart}
        {displayedText.length <= prefixLength && (
          <motion.span
            animate={{ opacity: [1, 0, 1] }}
            transition={{ duration: 0.8, repeat: Infinity, ease: "easeInOut" }}
            className="inline-block w-[3px] h-[0.75em] ml-1.5 align-baseline bg-primary-blue rounded-full shadow-[0_0_10px_#2563EB]"
          />
        )}
      </span>
      
      {displayedText.length >= prefixLength && <br className="hidden sm:block" />}
      
      {/* Name part: "Parsuram Naik" */}
      {displayedText.length > prefixLength && (
        <span className="relative inline-block font-extrabold bg-gradient-to-r from-foreground via-primary-blue to-primary-green bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(37,99,235,0.4)]">
          {namePart}
          <motion.span
            animate={{ opacity: [1, 0, 1] }}
            transition={{ duration: 0.8, repeat: Infinity, ease: "easeInOut" }}
            className="inline-block w-[3px] h-[0.75em] ml-1.5 align-baseline bg-primary-blue rounded-full shadow-[0_0_10px_#2563EB]"
          />
        </span>
      )}
    </span>
  );
}
