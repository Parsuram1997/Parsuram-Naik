"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { GradientText } from "@/components/ui/gradient-text";
import { ArrowRight, MessageSquare } from "lucide-react";

export function FooterCTA() {
  const handleContactClick = () => {
    const el = document.getElementById("contact");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      window.history.pushState(null, "", "#contact");
    } else {
      window.location.href = "/#contact";
    }
  };

  const handleAppsClick = () => {
    const el = document.getElementById("apps");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      window.history.pushState(null, "", "#apps");
    } else {
      window.location.href = "/#apps";
    }
  };

  return (
    <div className="relative py-20 overflow-hidden border-t border-white/10 dark:border-white/5 border-slate-200 bg-black/40">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(var(--primary-blue),0.1)_0%,transparent_70%)] pointer-events-none" />
      
      <Container className="relative z-10 text-center max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Let&apos;s Build Something <br className="hidden sm:block" />
            <GradientText>Amazing Together</GradientText>
          </h2>
          
          <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
            Whether you have an app idea, website project, collaboration proposal or simply want to connect, I&apos;d love to hear from you.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button 
              size="lg" 
              className="rounded-full w-full sm:w-auto min-w-[200px] h-14 text-base bg-gradient-to-r from-primary-blue to-primary-green text-white border-0 shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:shadow-[0_0_30px_rgba(37,99,235,0.5)] transition-all group font-bold cursor-pointer"
              onClick={handleContactClick}
            >
              <MessageSquare className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
              <span>Contact Me</span>
            </Button>

            <Button 
              size="lg" 
              variant="outline" 
              className="rounded-full w-full sm:w-auto min-w-[200px] h-14 text-base border-white/20 dark:border-white/20 border-slate-300 hover:bg-white/10 text-foreground transition-all group font-bold cursor-pointer"
              onClick={handleAppsClick}
            >
              <span>Explore My Apps</span>
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </motion.div>
      </Container>
    </div>
  );
}
