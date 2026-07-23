"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { AppFAQ } from "@/types/app";

export function FAQClient({ faq }: { faq: AppFAQ[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="space-y-4">
      {faq.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div 
            key={index} 
            className={`border rounded-2xl overflow-hidden transition-all duration-300 ${
              isOpen 
                ? "bg-white/[0.04] border-primary-blue/30 shadow-[0_0_20px_rgba(37,99,235,0.05)]" 
                : "bg-black/20 border-white/10 hover:border-white/20 hover:bg-white/[0.02]"
            }`}
          >
            <button
              onClick={() => setOpenIndex(isOpen ? null : index)}
              className="w-full flex items-center justify-between p-6 md:p-7 text-left transition-colors"
            >
              <span className={`font-semibold md:text-lg transition-colors ${isOpen ? "text-primary-blue" : "text-white"}`}>
                {item.question}
              </span>
              <motion.div animate={{ rotate: isOpen ? 180 : 0 }} className={`shrink-0 ml-4 transition-colors ${isOpen ? "text-primary-blue" : "text-muted-foreground"}`}>
                <ChevronDown className="w-5 h-5" />
              </motion.div>
            </button>
            <AnimatePresence>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="overflow-hidden"
                >
                  <div className="p-6 md:p-7 pt-0 text-muted-foreground/90 font-light leading-relaxed border-t border-white/5">
                    {item.answer}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
