"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";
import { GradientText } from "@/components/ui/gradient-text";
import { testimonialsData } from "@/config/testimonials";
import { FeaturedReview } from "./featured-review";
import { TestimonialCard } from "./testimonial-card";
import { Stats } from "./stats";
import { CTA } from "./cta";

export function TestimonialsSection() {
  const featuredTestimonial = testimonialsData.find(t => t.featured);
  const otherTestimonials = testimonialsData.filter(t => !t.featured);

  // Divide 23 non-featured testimonials into 2 rows for dual infinite auto-scrolling
  const row1 = otherTestimonials.slice(0, 12);
  const row2 = otherTestimonials.slice(12);

  // Duplicate each row array for seamless loop
  const marqueeRow1 = [...row1, ...row1];
  const marqueeRow2 = [...row2, ...row2];

  return (
    <section id="testimonials" className="relative py-24 md:py-32 overflow-hidden dark:bg-black/40 bg-slate-100/70 border-t dark:border-white/5 border-slate-200">
      {/* Background Decor */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(var(--primary-green),0.03)_0%,transparent_70%)] pointer-events-none" />
      
      <Container className="relative z-10">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center max-w-[700px] mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass border border-white/10 text-xs font-semibold text-yellow-500 tracking-wider uppercase mb-6"
          >
            ⭐ Testimonials & Social Proof
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-heading font-bold mb-6 text-foreground leading-tight"
          >
            What People Say <br />
            <GradientText>About My Work</GradientText>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-muted-foreground"
          >
            Real feedback from 24+ students, app users, developers, and clients across the globe.
          </motion.p>
        </div>

        {/* Featured Testimonial */}
        {featuredTestimonial && <FeaturedReview testimonial={featuredTestimonial} />}

        {/* --- DUAL INFINITE AUTO-SCROLLING MARQUEE (CONTAINED WITHIN SECTION WIDTH) --- */}
        <div className="relative w-full overflow-hidden rounded-3xl mb-32 space-y-6 group/marquee py-4">
          
          {/* Left & Right Gradient Fade Masks */}
          <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-r from-slate-100/90 dark:from-background via-slate-100/60 dark:via-background/80 to-transparent z-20" />
          <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-l from-slate-100/90 dark:from-background via-slate-100/60 dark:via-background/80 to-transparent z-20" />

          {/* ROW 1: Auto-scrolls LEFT infinitely */}
          <div className="flex overflow-hidden">
            <motion.div
              animate={{ x: ["0%", "-50%"] }}
              transition={{
                repeat: Infinity,
                repeatType: "loop",
                duration: 45,
                ease: "linear",
              }}
              className="flex gap-6 w-max group-hover/marquee:[animation-play-state:paused]"
            >
              {marqueeRow1.map((testimonial, idx) => (
                <TestimonialCard key={`row1-${testimonial.id}-${idx}`} testimonial={testimonial} index={idx} />
              ))}
            </motion.div>
          </div>

          {/* ROW 2: Auto-scrolls RIGHT infinitely */}
          <div className="flex overflow-hidden">
            <motion.div
              animate={{ x: ["-50%", "0%"] }}
              transition={{
                repeat: Infinity,
                repeatType: "loop",
                duration: 50,
                ease: "linear",
              }}
              className="flex gap-6 w-max group-hover/marquee:[animation-play-state:paused]"
            >
              {marqueeRow2.map((testimonial, idx) => (
                <TestimonialCard key={`row2-${testimonial.id}-${idx}`} testimonial={testimonial} index={idx} />
              ))}
            </motion.div>
          </div>

        </div>

        {/* Statistics / Trust Counters */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-heading font-bold mb-4">Trusted by Thousands</h3>
            <p className="text-muted-foreground">The impact of my digital products and educational content.</p>
          </div>
          <Stats />
        </div>

        {/* Call To Action */}
        <CTA />

      </Container>
    </section>
  );
}
