"use client";

import { motion } from "framer-motion";
import { Value } from "@/config/journey";
import { GlassCard } from "@/components/ui/glass-card";
import { Lightbulb, Star, GraduationCap, Users, Repeat, Puzzle } from "lucide-react";

function ValueIcon({ name }: { name: string }) {
  const props = { className: "w-6 h-6 text-primary-green" };
  switch (name) {
    case "Lightbulb": return <Lightbulb {...props} />;
    case "Star": return <Star {...props} />;
    case "GraduationCap": return <GraduationCap {...props} />;
    case "Users": return <Users {...props} />;
    case "Repeat": return <Repeat {...props} />;
    case "Puzzle": return <Puzzle {...props} />;
    default: return <Star {...props} />;
  }
}

export function ValuesGrid({ values }: { values: Value[] }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {values.map((value, index) => (
        <motion.div
          key={value.id}
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <GlassCard className="p-6 h-full flex flex-col gap-4 border-white/5 hover:border-primary-green/30 transition-all duration-300 group hover:-translate-y-1">
            <div className="w-12 h-12 rounded-full glass bg-white/5 flex items-center justify-center border border-white/10 group-hover:scale-110 transition-transform">
              <ValueIcon name={value.icon} />
            </div>
            <div>
              <h4 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary-green transition-colors">{value.title}</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">{value.description}</p>
            </div>
          </GlassCard>
        </motion.div>
      ))}
    </div>
  );
}
