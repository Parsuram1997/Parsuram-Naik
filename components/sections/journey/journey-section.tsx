"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";
import { GradientText } from "@/components/ui/gradient-text";
import { achievementsData, timelineData, focusData, goalsData, valuesData } from "@/config/journey";
import { AchievementCard } from "./achievement-card";
import { Timeline } from "./timeline";
import { GoalRoadmap } from "./goal-roadmap";
import { ValuesGrid } from "./values-grid";
import { ResumeCTA } from "./resume-cta";
import { GlassCard } from "@/components/ui/glass-card";
import { Target, ShieldCheck } from "lucide-react";

export function JourneySection() {
  return (
    <section id="journey" className="relative py-24 md:py-32 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(var(--primary-green),0.05)_0%,transparent_70%)] pointer-events-none" />
      <div className="absolute top-[10%] left-[-10%] w-[50%] h-[50%] bg-primary-blue/5 rounded-full blur-[150px] pointer-events-none -z-10" />

      <Container>
        {/* Header */}
        <div className="flex flex-col items-center text-center max-w-[700px] mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass border border-white/10 text-xs font-semibold text-primary-green tracking-wider uppercase mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-primary-green animate-pulse" />
            🏆 Journey & Achievements
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-heading font-bold mb-6 text-foreground leading-tight"
          >
            Building My Journey, <br />
            <GradientText>One Project at a Time.</GradientText>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-muted-foreground"
          >
            Every application, website, video and lesson is another step toward building useful digital products that help people learn, grow and solve real-world problems.
          </motion.p>
        </div>

        {/* Section 1: Achievement Counters */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-32">
          {achievementsData.map((achievement, index) => (
            <AchievementCard key={achievement.id} achievement={achievement} index={index} />
          ))}
        </div>

        {/* Section 2: Timeline */}
        <div className="mb-32">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-heading font-bold mb-4">Professional Timeline</h3>
            <p className="text-muted-foreground">The milestones that shaped my career.</p>
          </div>
          <Timeline events={timelineData} />
        </div>

        {/* Section 3: Current Focus (4-3-2-1 Full-Width Pyramid Layout) */}
        <div className="mb-32">
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass border border-primary-blue/30 text-xs font-semibold text-primary-blue tracking-wider uppercase mb-3">
              ⚡ Active Pursuit
            </span>
            <h3 className="text-3xl font-heading font-bold text-foreground mb-2">Current Focus</h3>
            <p className="text-muted-foreground text-sm">Key technical domains and core disciplines I am actively expanding right now.</p>
          </div>

          <div className="flex flex-col items-center gap-4 w-full">
            
            {/* Row 1: 4 Cards (Full Width) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full">
              {focusData.slice(0, 4).map((focus, idx) => (
                <motion.div
                  key={focus.id}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.05 }}
                >
                  <GlassCard className="px-5 py-4 flex items-center justify-center gap-3 border-white/10 dark:border-white/10 border-slate-200 hover:border-primary-blue/40 hover:shadow-md hover:-translate-y-1 transition-all group h-full text-center">
                    <span className="text-xl group-hover:scale-110 transition-transform shrink-0">{focus.icon}</span>
                    <span className="font-semibold text-sm text-foreground group-hover:text-primary-blue transition-colors line-clamp-1">{focus.title}</span>
                  </GlassCard>
                </motion.div>
              ))}
            </div>

            {/* Row 2: 3 Cards (Centered) */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full max-w-5xl">
              {focusData.slice(4, 7).map((focus, idx) => (
                <motion.div
                  key={focus.id}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: (idx + 4) * 0.05 }}
                >
                  <GlassCard className="px-5 py-4 flex items-center justify-center gap-3 border-white/10 dark:border-white/10 border-slate-200 hover:border-primary-green/40 hover:shadow-md hover:-translate-y-1 transition-all group h-full text-center">
                    <span className="text-xl group-hover:scale-110 transition-transform shrink-0">{focus.icon}</span>
                    <span className="font-semibold text-sm text-foreground group-hover:text-primary-green transition-colors line-clamp-1">{focus.title}</span>
                  </GlassCard>
                </motion.div>
              ))}
            </div>

            {/* Row 3: 2 Cards (Centered) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-3xl">
              {focusData.slice(7, 9).map((focus, idx) => (
                <motion.div
                  key={focus.id}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: (idx + 7) * 0.05 }}
                >
                  <GlassCard className="px-5 py-4 flex items-center justify-center gap-3 border-white/10 dark:border-white/10 border-slate-200 hover:border-amber-400/40 hover:shadow-md hover:-translate-y-1 transition-all group h-full text-center">
                    <span className="text-xl group-hover:scale-110 transition-transform shrink-0">{focus.icon}</span>
                    <span className="font-semibold text-sm text-foreground group-hover:text-amber-400 transition-colors line-clamp-1">{focus.title}</span>
                  </GlassCard>
                </motion.div>
              ))}
            </div>

            {/* Row 4: 1 Card (Centered) */}
            <div className="w-full max-w-md">
              {focusData.slice(9, 10).map((focus, idx) => (
                <motion.div
                  key={focus.id}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.45 }}
                >
                  <GlassCard className="px-5 py-4 flex items-center justify-center gap-3 border-white/10 dark:border-white/10 border-slate-200 hover:border-purple-400/40 hover:shadow-md hover:-translate-y-1 transition-all group text-center">
                    <span className="text-xl group-hover:scale-110 transition-transform shrink-0">{focus.icon}</span>
                    <span className="font-semibold text-sm text-foreground group-hover:text-purple-400 transition-colors line-clamp-1">{focus.title}</span>
                  </GlassCard>
                </motion.div>
              ))}
            </div>

          </div>
        </div>

        {/* Section 4: Goals & Section 5: Values */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 mb-32">
          <div>
            <div className="mb-8">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass border border-primary-blue/30 text-xs font-semibold text-primary-blue tracking-wider uppercase mb-3">
                <Target className="w-3.5 h-3.5" /> Future Vision
              </span>
              <h3 className="text-3xl font-heading font-bold text-foreground mb-2">Professional <span className="text-gradient">Goals</span></h3>
              <p className="text-muted-foreground text-sm">Strategic roadmap guiding my technical evolution and impact.</p>
            </div>
            <GoalRoadmap goals={goalsData} />
          </div>
          
          <div>
            <div className="mb-8">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass border border-primary-green/30 text-xs font-semibold text-primary-green tracking-wider uppercase mb-3">
                <ShieldCheck className="w-3.5 h-3.5" /> Philosophy
              </span>
              <h3 className="text-3xl font-heading font-bold text-foreground mb-2">Core <span className="text-gradient">Values</span></h3>
              <p className="text-muted-foreground text-sm">Non-negotiable principles that drive my code and creations.</p>
            </div>
            <ValuesGrid values={valuesData} />
          </div>
        </div>

        {/* Section 6: Resume CTA */}
        <ResumeCTA />

      </Container>
    </section>
  );
}
