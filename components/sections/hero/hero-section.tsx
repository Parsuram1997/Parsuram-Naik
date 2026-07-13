"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { GradientText } from "@/components/ui/gradient-text";
import { SocialIcon } from "@/components/ui/social-icon";
import { HeroIllustration } from "./hero-illustration";
import { HeroStats } from "./hero-stats";

import { FaYoutube, FaInstagram, FaFacebookF, FaGithub, FaLinkedinIn } from "react-icons/fa";
import { Mail, ArrowRight, ChevronDown, Download } from "lucide-react";

// Stagger variant for the left content
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

export function HeroSection() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const springConfig = { stiffness: 50, damping: 20 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  // Parallax for background orbs
  const bgX = useTransform(smoothX, [-1, 1], [-20, 20]);
  const bgY = useTransform(smoothY, [-1, 1], [-20, 20]);

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    const x = (clientX / window.innerWidth) * 2 - 1;
    const y = (clientY / window.innerHeight) * 2 - 1;
    mouseX.set(x);
    mouseY.set(y);
  };

  const scrollToNext = () => {
    window.scrollBy({ top: window.innerHeight, behavior: "smooth" });
  };

  return (
    <section 
      className="relative min-h-[100dvh] pt-[80px] pb-16 overflow-hidden flex flex-col justify-center"
      onMouseMove={handleMouseMove}
    >
      {/* --- Premium Background --- */}
      {/* Base Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_100%)] -z-30"></div>
      
      {/* Noise Texture Overlay */}
      <div className="absolute inset-0 opacity-[0.015] dark:opacity-[0.03] mix-blend-overlay pointer-events-none -z-20" style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E')" }}></div>
      
      {/* Soft Vignette Overlay */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_0%,rgba(var(--background),0.4)_100%)] dark:bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.4)_100%)] -z-10 mix-blend-multiply dark:mix-blend-overlay" />
      
      {/* Tiny Glowing Particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden -z-20">
        {[...Array(15)].map((_, i) => {
          // Deterministic pseudo-random values based on index to prevent SSR hydration mismatch
          const randomTop = (i * 17) % 100;
          const randomLeft = (i * 23 + 13) % 100;
          const randomDuration = 3 + ((i * 7) % 5);
          const randomDelay = (i * 3) % 2;

          return (
            <motion.div
              key={i}
              className="absolute w-1 h-1 rounded-full bg-white/20 blur-[1px]"
              style={{
                top: `${randomTop}%`,
                left: `${randomLeft}%`,
              }}
              animate={{
                y: [0, -20, 0],
                opacity: [0.1, 0.5, 0.1],
                scale: [1, 1.5, 1],
              }}
              transition={{
                duration: randomDuration,
                repeat: Infinity,
                delay: randomDelay,
              }}
            />
          );
        })}
      </div>
      
      {/* Parallax Background Glows */}
      <motion.div 
        style={{ x: bgX, y: bgY }}
        className="absolute top-0 left-[-10%] w-[50%] h-[50%] pointer-events-none -z-20 flex items-center justify-center"
      >
        <motion.div 
          animate={{ scale: [1, 1.05, 1], opacity: [0.8, 1, 0.8] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="w-full h-full bg-primary-blue/10 rounded-full blur-[150px]"
        />
      </motion.div>
      
      <motion.div 
        style={{ x: useTransform(smoothX, [-1, 1], [20, -20]), y: useTransform(smoothY, [-1, 1], [20, -20]) }}
        className="absolute bottom-0 right-[-10%] w-[50%] h-[50%] pointer-events-none -z-20 flex items-center justify-center"
      >
        <motion.div 
          animate={{ scale: [1, 1.1, 1], opacity: [0.7, 0.9, 0.7] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="w-full h-full bg-primary-green/10 rounded-full blur-[150px]"
        />
      </motion.div>
      {/* ------------------------- */}

      <Container className="relative z-10 flex flex-col flex-1 justify-center mt-10 md:mt-20 lg:mt-0">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* LEFT SIDE: Content */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="show"
            className="flex flex-col items-start order-2 lg:order-1 mt-8 lg:mt-0"
          >
            <motion.h1 variants={itemVariants} className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] mb-6 text-foreground tracking-tight">
              Hi, I&apos;m <br className="hidden sm:block" />
              Parsuram Naik
              <span className="block h-4"></span>
              <GradientText>Android Developer.</GradientText>
              <br />
              <GradientText>AI Builder.</GradientText>
              <br />
              <GradientText>Computer Educator.</GradientText>
              <span className="block h-4"></span>
              <span className="text-3xl sm:text-4xl text-foreground/90">Building Apps that solve real-world problems.</span>
            </motion.h1>

            <motion.p 
              variants={itemVariants}
              className="text-lg md:text-xl text-muted-foreground max-w-[600px] mb-10 leading-relaxed font-medium"
            >
              I design and build modern Android applications, intelligent web platforms and educational content that help thousands of people learn technology, manage money smarter and build digital products.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row flex-wrap items-start sm:items-center gap-4 w-full sm:w-auto mb-12">
              <Button size="lg" className="rounded-full w-full sm:w-auto group">
                Explore My Apps
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline" className="rounded-full w-full sm:w-auto hover:bg-foreground hover:text-background transition-colors group">
                <FaYoutube className="mr-2 h-5 w-5 text-red-500 group-hover:text-background transition-colors" />
                Visit YouTube
              </Button>
              <Button size="lg" variant="outline" className="rounded-full w-full sm:w-auto hover:bg-foreground hover:text-background transition-colors group">
                <Download className="mr-2 h-4 w-4 group-hover:-translate-y-0.5 transition-transform" />
                Download Resume
              </Button>
            </motion.div>

            {/* Trust Text */}
            <motion.p 
              variants={itemVariants}
              className="text-sm text-muted-foreground/80 font-medium mb-12 flex items-center gap-2"
            >
              <span className="flex items-center text-yellow-500">
                ★★★★★
              </span>
              Trusted by thousands of learners and app users.
            </motion.p>

            {/* Social Links */}
            <motion.div variants={itemVariants} className="flex items-center gap-3 md:gap-4">
              <SocialIcon title="YouTube" href="https://youtube.com" icon={<FaYoutube className="h-5 w-5 hover:text-red-500 transition-colors" />} />
              <SocialIcon title="Instagram" href="https://instagram.com" icon={<FaInstagram className="h-5 w-5 hover:text-pink-500 transition-colors" />} />
              <SocialIcon title="Facebook" href="https://facebook.com" icon={<FaFacebookF className="h-5 w-5 hover:text-blue-500 transition-colors" />} />
              <SocialIcon title="GitHub" href="https://github.com" icon={<FaGithub className="h-5 w-5 hover:text-foreground transition-colors" />} />
              <SocialIcon title="LinkedIn" href="https://linkedin.com" icon={<FaLinkedinIn className="h-5 w-5 hover:text-blue-400 transition-colors" />} />
              <SocialIcon title="Email" href="mailto:contact@parsutech.com" icon={<Mail className="h-5 w-5 hover:text-primary-green transition-colors" />} />
            </motion.div>
          </motion.div>

          {/* RIGHT SIDE: Illustration */}
          <div className="w-full order-1 lg:order-2 flex justify-center mt-0 lg:mt-0">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
              className="w-full max-w-[500px] lg:max-w-none"
            >
              <HeroIllustration mouseX={smoothX} mouseY={smoothY} />
            </motion.div>
          </div>

        </div>

        {/* BELOW HERO: Stats */}
        <HeroStats />
        
      </Container>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer z-20 text-muted-foreground hover:text-foreground transition-colors"
        onClick={scrollToNext}
      >
        <span className="text-xs font-semibold tracking-widest uppercase">Scroll to Explore</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="h-5 w-5" />
        </motion.div>
      </motion.div>
      
    </section>
  );
}
