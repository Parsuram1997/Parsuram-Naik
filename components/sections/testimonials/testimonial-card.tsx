"use client";

import { Testimonial } from "@/config/testimonials";
import { GlassCard } from "@/components/ui/glass-card";
import { Star, MapPin } from "lucide-react";

export function TestimonialCard({ testimonial }: { testimonial: Testimonial; index?: number }) {
  
  const getTypeColor = (type: string) => {
    switch (type) {
      case "Student": return "text-blue-400 bg-blue-400/10 border-blue-400/30";
      case "App User": return "text-green-400 bg-green-400/10 border-green-400/30";
      case "Client": return "text-purple-400 bg-purple-400/10 border-purple-400/30";
      default: return "text-amber-400 bg-amber-400/10 border-amber-400/30";
    }
  };

  return (
    <div className="w-[320px] sm:w-[380px] shrink-0 h-full select-none">
      <GlassCard className="p-6 h-full flex flex-col border-white/10 dark:border-white/10 border-slate-200 hover:border-primary-blue/40 transition-all duration-300 group hover:-translate-y-1.5 shadow-md hover:shadow-xl">
        <div className="flex items-start justify-between gap-4 mb-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full overflow-hidden border border-white/20 dark:border-white/20 border-slate-300 group-hover:border-primary-blue/50 transition-colors shrink-0 shadow-sm">
              <img src={testimonial.avatar} alt={testimonial.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
            </div>
            <div>
              <h4 className="font-bold text-foreground text-sm sm:text-base leading-snug line-clamp-1">{testimonial.name}</h4>
              <p className="text-xs text-muted-foreground line-clamp-1">{testimonial.role}</p>
            </div>
          </div>
          
          <div className="flex gap-0.5 shrink-0">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className={`w-3.5 h-3.5 ${i < testimonial.rating ? "text-yellow-500 fill-yellow-500" : "text-muted-foreground"}`} />
            ))}
          </div>
        </div>

        <p className="text-xs sm:text-sm text-muted-foreground mb-6 flex-grow italic leading-relaxed line-clamp-4">
          "{testimonial.review}"
        </p>

        <div className="flex items-center justify-between mt-auto pt-4 border-t border-white/10 dark:border-white/10 border-slate-200">
          <span className={`text-[10px] font-black px-2.5 py-1 rounded-full border ${getTypeColor(testimonial.type)} uppercase tracking-wider`}>
            {testimonial.type}
          </span>
          {testimonial.country && (
            <span className="flex items-center gap-1 text-xs text-muted-foreground font-semibold">
              <MapPin className="w-3 h-3 text-primary-blue" /> {testimonial.country}
            </span>
          )}
        </div>
      </GlassCard>
    </div>
  );
}
