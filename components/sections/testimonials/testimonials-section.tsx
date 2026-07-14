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

  return (
    <section id="testimonials" className="relative py-24 md:py-32 overflow-hidden bg-black/40 border-t border-white/5">
      {/* Background Decor */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(var(--primary-green),0.03)_0%,transparent_70%)] pointer-events-none" />
      
      <Container className="max-w-[1200px] relative z-10">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center max-w-[700px] mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass border border-white/10 text-xs font-semibold text-yellow-500 tracking-wider uppercase mb-6"
          >
            ⭐ Testimonials
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
            Feedback from students, app users, and clients from around the globe.
          </motion.p>
        </div>

        {/* Featured Testimonial */}
        {featuredTestimonial && <FeaturedReview testimonial={featuredTestimonial} />}

        {/* Testimonial Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-32">
          {otherTestimonials.map((testimonial, idx) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} index={idx} />
          ))}
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
