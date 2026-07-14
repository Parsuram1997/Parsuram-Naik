"use client";

import { motion } from "framer-motion";
import { CourseData } from "@/config/courses";
import { GlassCard } from "@/components/ui/glass-card";
import { Button } from "@/components/ui/button";
import { Clock, Globe, Users, Star, BookOpen, Lock, PlayCircle, FolderCode } from "lucide-react";

export function CourseCard({ course, index }: { course: CourseData; index: number }) {
  
  const getBadgeColor = (status: string) => {
    switch (status) {
      case "Free": return "bg-green-500/20 text-green-400 border-green-500/50";
      case "Premium": return "bg-primary-blue/20 text-primary-blue border-primary-blue/50";
      case "Coming Soon": return "bg-orange-500/20 text-orange-400 border-orange-500/50";
      default: return "bg-white/10 text-white border-white/20";
    }
  };

  const getDifficultyColor = (diff: string) => {
    switch (diff) {
      case "Beginner": return "text-emerald-400";
      case "Intermediate": return "text-yellow-400";
      case "Advanced": return "text-red-400";
      case "All Levels": return "text-primary-blue";
      default: return "text-white";
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="h-full"
    >
      <GlassCard className="p-0 overflow-hidden border-white/5 hover:border-primary-blue/30 transition-all duration-500 h-full flex flex-col group hover:-translate-y-2">
        {/* Thumbnail */}
        <div className="relative h-48 md:h-56 w-full overflow-hidden shrink-0">
          <img 
            src={course.thumbnailUrl} 
            alt={course.title} 
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          />
          {/* Status Badge */}
          <div className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest border backdrop-blur-md ${getBadgeColor(course.status)}`}>
            {course.status}
          </div>
          {/* Price Overlay if Premium */}
          {course.status === "Premium" && course.price && (
            <div className="absolute top-4 right-4 px-3 py-1 bg-black/80 rounded-full text-sm font-bold text-white border border-white/20 backdrop-blur-md">
              ${course.price}
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-6 flex flex-col flex-grow">
          <div className="flex items-center justify-between mb-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            <span className="text-primary-green">{course.category}</span>
            <span className={getDifficultyColor(course.difficulty)}>{course.difficulty}</span>
          </div>

          <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary-blue transition-colors line-clamp-2">
            {course.title}
          </h3>
          <p className="text-sm text-muted-foreground mb-6 line-clamp-2">
            {course.description}
          </p>

          {/* Key Meta */}
          <div className="grid grid-cols-2 gap-y-3 gap-x-2 text-xs text-muted-foreground font-medium mb-6 mt-auto border-t border-b border-white/5 py-4">
            <div className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5" /> {course.duration}</div>
            <div className="flex items-center gap-1.5"><Globe className="w-3.5 h-3.5" /> {course.language}</div>
            <div className="flex items-center gap-1.5"><BookOpen className="w-3.5 h-3.5" /> {course.lessons} Lessons</div>
            <div className="flex items-center gap-1.5"><FolderCode className="w-3.5 h-3.5" /> {course.projects} Projects</div>
            {course.status !== "Coming Soon" && (
              <>
                <div className="flex items-center gap-1.5"><Users className="w-3.5 h-3.5" /> {course.students.toLocaleString()} Students</div>
                <div className="flex items-center gap-1.5 text-yellow-500"><Star className="w-3.5 h-3.5 fill-current" /> {course.rating}</div>
              </>
            )}
          </div>

          {/* Action Button */}
          <Button 
            className={`w-full rounded-full group/btn font-bold transition-all ${
              course.status === "Coming Soon" ? "bg-white/10 text-white hover:bg-white/20" : 
              course.status === "Free" ? "bg-primary-green hover:bg-primary-green/90 text-background" : 
              "bg-gradient-to-r from-primary-blue to-primary-green text-white hover:opacity-90"
            }`}
          >
            {course.status === "Free" && <><PlayCircle className="w-4 h-4 mr-2" /> Start Learning</>}
            {course.status === "Premium" && <><Lock className="w-4 h-4 mr-2" /> Enroll Now</>}
            {course.status === "Coming Soon" && "Notify Me"}
          </Button>
        </div>
      </GlassCard>
    </motion.div>
  );
}
