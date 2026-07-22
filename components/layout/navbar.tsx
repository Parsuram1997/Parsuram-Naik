"use client";

import { useState, useEffect } from "react";
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion";
import { Menu } from "lucide-react";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { NavLink } from "@/components/ui/nav-link";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { SearchButton } from "@/components/ui/search-button";
import { Button } from "@/components/ui/button";
import { MobileMenu } from "./mobile-menu";
import { cn } from "@/lib/utils";
import { Zap } from "lucide-react";
import { useConnect } from "@/components/providers/connect-provider";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "#about" },
  { name: "Apps", href: "#apps" },
  { name: "Websites", href: "#websites" },
  { name: "Courses", href: "#courses" },
  { name: "YouTube", href: "#youtube" },
  { name: "Blog", href: "#blog" },
  { name: "Contact", href: "#contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const { scrollY } = useScroll();
  const { openConnect } = useConnect();

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 0;
      setIsScrolled((prev) => (prev !== scrolled ? scrolled : prev));
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Track active section using IntersectionObserver
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(`#${entry.target.id}`);
          }
        });
      },
      { rootMargin: "-20% 0px -80% 0px" } // trigger when section is roughly in view
    );

    const sections = navLinks.map(link => link.href === "/" ? "#home" : link.href);
    sections.forEach((href) => {
      const element = document.querySelector(href);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  // Handle URL hash on initial load
  useEffect(() => {
    if (window.location.hash) {
      const id = window.location.hash.substring(1);
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          const offset = 80;
          const targetPosition = element.getBoundingClientRect().top + window.scrollY - offset;
          window.scrollTo({ top: targetPosition, behavior: "smooth" });
        }, 100);
      }
    } else {
      setActiveSection("#home");
    }
  }, []);

  const scrollToContact = () => {
    const targetElement = document.getElementById("contact");
    if (targetElement) {
      const offset = 80;
      const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top: targetPosition, behavior: "smooth" });
      history.pushState(null, "", "#contact");
    }
  };

  const scrollToHome = (e: React.MouseEvent) => {
    e.preventDefault();
    const targetElement = document.getElementById("home");
    if (targetElement) {
      window.scrollTo({ top: 0, behavior: "smooth" });
      history.pushState(null, "", "#home");
    }
  };

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-40 py-4 h-[76px] transition-colors duration-150 ease-out",
          isScrolled 
            ? "glass shadow-soft border-b border-white/10 bg-background/80 backdrop-blur-xl" 
            : "bg-transparent border-transparent shadow-none"
        )}
      >
        <Container className="max-w-[1400px]">
          <div className="flex items-center justify-between">
            
            {/* LEFT: Logo */}
            <a href="/" onClick={scrollToHome} className="group flex items-center h-full">
              <motion.div 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-3 font-heading font-bold text-2xl tracking-tight transition-all duration-300 group-hover:drop-shadow-[0_0_15px_rgba(37,99,235,0.5)]"
              >
                <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-primary-blue to-primary-green text-white shadow-lg">
                  <Zap className="w-5 h-5 fill-white" />
                </div>
                <span>PARSURAM <span className="text-primary-blue">NAIK</span></span>
              </motion.div>
            </a>

            {/* CENTER: Navigation Links (Desktop) */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-2 h-full">
              {navLinks.map((link) => {
                const linkId = link.href === "/" ? "#home" : link.href;
                return (
                  <NavLink 
                    key={link.name} 
                    href={link.href}
                    isActive={activeSection === linkId}
                  >
                    {link.name}
                  </NavLink>
                );
              })}
            </nav>

            {/* RIGHT: Actions */}
            <div className="hidden lg:flex items-center gap-3">
              <SearchButton />
              <ThemeToggle />
              <Button className="rounded-full ml-2" onClick={openConnect}>
                Let&apos;s Connect
              </Button>
            </div>

            {/* Mobile Menu Toggle */}
            <div className="flex lg:hidden items-center gap-3">
              <SearchButton />
              <button
                className="p-2 glass rounded-xl text-foreground hover:bg-white/10 transition-colors"
                onClick={() => setIsMobileMenuOpen(true)}
              >
                <Menu className="h-5 w-5" />
              </button>
            </div>

          </div>
        </Container>
      </header>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <MobileMenu 
            isOpen={isMobileMenuOpen} 
            onClose={() => setIsMobileMenuOpen(false)} 
            navLinks={navLinks} 
          />
        )}
      </AnimatePresence>
    </>
  );
}
