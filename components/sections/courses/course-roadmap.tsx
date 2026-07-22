"use client";

import { motion } from "framer-motion";
import { BookOpen, Code, Layers, Rocket, Award, ArrowRight } from "lucide-react";
import { GlassCard } from "@/components/ui/glass-card";

export function CourseRoadmap() {
  const steps = [
    {
      level: "LEVEL 01",
      title: "Beginner",
      subtitle: "Foundation & Syntax",
      desc: "Master programming fundamentals, logic, control structures, and essential language syntax.",
      icon: BookOpen,
      color: "from-blue-500/20 to-indigo-500/10",
      text: "text-blue-500 dark:text-blue-400",
      border: "border-blue-500/30",
    },
    {
      level: "LEVEL 02",
      title: "Intermediate",
      subtitle: "UI & Core Skills",
      desc: "Build responsive interfaces, state management, and modern component-driven layouts.",
      icon: Code,
      color: "from-cyan-500/20 to-teal-500/10",
      text: "text-cyan-500 dark:text-cyan-400",
      border: "border-cyan-500/30",
    },
    {
      level: "LEVEL 03",
      title: "Advanced",
      subtitle: "Architecture & APIs",
      desc: "Implement Clean Architecture, MVVM, RESTful APIs, databases, and background tasks.",
      icon: Layers,
      color: "from-purple-500/20 to-pink-500/10",
      text: "text-purple-500 dark:text-purple-400",
      border: "border-purple-500/30",
    },
    {
      level: "LEVEL 04",
      title: "Projects",
      subtitle: "Real-World Apps",
      desc: "Develop production-grade full-stack applications and publish them to real users.",
      icon: Rocket,
      color: "from-amber-500/20 to-orange-500/10",
      text: "text-amber-500 dark:text-amber-400",
      border: "border-amber-500/30",
    },
    {
      level: "LEVEL 05",
      title: "Career Ready",
      subtitle: "SaaS & Industry",
      desc: "Prepare for senior roles, launch independent SaaS products, and scale digital systems.",
      icon: Award,
      color: "from-emerald-500/20 to-teal-500/10",
      text: "text-emerald-500 dark:text-emerald-400",
      border: "border-emerald-500/30",
    },
  ];

  return (
    <div className="w-full relative flex flex-col gap-4">
      {steps.map((step, index) => {
        const IconComponent = step.icon;

        return (
          <motion.div
            key={step.title}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.08 }}
            className="w-full group"
          >
            <GlassCard className="p-5 md:p-6 border-white/10 hover:border-primary-blue/30 transition-all duration-300 relative overflow-hidden group-hover:-translate-y-1">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                
                <div className="flex items-center gap-4">
                  {/* Step Level Badge */}
                  <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${step.color} border ${step.border} flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className={`w-6 h-6 ${step.text}`} />
                  </div>

                  <div className="flex flex-col gap-1">
                    {/* Line 1: Level Badge */}
                    <div>
                      <span className={`inline-block whitespace-nowrap text-[10px] font-bold tracking-wider uppercase px-2.5 py-0.5 rounded-full border ${step.color} ${step.text} ${step.border}`}>
                        {step.level}
                      </span>
                    </div>

                    {/* Line 2: Main Title */}
                    <h4 className="text-base md:text-lg font-bold text-foreground group-hover:text-primary-blue transition-colors">
                      {step.title}
                    </h4>

                    {/* Line 3: Subtitle */}
                    <span className="text-xs text-muted-foreground font-semibold">
                      {step.subtitle}
                    </span>
                  </div>
                </div>

                <p className="text-xs md:text-sm text-muted-foreground leading-relaxed sm:max-w-xs md:max-w-sm lg:max-w-md">
                  {step.desc}
                </p>

                <div className="hidden xl:flex items-center justify-center w-8 h-8 rounded-full bg-white/5 border border-white/10 text-muted-foreground group-hover:text-primary-blue group-hover:border-primary-blue/30 group-hover:translate-x-1 transition-all shrink-0">
                  <ArrowRight className="w-4 h-4" />
                </div>

              </div>
            </GlassCard>
          </motion.div>
        );
      })}
    </div>
  );
}
