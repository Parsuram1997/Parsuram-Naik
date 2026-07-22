"use client";

import { motion } from "framer-motion";
import { CourseData } from "@/config/courses";
import { GlassCard } from "@/components/ui/glass-card";
import { Button } from "@/components/ui/button";
import { PlayCircle, CheckCircle2, Sparkles } from "lucide-react";

export function FeaturedCourse({ course }: { course: CourseData }) {
  if (!course) return null;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.98 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="w-full mb-24"
    >
      <GlassCard className="p-0 overflow-hidden border-white/10 dark:border-primary-green/30 border-slate-200 shadow-lg hover:shadow-2xl transition-all duration-500 flex flex-col lg:flex-row">
        
        {/* Left: Image Preview */}
        <div className="lg:w-1/2 relative h-72 lg:h-auto overflow-hidden shrink-0">
          <img 
            src={course.thumbnailUrl} 
            alt={course.title} 
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
          />
          <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-background/90 via-background/40 to-transparent" />
          
          <div className="absolute top-6 left-6 px-4 py-1.5 rounded-full bg-primary-green/20 text-primary-green border border-primary-green/50 text-xs font-bold uppercase tracking-widest backdrop-blur-md shadow-md inline-flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-primary-green animate-pulse" />
            <span>Featured Course</span>
          </div>
        </div>

        {/* Right: Content (Day & Night Theme High-Contrast Visibility) */}
        <div className="lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center relative z-10 bg-background/95 lg:bg-background/90 backdrop-blur-md">
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-foreground mb-4 leading-snug">
            {course.title}
          </h3>
          
          <p className="text-sm sm:text-base text-muted-foreground mb-8 leading-relaxed">
            {course.description}
          </p>

          <div className="grid sm:grid-cols-2 gap-4 mb-8">
            <div className="flex items-center gap-3 text-foreground">
              <CheckCircle2 className="w-5 h-5 text-primary-green shrink-0" />
              <span className="text-xs sm:text-sm font-semibold">Build 5 Real Projects</span>
            </div>
            <div className="flex items-center gap-3 text-foreground">
              <CheckCircle2 className="w-5 h-5 text-primary-green shrink-0" />
              <span className="text-xs sm:text-sm font-semibold">Industry Best Practices</span>
            </div>
            <div className="flex items-center gap-3 text-foreground">
              <CheckCircle2 className="w-5 h-5 text-primary-green shrink-0" />
              <span className="text-xs sm:text-sm font-semibold">Lifetime Updates</span>
            </div>
            <div className="flex items-center gap-3 text-foreground">
              <CheckCircle2 className="w-5 h-5 text-primary-green shrink-0" />
              <span className="text-xs sm:text-sm font-semibold">Completion Certificate</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="rounded-full bg-gradient-to-r from-primary-blue to-primary-green text-white border-0 font-bold px-8 shadow-md hover:shadow-lg w-full sm:w-auto inline-flex items-center justify-center gap-2">
              <span>Enroll Now</span>
              <span className="px-2 py-0.5 bg-black/20 rounded text-xs">${course.price}</span>
            </Button>
            
            <Button size="lg" variant="outline" className="rounded-full font-bold px-8 border-white/20 dark:border-white/20 border-slate-300 hover:bg-white/10 hover:text-foreground w-full sm:w-auto inline-flex items-center justify-center gap-2">
              <PlayCircle className="w-5 h-5" />
              <span>Watch Trailer</span>
            </Button>
          </div>
        </div>

      </GlassCard>
    </motion.div>
  );
}
