"use client";

import { motion } from "framer-motion";
import { Testimonial } from "@/config/testimonials";
import { GlassCard } from "@/components/ui/glass-card";
import { Star, Quote, CheckCircle2, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

export function FeaturedReview({ testimonial }: { testimonial: Testimonial }) {
  if (!testimonial) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="mb-20 relative"
    >
      <GlassCard className="p-8 md:p-12 relative overflow-hidden border-primary-green/30 shadow-[0_0_50px_rgba(0,255,170,0.1)]">
        {/* Decorative Watermark Quote Icon inside Card */}
        <div className="absolute top-4 right-4 md:top-6 md:right-8 text-primary-blue/10 pointer-events-none z-0">
          <Quote className="w-24 h-24 md:w-36 md:h-36 rotate-180" />
        </div>
        {/* Glow */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary-green/10 rounded-full blur-[100px] pointer-events-none" />

        <div className="flex flex-col md:flex-row gap-8 items-center md:items-start relative z-10">
          
          {/* Avatar Area */}
          <div className="flex flex-col items-center flex-shrink-0">
            <div className="relative w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-2 border-primary-green/50 p-1 mb-4">
              <div className="w-full h-full rounded-full overflow-hidden">
                <img src={testimonial.avatar} alt={testimonial.name} className="w-full h-full object-cover" />
              </div>
              <div className="absolute bottom-0 right-0 w-6 h-6 bg-primary-green rounded-full flex items-center justify-center border-2 border-background">
                <CheckCircle2 className="w-4 h-4 text-background" />
              </div>
            </div>
            <div className="flex gap-1 mb-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className={`w-4 h-4 ${i < testimonial.rating ? "text-yellow-500 fill-yellow-500" : "text-muted-foreground"}`} />
              ))}
            </div>
            <span className="text-[10px] text-muted-foreground uppercase tracking-widest">{testimonial.date}</span>
          </div>

          {/* Content Area */}
          <div className="flex flex-col text-center md:text-left">
            <div className="mb-2">
              <span className="inline-block px-3 py-1 rounded-full bg-primary-blue/20 text-primary-blue text-[10px] font-bold uppercase tracking-widest mb-2">
                Featured {testimonial.type}
              </span>
              <h3 className="text-xl md:text-2xl font-bold text-foreground">{testimonial.name}</h3>
              <p className="text-sm text-primary-green">{testimonial.role}</p>
            </div>
            
            <p className="text-lg md:text-2xl text-muted-foreground leading-relaxed italic mb-6">
              "{testimonial.review}"
            </p>

            {/* Context Badge (Course or App) */}
            {(testimonial.courseName || testimonial.appName) && (
              <div className="mt-auto flex items-center justify-center md:justify-start gap-3 p-3 rounded-xl bg-white/5 border border-white/10 w-fit">
                <div className="w-10 h-10 rounded bg-white/10 flex items-center justify-center">
                  <Star className="w-5 h-5 text-primary-blue" />
                </div>
                <div className="text-left">
                  <p className="text-[10px] text-muted-foreground uppercase tracking-wider">Reviewed {testimonial.appName ? 'App' : 'Course'}</p>
                  <p className="text-sm font-bold text-foreground">{testimonial.appName || testimonial.courseName}</p>
                </div>
                {testimonial.appName && (
                  <Button size="sm" variant="outline" className="ml-4 rounded-full h-8 text-xs border-white/20">
                    <Download className="w-3 h-3 mr-1" /> Get App
                  </Button>
                )}
              </div>
            )}
          </div>

        </div>
      </GlassCard>
    </motion.div>
  );
}
