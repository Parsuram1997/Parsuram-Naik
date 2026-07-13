"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface TimelineItem {
  year: string;
  title: string;
  description: string;
  active?: boolean;
}

export function AboutTimeline({ data }: { data: TimelineItem[] }) {
  return (
    <div>
      <h4 className="text-2xl font-heading font-bold mb-8 text-foreground">My Journey</h4>
      
      <div className="relative border-l-2 border-white/10 ml-3 md:ml-4 flex flex-col gap-8 pb-8">
        {data.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="relative pl-8 md:pl-10"
          >
            {/* Timeline Dot */}
            <div className={`absolute -left-[9px] top-1 w-4 h-4 rounded-full border-2 ${
              item.active 
                ? "bg-primary-green border-primary-green shadow-[0_0_10px_rgba(16,185,129,0.5)]" 
                : "bg-background border-primary-blue"
            }`} />
            
            <div className={`text-sm font-bold mb-1 ${item.active ? "text-primary-green" : "text-primary-blue"}`}>
              {item.year}
            </div>
            <h5 className="text-lg font-bold text-foreground mb-1">{item.title}</h5>
            <p className="text-sm text-muted-foreground">{item.description}</p>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mt-8"
      >
        <Button className="rounded-full group shadow-lg shadow-primary-blue/20">
          Explore My Journey
          <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
        </Button>
      </motion.div>
    </div>
  );
}
