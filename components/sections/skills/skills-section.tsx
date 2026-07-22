"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Container } from "@/components/ui/container";
import { GradientText } from "@/components/ui/gradient-text";
import { techData, techCategories } from "@/config/skills-tech";
import { TechCard } from "./tech-card";
import { PrimaryStackCard } from "./primary-stack-card";

export function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredTech = useMemo(() => {
    if (activeCategory === "All") return techData;
    return techData.filter(tech => tech.category === activeCategory);
  }, [activeCategory]);

  const primaryStack = useMemo(() => {
    return techData.filter(tech => tech.featured);
  }, []);

  return (
    <section id="skills" className="relative py-24 md:py-32 bg-black/40 border-y border-white/5">
      {/* Background Decor */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(var(--primary-blue),0.05)_0%,transparent_70%)]" />
        <div className="absolute top-[30%] right-[-5%] w-[40%] h-[40%] bg-primary-green/5 rounded-full blur-[120px] -z-10" />
      </div>

      <Container className="max-w-[1440px]">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center max-w-[800px] mx-auto mb-16 lg:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass border border-white/10 text-xs font-semibold text-primary-green tracking-wider uppercase mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-primary-green animate-pulse" />
            ⚡ Skills & Technologies
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-heading font-bold mb-6 text-foreground leading-tight"
          >
            Technologies I Use <br className="hidden md:block" />
            To Build <GradientText>Modern Digital Products</GradientText>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-muted-foreground"
          >
            I build Android applications, premium websites and AI-powered solutions using modern tools, frameworks and cloud technologies.
          </motion.p>
        </div>

        {/* Primary Stack Highlight */}
        <PrimaryStackCard stack={primaryStack} />

        {/* 2-Column Layout */}
        <div className="grid lg:grid-cols-[240px_1fr] gap-6 lg:gap-8 items-start mt-12">
          
          {/* LEFT: Categories */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-2 sticky top-24 z-10 glass p-4 rounded-2xl border border-white/10 hidden lg:flex"
          >
            <h3 className="text-sm font-bold text-muted-foreground uppercase tracking-wider mb-2 px-4">Categories</h3>
            {techCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`text-left px-4 py-3 rounded-xl text-sm font-semibold transition-all duration-300 ${
                  activeCategory === cat 
                    ? "bg-white/10 text-foreground border border-white/20 shadow-md" 
                    : "text-muted-foreground hover:text-foreground hover:bg-white/5 border border-transparent"
                }`}
              >
                {cat}
              </button>
            ))}
          </motion.div>

          {/* Mobile Categories Dropdown/Scroll */}
          <div className="lg:hidden w-full overflow-x-auto pb-4 scrollbar-hide flex gap-2">
            {techCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`whitespace-nowrap px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                  activeCategory === cat 
                    ? "bg-white/10 text-foreground border border-white/20" 
                    : "glass text-muted-foreground hover:text-foreground"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* RIGHT: Technology Grid (4 Cards Per Row) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 min-h-[500px] content-start">
            <AnimatePresence mode="popLayout">
              {filteredTech.map((tech, index) => (
                <motion.div
                  key={tech.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                >
                  <TechCard tech={tech} index={index} />
                </motion.div>
              ))}
            </AnimatePresence>
            
            {filteredTech.length === 0 && (
              <div className="col-span-full py-12 text-center text-muted-foreground border border-dashed border-white/10 rounded-2xl">
                No technologies found in this category.
              </div>
            )}
          </div>
        </div>

      </Container>
    </section>
  );
}
