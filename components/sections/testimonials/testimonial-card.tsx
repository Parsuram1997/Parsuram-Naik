"use client";

import { motion } from "framer-motion";
import { Testimonial } from "@/config/testimonials";
import { GlassCard } from "@/components/ui/glass-card";
import { Star, MapPin } from "lucide-react";

export function TestimonialCard({ testimonial, index }: { testimonial: Testimonial; index: number }) {
  
  const getTypeColor = (type: string) => {
    switch (type) {
      case "Student": return "text-blue-400 bg-blue-400/10 border-blue-400/30";
      case "App User": return "text-green-400 bg-green-400/10 border-green-400/30";
      case "Client": return "text-purple-400 bg-purple-400/10 border-purple-400/30";
      default: return "text-white bg-white/10 border-white/20";
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="h-full"
    >
      <GlassCard className="p-6 h-full flex flex-col border-white/5 hover:border-primary-blue/30 transition-all duration-300 group hover:-translate-y-2">
        <div className="flex items-start justify-between mb-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full overflow-hidden border border-white/20 group-hover:border-primary-blue/50 transition-colors">
              <img src={testimonial.avatar} alt={testimonial.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
            </div>
            <div>
              <h4 className="font-bold text-foreground">{testimonial.name}</h4>
              <p className="text-xs text-muted-foreground">{testimonial.role}</p>
            </div>
          </div>
          
          <div className="flex gap-0.5">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className={`w-3.5 h-3.5 ${i < testimonial.rating ? "text-yellow-500 fill-yellow-500" : "text-muted-foreground"}`} />
            ))}
          </div>
        </div>

        <p className="text-sm text-muted-foreground mb-6 flex-grow italic">
          "{testimonial.review}"
        </p>

        <div className="flex items-center justify-between mt-auto pt-4 border-t border-white/5">
          <span className={`text-[10px] font-bold px-2 py-1 rounded-full border ${getTypeColor(testimonial.type)} uppercase tracking-widest`}>
            {testimonial.type}
          </span>
          {testimonial.country && (
            <span className="flex items-center gap-1 text-xs text-muted-foreground">
              <MapPin className="w-3 h-3" /> {testimonial.country}
            </span>
          )}
        </div>
      </GlassCard>
    </motion.div>
  );
}
