"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Mail } from "lucide-react";
import { GlassCard } from "@/components/ui/glass-card";

interface CTAData {
  heading: string;
  buttons: { text: string; variant: string; href: string }[];
}

export function AboutCTA({ data }: { data: CTAData }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="mt-8"
    >
      <GlassCard className="relative overflow-hidden p-8 md:p-12 border-primary-blue/20">
        {/* Glow Effects */}
        <div className="absolute -top-24 -right-24 w-48 h-48 bg-primary-blue/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-primary-green/20 rounded-full blur-3xl" />
        
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-center md:text-left flex-1">
            <h3 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-2">
              {data.heading}
            </h3>
            <p className="text-muted-foreground">
              I am always open to discussing product design work or partnership opportunities.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 shrink-0 w-full sm:w-auto">
            {data.buttons.map((btn, idx) => (
              <Button 
                key={idx}
                size="lg" 
                variant={btn.variant as any} 
                className="rounded-full w-full sm:w-auto group"
                asChild
              >
                <a href={btn.href}>
                  {btn.text}
                  {idx === 0 ? (
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  ) : (
                    <Mail className="ml-2 w-4 h-4" />
                  )}
                </a>
              </Button>
            ))}
          </div>
        </div>
      </GlassCard>
    </motion.div>
  );
}
