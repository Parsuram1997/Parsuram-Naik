"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Prompt } from "@/config/blog";
import { GlassCard } from "@/components/ui/glass-card";
import { Copy, CheckCircle2, Terminal } from "lucide-react";

export function PromptCard({ prompt, index }: { prompt: Prompt; index: number }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(prompt.promptText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="h-full"
    >
      <GlassCard className="p-6 h-full flex flex-col border-white/5 hover:border-primary-green/30 transition-colors">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2 rounded bg-primary-green/10 text-primary-green">
            <Terminal className="w-4 h-4" />
          </div>
          <h5 className="font-bold text-foreground">{prompt.title}</h5>
        </div>
        
        <p className="text-sm text-muted-foreground mb-4 flex-grow">
          {prompt.description}
        </p>

        <div className="relative mt-auto">
          <div className="p-4 rounded-lg bg-black/40 border border-white/5 text-xs text-muted-foreground font-mono line-clamp-3 relative pr-12">
            {prompt.promptText}
            
            <button 
              onClick={handleCopy}
              className="absolute top-2 right-2 p-2 rounded hover:bg-white/10 transition-colors text-white"
              title="Copy Prompt"
            >
              {copied ? <CheckCircle2 className="w-4 h-4 text-primary-green" /> : <Copy className="w-4 h-4" />}
            </button>
          </div>
        </div>
      </GlassCard>
    </motion.div>
  );
}
