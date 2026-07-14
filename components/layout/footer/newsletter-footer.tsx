"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Send, CheckCircle2, Loader2 } from "lucide-react";

export function NewsletterFooter() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes("@")) return;

    setStatus("loading");
    // Simulate API call for Firebase integration
    setTimeout(() => {
      setStatus("success");
      setEmail("");
      setTimeout(() => setStatus("idle"), 3000);
    }, 1500);
  };

  return (
    <div className="glass shadow-elevation rounded-2xl p-6 relative overflow-hidden group border border-white/10 hover:border-white/20 transition-colors">
      {/* Glow effect */}
      <div className="absolute -inset-1 bg-gradient-to-br from-primary-blue/10 to-primary-green/10 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
      
      <h3 className="text-lg font-bold text-white mb-2 font-heading">Stay Updated</h3>
      <p className="text-sm text-muted-foreground mb-4">Get the latest news on apps, courses, and tutorials.</p>

      <form onSubmit={handleSubmit} className="relative flex items-center">
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={status === "loading" || status === "success"}
          className="w-full bg-black/40 border border-white/10 rounded-full h-11 pl-4 pr-12 text-sm text-white placeholder:text-muted-foreground focus:outline-none focus:border-primary-blue focus:ring-1 focus:ring-primary-blue transition-all disabled:opacity-50"
          required
        />
        
        <AnimatePresence mode="wait">
          {status === "success" ? (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
              className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center text-primary-green bg-primary-green/10 rounded-full"
            >
              <CheckCircle2 className="w-5 h-5" />
            </motion.div>
          ) : status === "loading" ? (
            <motion.div
              key="loading"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
              className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center text-muted-foreground"
            >
              <Loader2 className="w-5 h-5 animate-spin" />
            </motion.div>
          ) : (
            <motion.div
              key="idle"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
              className="absolute right-1 top-1/2 -translate-y-1/2"
            >
              <Button 
                type="submit" 
                size="sm" 
                className="w-9 h-9 rounded-full p-0 flex items-center justify-center bg-gradient-to-br from-primary-blue to-primary-green text-white hover:opacity-90 transition-opacity shadow-md"
              >
                <Send className="w-4 h-4" />
                <span className="sr-only">Subscribe</span>
              </Button>
            </motion.div>
          )}
        </AnimatePresence>
      </form>
    </div>
  );
}
