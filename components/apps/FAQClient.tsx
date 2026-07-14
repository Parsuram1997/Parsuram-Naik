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
          <div key={index} className="border border-white/10 rounded-xl overflow-hidden bg-black/20">
            <button
              onClick={() => setOpenIndex(isOpen ? null : index)}
              className="w-full flex items-center justify-between p-6 text-left transition-colors hover:bg-white/5"
            >
              <span className="font-semibold text-white">{item.question}</span>
              <motion.div animate={{ rotate: isOpen ? 180 : 0 }} className="text-muted-foreground shrink-0 ml-4">
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
                  <div className="p-6 pt-0 text-muted-foreground leading-relaxed border-t border-white/5">
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
