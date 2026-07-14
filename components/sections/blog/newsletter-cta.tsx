"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { GlassCard } from "@/components/ui/glass-card";
import { Button } from "@/components/ui/button";
import { Send, CheckCircle2, Loader2, BellRing } from "lucide-react";

export function NewsletterCTA() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    setStatus("submitting");
    setTimeout(() => {
      setStatus("success");
      setEmail("");
      setTimeout(() => setStatus("idle"), 3000);
    }, 1500);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <GlassCard className="relative p-8 md:p-16 border-primary-blue/20 overflow-hidden flex flex-col items-center text-center">
        
        {/* Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-primary-blue/20 rounded-full blur-[100px] pointer-events-none" />

        <div className="w-16 h-16 rounded-2xl glass bg-white/5 border border-white/10 flex items-center justify-center text-primary-blue mb-6 relative z-10">
          <BellRing className="w-8 h-8" />
        </div>

        <h3 className="text-3xl md:text-4xl font-heading font-bold mb-4 relative z-10">
          Never Miss New Tutorials
        </h3>
        <p className="text-muted-foreground mb-8 max-w-xl relative z-10">
          Get notified when I publish new blogs, videos, AI prompts or learning resources. No spam, just value.
        </p>

        <form onSubmit={handleSubmit} className="w-full max-w-md relative z-10 flex flex-col sm:flex-row gap-3">
          <input 
            type="email" 
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email address" 
            className="flex-grow bg-background/50 border border-white/10 rounded-full px-6 py-4 text-sm focus:outline-none focus:border-primary-blue/50 backdrop-blur-md"
          />
          <Button 
            type="submit"
            disabled={status !== "idle"}
            className={`rounded-full py-6 px-8 font-bold transition-all ${
              status === "success" 
                ? "bg-green-500/20 text-green-400 hover:bg-green-500/30" 
                : "bg-gradient-to-r from-primary-blue to-primary-green text-white hover:opacity-90"
            }`}
          >
            {status === "idle" && "Subscribe"}
            {status === "submitting" && <Loader2 className="w-5 h-5 animate-spin" />}
            {status === "success" && <><CheckCircle2 className="w-5 h-5 mr-2" /> Subscribed</>}
          </Button>
        </form>
      </GlassCard>
    </motion.div>
  );
}
