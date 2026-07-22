"use client";

import { motion } from "framer-motion";
import { GlassCard } from "@/components/ui/glass-card";
import { Button } from "@/components/ui/button";
import { HelpCircle, Mail, MessageSquare } from "lucide-react";

export function HelpCTA() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="mt-20 text-center"
    >
      <GlassCard className="w-full p-8 md:p-12 border-white/10 dark:border-white/10 border-slate-200 bg-gradient-to-b from-background to-primary-blue/5">
        <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-primary-blue mx-auto mb-6">
          <HelpCircle className="w-8 h-8" />
        </div>
        
        <h3 className="text-2xl md:text-3xl font-heading font-bold mb-4">Couldn't Find Your Answer?</h3>
        <p className="text-muted-foreground mb-8">
          If you have a question that isn't answered here, feel free to reach out to me directly. I'll get back to you as soon as possible.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button size="lg" className="rounded-full bg-gradient-to-r from-primary-blue to-primary-green text-white font-bold w-full sm:w-auto">
            <MessageSquare className="w-4 h-4 mr-2" /> Contact Me
          </Button>
          <Button size="lg" variant="outline" className="rounded-full border-white/20 hover:bg-white/10 hover:text-white w-full sm:w-auto">
            <Mail className="w-4 h-4 mr-2" /> Send Email
          </Button>
        </div>
      </GlassCard>
    </motion.div>
  );
}
