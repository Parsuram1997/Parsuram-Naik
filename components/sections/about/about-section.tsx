"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";
import { GradientText } from "@/components/ui/gradient-text";
import { aboutData } from "@/config/about";
import { AboutHighlights } from "./about-highlights";
import { AboutSkills } from "./about-skills";
import { AboutTimeline } from "./about-timeline";

export function AboutSection() {
  return (
    <section id="about" className="relative py-24 md:py-32 overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-[20%] left-[-10%] w-[40%] h-[40%] bg-primary-blue/5 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="absolute bottom-[10%] right-[-10%] w-[30%] h-[30%] bg-primary-green/5 rounded-full blur-[100px] pointer-events-none -z-10" />

      <Container className="max-w-[1200px]">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start">
          
          {/* LEFT: Visual Column */}
          <div className="w-full lg:w-5/12 flex flex-col items-center lg:items-start relative">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative w-full max-w-[400px] aspect-[4/5] mx-auto lg:mx-0 group"
            >
              {/* Floating Gradient Ring */}
              <div className="absolute inset-[-10%] bg-gradient-to-tr from-primary-blue via-primary-green to-primary-blue bg-[length:200%_auto] animate-gradient rounded-[2rem] opacity-20 blur-xl group-hover:opacity-40 transition-opacity duration-700" />
              
              {/* Photo Container */}
              <div className="relative w-full h-full rounded-[2rem] border border-white/10 glass overflow-hidden flex items-end justify-center shadow-elevation">
                {/* Temp Placeholder */}
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1553028826-f4804a6dba3b?q=80&w=600&auto=format&fit=crop')] bg-cover bg-center mix-blend-luminosity opacity-70 group-hover:mix-blend-normal group-hover:scale-105 transition-all duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
              </div>

              {/* Experience Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8, x: -20 }}
                whileInView={{ opacity: 1, scale: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="absolute bottom-10 -left-6 md:-left-12 glass px-6 py-4 rounded-2xl border border-white/20 shadow-elevation backdrop-blur-xl flex items-center gap-4"
              >
                <div className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-primary-blue to-primary-green">
                  {aboutData.header.experienceBadge.split('+')[0]}<span className="text-2xl">+</span>
                </div>
                <div className="text-sm font-semibold text-muted-foreground leading-tight">
                  Years of<br />Experience
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* RIGHT: Story & Content */}
          <div className="w-full lg:w-7/12 flex flex-col">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="mb-12"
            >
              <h2 className="text-primary-blue font-bold tracking-wider uppercase text-sm mb-3">
                {aboutData.header.title}
              </h2>
              <h3 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-foreground leading-[1.2]">
                <GradientText>{aboutData.header.heading}</GradientText>
              </h3>
              
              <div className="flex flex-col gap-4 text-muted-foreground md:text-lg leading-relaxed">
                {aboutData.header.description.map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              </div>
            </motion.div>

            {/* Sub-sections */}
            <AboutHighlights data={aboutData.highlights} />
            <AboutSkills data={aboutData.skills} />
            <AboutTimeline data={aboutData.timeline} />

          </div>
        </div>
      </Container>
    </section>
  );
}
