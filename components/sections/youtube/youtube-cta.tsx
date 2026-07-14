"use client";

import { motion } from "framer-motion";
import { GlassCard } from "@/components/ui/glass-card";
import { Button } from "@/components/ui/button";
import { PlayCircle } from "lucide-react";
import { FiYoutube } from "react-icons/fi";

export function YouTubeCTA() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="max-w-5xl mx-auto"
    >
      <GlassCard className="relative overflow-hidden p-8 md:p-16 border-red-500/20 group text-center">
        <div className="absolute inset-0 bg-gradient-to-r from-red-500/10 via-transparent to-primary-blue/10 opacity-50" />
        
        <div className="relative z-10 flex flex-col items-center">
          <h3 className="text-3xl md:text-5xl font-heading font-bold text-foreground mb-4">
            Join Our Learning Community
          </h3>
          <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl">
            Subscribe to receive practical tutorials, project walkthroughs and technology tips delivered straight to your feed.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <Button size="lg" className="rounded-full bg-red-600 hover:bg-red-700 text-white border-0 group/btn w-full sm:w-auto" asChild>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                <FiYoutube className="w-5 h-5 mr-2 group-hover/btn:scale-110 transition-transform" />
                Subscribe Now
              </a>
            </Button>
            <Button size="lg" variant="outline" className="rounded-full group/btn2 w-full sm:w-auto" asChild>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                <PlayCircle className="w-5 h-5 mr-2" />
                Watch Latest Video
              </a>
            </Button>
          </div>
        </div>
      </GlassCard>
    </motion.div>
  );
}
