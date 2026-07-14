"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { GradientText } from "@/components/ui/gradient-text";
import { ArrowRight, MessageSquare } from "lucide-react";

export function FooterCTA() {
  return (
    <div className="relative py-20 overflow-hidden border-t border-white/5 bg-black/40">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(var(--primary-blue),0.1)_0%,transparent_70%)] pointer-events-none" />
      
      <Container className="relative z-10 text-center max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6">
            Let&apos;s Build Something <br className="hidden sm:block" />
            <GradientText>Amazing Together</GradientText>
          </h2>
          
          <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
            Whether you have an app idea, website project, collaboration proposal or simply want to connect, I&apos;d love to hear from you.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button 
              size="lg" 
              className="rounded-full w-full sm:w-auto min-w-[200px] h-14 text-base shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:shadow-[0_0_30px_rgba(37,99,235,0.5)] transition-all group"
              onClick={() => {
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                history.pushState(null, '', '#contact');
              }}
            >
              <MessageSquare className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
              Contact Me
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="rounded-full w-full sm:w-auto min-w-[200px] h-14 text-base border-white/20 hover:bg-white/10 hover:text-white transition-all group"
              onClick={() => {
                document.getElementById('apps')?.scrollIntoView({ behavior: 'smooth' });
                history.pushState(null, '', '#apps');
              }}
            >
              Explore My Apps
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </motion.div>
      </Container>
    </div>
  );
}
