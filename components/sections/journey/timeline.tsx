"use client";

import { motion } from "framer-motion";
import { TimelineEvent } from "@/config/journey";
import { BookOpen, Smartphone, Rocket, LineChart, Monitor, Brain, Code2 } from "lucide-react";
import { FaYoutube } from "react-icons/fa";
import { GlassCard } from "@/components/ui/glass-card";

function TimelineIcon({ name }: { name: string }) {
  const props = { className: "w-5 h-5" };
  switch (name) {
    case "BookOpen": return <BookOpen {...props} />;
    case "Smartphone": return <Smartphone {...props} />;
    case "Rocket": return <Rocket {...props} />;
    case "Youtube": return <FaYoutube {...props} />;
    case "LineChart": return <LineChart {...props} />;
    case "Monitor": return <Monitor {...props} />;
    case "Brain": return <Brain {...props} />;
    case "Code2": return <Code2 {...props} />;
    default: return <Code2 {...props} />;
  }
}

export function Timeline({ events }: { events: TimelineEvent[] }) {
  return (
    <div className="relative max-w-4xl mx-auto py-12">
      {/* Center Line */}
      <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-blue via-primary-green to-transparent opacity-30 md:-translate-x-1/2" />

      {events.map((event, index) => {
        const isEven = index % 2 === 0;
        
        return (
          <motion.div
            key={event.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="relative flex items-center justify-between md:justify-normal w-full mb-12 last:mb-0"
          >
            {/* Desktop Left / Mobile Content */}
            <div className={`w-[calc(100%-3rem)] md:w-5/12 pl-12 md:pl-0 ${isEven ? 'md:pr-12 md:text-right' : 'md:hidden'}`}>
              {isEven && (
                <GlassCard className="p-6 border-white/5 hover:border-primary-blue/30 transition-colors group">
                  <span className="text-primary-blue font-bold text-sm tracking-wider uppercase mb-2 block">{event.year}</span>
                  <h4 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary-blue transition-colors">{event.title}</h4>
                  <p className="text-sm text-muted-foreground">{event.description}</p>
                </GlassCard>
              )}
            </div>

            {/* Center Icon */}
            <div className="absolute left-4 md:left-1/2 w-10 h-10 rounded-full glass border border-primary-green/30 bg-background/50 flex items-center justify-center -translate-x-1/2 z-10 shadow-[0_0_15px_rgba(0,255,170,0.2)]">
              <div className="text-primary-green">
                <TimelineIcon name={event.icon} />
              </div>
            </div>

            {/* Desktop Right / Mobile Content */}
            <div className={`w-[calc(100%-3rem)] md:w-5/12 pl-12 md:pl-12 ${!isEven ? 'block' : 'hidden md:hidden'}`}>
              {(!isEven || true) && ( // Mobile always shows here if not handled by Left
                <GlassCard className={`p-6 border-white/5 hover:border-primary-green/30 transition-colors group ${isEven ? 'md:hidden' : ''}`}>
                  <span className="text-primary-green font-bold text-sm tracking-wider uppercase mb-2 block">{event.year}</span>
                  <h4 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary-green transition-colors">{event.title}</h4>
                  <p className="text-sm text-muted-foreground">{event.description}</p>
                </GlassCard>
              )}
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}
