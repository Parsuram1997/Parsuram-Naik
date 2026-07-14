"use client";

import { motion } from "framer-motion";
import { CourseData } from "@/config/courses";
import { GlassCard } from "@/components/ui/glass-card";
import { Button } from "@/components/ui/button";
import { PlayCircle, CheckCircle2 } from "lucide-react";

export function FeaturedCourse({ course }: { course: CourseData }) {
  if (!course) return null;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="max-w-6xl mx-auto mb-24"
    >
      <GlassCard className="p-0 overflow-hidden border-primary-green/30 shadow-[0_0_40px_rgba(0,255,170,0.15)] flex flex-col lg:flex-row">
        
        {/* Left: Image / Video Preview */}
        <div className="lg:w-1/2 relative h-64 lg:h-auto overflow-hidden">
          <img src={course.thumbnailUrl} alt={course.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-background via-background/80 to-transparent lg:via-transparent" />
          
          <div className="absolute top-6 left-6 px-4 py-1.5 rounded-full bg-primary-green/20 text-primary-green border border-primary-green/50 text-xs font-bold uppercase tracking-widest backdrop-blur-md">
            🔥 Featured Course
          </div>
        </div>

        {/* Right: Content */}
        <div className="lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center relative z-10 -mt-16 lg:mt-0 lg:-ml-32 bg-background/50 lg:bg-transparent backdrop-blur-md lg:backdrop-blur-none">
          <h3 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
            {course.title}
          </h3>
          <p className="text-lg text-muted-foreground mb-8">
            {course.description}
          </p>

          <div className="grid sm:grid-cols-2 gap-4 mb-8">
            <div className="flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-primary-green" />
              <span className="text-sm font-medium">Build 5 Real Projects</span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-primary-green" />
              <span className="text-sm font-medium">Industry Best Practices</span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-primary-green" />
              <span className="text-sm font-medium">Lifetime Updates</span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-primary-green" />
              <span className="text-sm font-medium">Completion Certificate</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="rounded-full bg-gradient-to-r from-primary-blue to-primary-green text-white border-0 group w-full sm:w-auto">
              Enroll Now
              <span className="ml-2 px-2 py-0.5 bg-black/20 rounded text-xs">${course.price}</span>
            </Button>
            <Button size="lg" variant="outline" className="rounded-full group w-full sm:w-auto">
              <PlayCircle className="w-5 h-5 mr-2" />
              Watch Trailer
            </Button>
          </div>
        </div>

      </GlassCard>
    </motion.div>
  );
}
