"use client";

import { motion } from "framer-motion";
import { GlassCard } from "@/components/ui/glass-card";
import { Button } from "@/components/ui/button";
import { ArrowRight, PhoneCall } from "lucide-react";

export function CTA() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="mt-32 w-full"
    >
      <div className="relative p-1 rounded-3xl bg-gradient-to-r from-primary-blue via-primary-green to-primary-blue overflow-hidden">
        {/* Animated border effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary-blue via-primary-green to-primary-blue animate-pulse" />
        
        <GlassCard className="relative p-8 md:p-16 border-none bg-background/95 rounded-[22px] flex flex-col items-center text-center z-10">
          <h3 className="text-3xl md:text-5xl font-heading font-bold mb-6 text-foreground">
            Ready to Work Together?
          </h3>
          <p className="text-lg text-muted-foreground mb-10 max-w-2xl">
            Whether you need a cutting-edge mobile app, a scalable web platform, or team training, let's turn your vision into reality.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <Button size="lg" className="rounded-full bg-gradient-to-r from-primary-blue to-primary-green text-white font-bold px-8">
              <PhoneCall className="w-5 h-5 mr-2" /> Contact Me
            </Button>
            <Button size="lg" variant="outline" className="rounded-full font-bold px-8 border-white/20 hover:bg-white/10 hover:text-white">
              View Projects <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </GlassCard>
      </div>
    </motion.div>
  );
}
