"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";
import { GradientText } from "@/components/ui/gradient-text";
import { GlassCard } from "@/components/ui/glass-card";
import { MapPin } from "lucide-react";
import { AvailabilityBadge } from "./availability-badge";
import { ContactCard } from "./contact-card";
import { ContactForm } from "./contact-form";
import { SocialGrid } from "./social-grid";
import { QuickActions } from "./quick-actions";

export function ContactSection() {
  return (
    <section id="contact" className="relative py-24 md:py-32 overflow-hidden bg-black/40 border-y border-white/5">
      {/* Background Decor */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 -left-1/4 w-[500px] h-[500px] bg-primary-blue/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 -right-1/4 w-[500px] h-[500px] bg-primary-green/5 rounded-full blur-[120px]" />
      </div>
      
      <Container className="max-w-[1200px] relative z-10">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center max-w-[700px] mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass border border-white/10 text-xs font-semibold text-primary-green tracking-wider uppercase mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-primary-green animate-pulse" />
            📬 Contact
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-heading font-bold mb-6 text-foreground leading-tight"
          >
            Let's Build Something <br />
            <GradientText>Amazing Together</GradientText>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-muted-foreground mb-10"
          >
            Have a project idea, collaboration opportunity or simply want to say hello? I'd love to hear from you.
          </motion.p>
          
          <AvailabilityBadge />
        </div>

        {/* Main Contact Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <ContactCard />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <ContactForm />
          </motion.div>
        </div>

        {/* Quick Actions */}
        <div className="mb-24">
          <h3 className="text-center font-heading text-2xl font-bold mb-10">Quick Actions</h3>
          <QuickActions />
        </div>

        {/* Social & Map Area */}
        <div className="grid lg:grid-cols-2 gap-8 items-center border-t border-white/10 pt-16">
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
            <h3 className="text-2xl font-bold mb-4">Connect Around the Web</h3>
            <p className="text-muted-foreground mb-8 max-w-md">Follow my journey across multiple platforms, explore open-source code, and watch educational tech videos.</p>
            <SocialGrid />
          </div>
          
          {/* Map Placeholder */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <GlassCard className="h-[250px] md:h-[300px] p-0 overflow-hidden relative flex flex-col items-center justify-center group border-white/10">
              <div className="absolute inset-0 bg-map-pattern opacity-10 mix-blend-overlay group-hover:opacity-20 transition-opacity" />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
              <MapPin className="w-12 h-12 text-primary-green mb-4 relative z-10 group-hover:animate-bounce" />
              <h4 className="font-bold text-lg relative z-10">Based in Bhubaneswar</h4>
              <p className="text-sm text-muted-foreground relative z-10">Odisha, India</p>
              
              <div className="absolute top-4 right-4 px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[10px] font-bold uppercase tracking-widest text-muted-foreground backdrop-blur-md">
                Map Integrated Soon
              </div>
            </GlassCard>
          </motion.div>
        </div>

      </Container>
    </section>
  );
}
