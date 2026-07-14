"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { GlassCard } from "@/components/ui/glass-card";

export function CourseRoadmap() {
  const steps = [
    { title: "Beginner", desc: "Start with basics" },
    { title: "Intermediate", desc: "Build core skills" },
    { title: "Advanced", desc: "Master architecture" },
    { title: "Projects", desc: "Build your portfolio" },
    { title: "Career Ready", desc: "Get hired" }
  ];

  return (
    <div className="max-w-4xl mx-auto py-12 flex flex-col items-center">
      {steps.map((step, index) => (
        <div key={index} className="w-full flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="w-full md:w-2/3 lg:w-1/2"
          >
            <GlassCard className="p-4 flex items-center justify-between group hover:border-primary-blue/30 transition-colors">
              <span className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center font-bold text-primary-green group-hover:scale-110 transition-transform">
                {index + 1}
              </span>
              <div className="text-center">
                <h4 className="font-bold text-foreground">{step.title}</h4>
                <p className="text-xs text-muted-foreground">{step.desc}</p>
              </div>
              <div className="w-8" />
            </GlassCard>
          </motion.div>

          {index < steps.length - 1 && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              whileInView={{ opacity: 1, height: 32 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
              className="flex flex-col items-center my-2"
            >
              <div className="w-0.5 h-6 bg-gradient-to-b from-primary-blue/50 to-primary-green/50" />
              <ArrowDown className="w-4 h-4 text-primary-green/50" />
            </motion.div>
          )}
        </div>
      ))}
    </div>
  );
}
