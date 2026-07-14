"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { FAQItem } from "@/config/faq";
import { GlassCard } from "@/components/ui/glass-card";

interface FAQCardProps {
  faq: FAQItem;
  isOpen: boolean;
  onToggle: () => void;
  index: number;
}

export function FAQCard({ faq, isOpen, onToggle, index }: FAQCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
    >
      <GlassCard 
        className={`p-0 overflow-hidden border-white/5 transition-colors duration-300 ${
          isOpen ? "border-primary-green/30 bg-white/[0.05]" : "hover:border-white/20"
        }`}
      >
        <button
          onClick={onToggle}
          className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
        >
          <h4 className={`font-bold pr-4 transition-colors ${isOpen ? "text-primary-green" : "text-foreground hover:text-primary-blue"}`}>
            {faq.question}
          </h4>
          <div className={`w-8 h-8 rounded-full border border-white/10 flex items-center justify-center flex-shrink-0 transition-transform duration-300 ${
            isOpen ? "rotate-180 bg-primary-green/20 text-primary-green border-primary-green/50" : "text-muted-foreground"
          }`}>
            <ChevronDown className="w-4 h-4" />
          </div>
        </button>
        
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <div className="px-6 pb-6 pt-0 text-muted-foreground text-sm border-t border-white/5">
                <div className="pt-4">
                  {faq.answer}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </GlassCard>
    </motion.div>
  );
}
