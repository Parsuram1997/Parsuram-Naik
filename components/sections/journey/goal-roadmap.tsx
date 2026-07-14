"use client";

import { motion } from "framer-motion";
import { Goal } from "@/config/journey";
import { GlassCard } from "@/components/ui/glass-card";
import { ArrowDown } from "lucide-react";

export function GoalRoadmap({ goals }: { goals: Goal[] }) {
  return (
    <div className="max-w-2xl mx-auto flex flex-col items-center">
      {goals.map((goal, index) => (
        <div key={goal.id} className="w-full flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="w-full"
          >
            <GlassCard className="p-6 text-center border-white/10 hover:border-primary-blue/30 transition-colors group relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-primary-blue/5 to-primary-green/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10">
                <span className="text-[10px] font-bold tracking-widest uppercase text-muted-foreground block mb-2">{goal.phase}</span>
                <h4 className="text-lg md:text-xl font-bold text-foreground group-hover:text-primary-green transition-colors">{goal.title}</h4>
              </div>
            </GlassCard>
          </motion.div>

          {/* Connector */}
          {index < goals.length - 1 && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              whileInView={{ opacity: 1, height: 40 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
              className="flex flex-col items-center my-2"
            >
              <div className="w-px h-8 bg-gradient-to-b from-primary-blue/50 to-primary-green/50" />
              <ArrowDown className="w-4 h-4 text-primary-green/50" />
            </motion.div>
          )}
        </div>
      ))}
    </div>
  );
}
