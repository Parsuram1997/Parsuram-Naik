"use client";

import { useMemo } from "react";
import { motion } from "framer-motion";
import { TimelineEvent } from "@/config/journey";
import { BookOpen, Smartphone, Rocket, LineChart, Monitor, Brain, Code2 } from "lucide-react";
import { FaYoutube } from "react-icons/fa";
import { GlassCard } from "@/components/ui/glass-card";

function TimelineIcon({ name }: { name: string }) {
  const props = { className: "w-5 h-5 md:w-6 md:h-6" };
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

/**
 * Generate a smooth serpentine SVG snake path weaving dynamically between nodes
 */
function generateSnakePath(count: number): string {
  if (count <= 0) return "";
  
  const stepY = 100 / count;
  let d = `M 50 0 L 50 ${stepY * 0.5}`;

  // Controlled curve amplitude percentage (7%) so the snake path
  // weaves gracefully between nodes WITHOUT overlapping card content
  const amp = 7; 

  for (let i = 0; i < count - 1; i++) {
    const yStart = (i + 0.5) * stepY;
    const yEnd = (i + 1.5) * stepY;
    const dy = yEnd - yStart;
    
    // Wave right for even indices, wave left for odd indices
    const xCurve = i % 2 === 0 ? 50 + amp : 50 - amp;

    d += ` C ${xCurve} ${yStart + dy * 0.35}, ${xCurve} ${yEnd - dy * 0.35}, 50 ${yEnd}`;
  }

  d += ` L 50 100`;
  return d;
}

export function Timeline({ events }: { events: TimelineEvent[] }) {
  const snakePathD = useMemo(() => generateSnakePath(events.length), [events.length]);

  return (
    <div className="relative w-full py-12">
      
      {/* Mobile Line (< md screens): clean vertical line on left side */}
      <div className="md:hidden absolute left-5 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-blue via-primary-green to-transparent opacity-40 -translate-x-1/2" />

      {/* Desktop Snake SVG Line (md screens and up): Wavy Serpentine Glow Line */}
      <div className="hidden md:block absolute inset-0 pointer-events-none z-0">
        <svg
          className="w-full h-full"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="snake-timeline-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#3b82f6" />
              <stop offset="25%" stopColor="#00ffaa" />
              <stop offset="50%" stopColor="#2563eb" />
              <stop offset="75%" stopColor="#00ffaa" />
              <stop offset="100%" stopColor="#3b82f6" />
            </linearGradient>
          </defs>

          {/* Glowing Background Blur for Snake Path */}
          <path
            d={snakePathD}
            fill="none"
            stroke="url(#snake-timeline-gradient)"
            strokeWidth="3"
            opacity="0.35"
            className="blur-md"
            vectorEffect="non-scaling-stroke"
          />

          {/* Sharp Base Snake Path */}
          <path
            d={snakePathD}
            fill="none"
            stroke="url(#snake-timeline-gradient)"
            strokeWidth="2"
            opacity="0.75"
            vectorEffect="non-scaling-stroke"
          />

          {/* Animated Pulsing Dash Overlay for Dynamic Snake Effect */}
          <motion.path
            d={snakePathD}
            fill="none"
            stroke="#ffffff"
            strokeWidth="2.5"
            strokeDasharray="8 12"
            opacity="0.9"
            vectorEffect="non-scaling-stroke"
            animate={{ strokeDashoffset: [0, -40] }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          />
        </svg>
      </div>

      {/* Timeline Events List */}
      <div className="relative z-10 space-y-12 md:space-y-16">
        {events.map((event, index) => {
          const isEven = index % 2 === 0;

          return (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: Math.min(index * 0.08, 0.3) }}
              className="relative flex items-center w-full"
            >
              
              {/* DESKTOP LEFT COLUMN (Even items get Card, Odd items are Empty Spacer) */}
              <div className="hidden md:flex w-1/2 pr-12 lg:pr-16 justify-end relative z-20">
                {isEven && (
                  <GlassCard className="p-6 md:p-8 border-white/10 dark:border-white/10 border-slate-200 hover:border-primary-blue/40 transition-all duration-300 group shadow-elevation w-full max-w-xl text-right relative z-20">
                    <span className="text-primary-blue font-bold text-xs lg:text-sm tracking-wider uppercase mb-2 block font-mono">
                      {event.year}
                    </span>
                    <h4 className="text-xl lg:text-2xl font-bold text-foreground mb-3 group-hover:text-primary-blue transition-colors">
                      {event.title}
                    </h4>
                    <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                      {event.description}
                    </p>
                  </GlassCard>
                )}
              </div>

              {/* CENTER NODE ICON (Exact Center Alignment on Desktop, Left on Mobile) */}
              <div className="absolute left-5 md:left-1/2 -translate-x-1/2 z-30 flex items-center justify-center">
                <motion.div
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  transition={{ duration: 0.4 }}
                  className={`w-11 h-11 lg:w-14 lg:h-14 rounded-full glass border ${
                    isEven
                      ? "border-primary-blue/50 text-primary-blue shadow-[0_0_25px_rgba(37,99,235,0.4)]"
                      : "border-primary-green/50 text-primary-green shadow-[0_0_25px_rgba(0,255,170,0.4)]"
                  } bg-background/80 backdrop-blur-xl flex items-center justify-center cursor-pointer`}
                >
                  <TimelineIcon name={event.icon} />
                </motion.div>
              </div>

              {/* DESKTOP RIGHT COLUMN (Odd items get Card, Even items are Empty Spacer) */}
              <div className="hidden md:flex w-1/2 pl-12 lg:pl-16 justify-start relative z-20">
                {!isEven && (
                  <GlassCard className="p-6 md:p-8 border-white/10 dark:border-white/10 border-slate-200 hover:border-primary-green/40 transition-all duration-300 group shadow-elevation w-full max-w-xl text-left relative z-20">
                    <span className="text-primary-green font-bold text-xs lg:text-sm tracking-wider uppercase mb-2 block font-mono">
                      {event.year}
                    </span>
                    <h4 className="text-xl lg:text-2xl font-bold text-foreground mb-3 group-hover:text-primary-green transition-colors">
                      {event.title}
                    </h4>
                    <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                      {event.description}
                    </p>
                  </GlassCard>
                )}
              </div>

              {/* MOBILE CARD VIEW (< md screens only) */}
              <div className="block md:hidden w-full pl-14 relative z-20">
                <GlassCard
                  className={`p-5 border-white/10 dark:border-white/10 border-slate-200 ${
                    isEven ? "hover:border-primary-blue/40" : "hover:border-primary-green/40"
                  } transition-all duration-300 group shadow-elevation`}
                >
                  <span
                    className={`${
                      isEven ? "text-primary-blue" : "text-primary-green"
                    } font-bold text-xs tracking-wider uppercase mb-2 block font-mono`}
                  >
                    {event.year}
                  </span>
                  <h4 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary-blue transition-colors">
                    {event.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    {event.description}
                  </p>
                </GlassCard>
              </div>

            </motion.div>
          );
        })}
      </div>

    </div>
  );
}
