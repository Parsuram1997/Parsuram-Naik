"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";
import { Zap, MapPin, Mail, Clock } from "lucide-react";
import { FaYoutube, FaInstagram, FaFacebookF, FaGithub, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";
import { SocialIcon } from "@/components/ui/social-icon";
import { FooterCTA } from "./footer-cta";
import { QuickLinks } from "./quick-links";
import { NewsletterFooter } from "./newsletter-footer";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative mt-20">
      {/* Footer CTA Section */}
      <FooterCTA />

      {/* Main Footer */}
      <div className="relative pt-20 pb-10 bg-background border-t border-white/5 overflow-hidden">
        
        {/* Background Effects */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[300px] bg-gradient-to-b from-primary-blue/5 to-transparent pointer-events-none" />
        
        <Container className="relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
            
            {/* Column 1: Brand */}
            <div className="flex flex-col">
              <a href="/" className="group flex items-center gap-3 font-heading font-bold text-2xl tracking-tight mb-6">
                <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-primary-blue to-primary-green text-white shadow-[0_0_15px_rgba(37,99,235,0.5)]">
                  <Zap className="w-5 h-5 fill-white" />
                </div>
                <span>PARSURAM <span className="text-primary-blue">NAIK</span></span>
              </a>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                Building Android Apps, AI Products, Websites and Educational Content to help people learn technology.
              </p>
              
              {/* Status Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 text-xs font-medium w-fit mb-8">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
                Available for Collaboration
              </div>

              {/* Contact Info */}
              <div className="flex flex-col gap-3 mt-auto">
                <a href="mailto:contact@parsuramnaik.com" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-white transition-colors">
                  <Mail className="w-4 h-4 text-primary-green" /> contact@parsuramnaik.com
                </a>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <MapPin className="w-4 h-4 text-primary-blue" /> Remote / Global
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Clock className="w-4 h-4 text-primary-green" /> Response time: ~24 hours
                </div>
              </div>
            </div>

            {/* Column 2: Quick Links */}
            <div>
              <QuickLinks 
                title="Quick Links"
                links={[
                  { name: "Home", href: "/" },
                  { name: "About", href: "#about" },
                  { name: "Apps", href: "#apps" },
                  { name: "Websites", href: "#websites" },
                  { name: "Courses", href: "#courses" },
                  { name: "YouTube", href: "#youtube" },
                  { name: "Blog", href: "#blog" },
                  { name: "Contact", href: "#contact" },
                ]}
              />
            </div>

            {/* Column 3: Projects */}
            <div>
              <QuickLinks 
                title="Projects"
                links={[
                  { name: "CashFlowAI", href: "#apps" },
                  { name: "MakeMyPC", href: "#apps" },
                  { name: "Future AI Products", href: "#apps" },
                  { name: "PC Builder", href: "#websites" },
                  { name: "Portfolio Website", href: "#websites" },
                ]}
              />
            </div>

            {/* Column 4: Resources & Newsletter */}
            <div className="flex flex-col">
              <QuickLinks 
                title="Resources"
                links={[
                  { name: "Blog", href: "#blog" },
                  { name: "FAQ", href: "#faq" },
                  { name: "Privacy Policy", href: "#" },
                  { name: "Terms of Service", href: "#" },
                  { name: "Download Resume", href: "/resume.pdf" },
                  { name: "Sitemap", href: "/sitemap.xml" },
                ]}
              />
              <div className="mt-8">
                <NewsletterFooter />
              </div>
            </div>

          </div>

          {/* Social Links Row */}
          <div className="flex flex-wrap items-center justify-center gap-4 py-8 border-t border-white/5">
            <SocialIcon title="YouTube" href="https://youtube.com" icon={<FaYoutube className="h-5 w-5 hover:text-red-500 transition-colors" />} className="bg-white/5 border border-white/10 hover:border-red-500/50 hover:bg-red-500/10" />
            <SocialIcon title="Instagram" href="https://instagram.com" icon={<FaInstagram className="h-5 w-5 hover:text-pink-500 transition-colors" />} className="bg-white/5 border border-white/10 hover:border-pink-500/50 hover:bg-pink-500/10" />
            <SocialIcon title="Facebook" href="https://facebook.com" icon={<FaFacebookF className="h-5 w-5 hover:text-blue-500 transition-colors" />} className="bg-white/5 border border-white/10 hover:border-blue-500/50 hover:bg-blue-500/10" />
            <SocialIcon title="GitHub" href="https://github.com" icon={<FaGithub className="h-5 w-5 hover:text-white transition-colors" />} className="bg-white/5 border border-white/10 hover:border-white/50 hover:bg-white/10" />
            <SocialIcon title="LinkedIn" href="https://linkedin.com" icon={<FaLinkedinIn className="h-5 w-5 hover:text-blue-400 transition-colors" />} className="bg-white/5 border border-white/10 hover:border-blue-400/50 hover:bg-blue-400/10" />
            <SocialIcon title="X (Twitter)" href="https://twitter.com" icon={<FaXTwitter className="h-5 w-5 hover:text-white transition-colors" />} className="bg-white/5 border border-white/10 hover:border-white/50 hover:bg-white/10" />
            <SocialIcon title="Email" href="mailto:contact@parsuramnaik.com" icon={<Mail className="h-5 w-5 hover:text-primary-green transition-colors" />} className="bg-white/5 border border-white/10 hover:border-primary-green/50 hover:bg-primary-green/10" />
          </div>

          {/* Bottom Bar */}
          <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-white/5 text-xs text-muted-foreground gap-4 text-center md:text-left">
            <p>© {currentYear} PARSURAM NAIK. All rights reserved.</p>
            <p>Designed & Developed by <span className="text-white font-medium">Parsuram Naik</span></p>
            <div className="flex items-center gap-4">
              <span>Version v1.0.0</span>
              <span className="hidden md:block w-1 h-1 rounded-full bg-white/20" />
              <span>Last Updated: {currentYear}</span>
            </div>
          </div>

        </Container>
      </div>
    </footer>
  );
}
