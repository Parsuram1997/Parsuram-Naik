"use client";

import { motion } from "framer-motion";
import { GlassCard } from "@/components/ui/glass-card";
import { Button } from "@/components/ui/button";
import { Download, ArrowRight } from "lucide-react";

export function ResumeCTA() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="max-w-4xl mx-auto text-center"
    >
      <GlassCard className="relative overflow-hidden p-8 md:p-12 border-primary-blue/20 group">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-blue/10 via-transparent to-primary-green/10 opacity-50" />
        
        <div className="relative z-10 flex flex-col items-center">
          <div className="w-16 h-16 rounded-full glass bg-white/5 border border-white/10 flex items-center justify-center mb-6">
            <Download className="w-8 h-8 text-primary-blue" />
          </div>
          
          <h3 className="text-2xl md:text-4xl font-heading font-bold text-foreground mb-4">
            Want to Know More?
          </h3>
          <p className="text-lg text-muted-foreground mb-8 max-w-lg">
            Download my resume to see my full professional history, or explore my complete portfolio of projects.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="rounded-full bg-foreground text-background hover:bg-foreground/90 group/btn">
              <Download className="w-4 h-4 mr-2 group-hover/btn:-translate-y-1 transition-transform" />
              Download Resume
            </Button>
            <Button size="lg" variant="outline" className="rounded-full group/btn2" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              View Projects
              <ArrowRight className="w-4 h-4 ml-2 group-hover/btn2:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </GlassCard>
    </motion.div>
  );
}
