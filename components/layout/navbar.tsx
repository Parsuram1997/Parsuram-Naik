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

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 20);
  });

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
      { rootMargin: "-20% 0px -80% 0px" }
    );

    const sections = navLinks.map(link => link.href).filter(href => href.startsWith("#"));
    sections.forEach((href) => {
      const element = document.querySelector(href);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToContact = () => {
    // Simplified scrolling for now
    window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
  };

  return (
    <>
      <motion.header
        className={cn(
          "fixed top-0 left-0 right-0 z-40 transition-all duration-300",
          isScrolled 
            ? "py-3 h-[68px] glass shadow-soft border-b border-white/10 bg-background/60 backdrop-blur-xl" 
            : "py-5 h-[80px] bg-transparent"
        )}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <Container className="max-w-[1400px]">
          <div className="flex items-center justify-between">
            
            {/* LEFT: Logo */}
            <Link href="/" className="group flex items-center h-full">
              <motion.div 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-3 font-heading font-bold text-2xl tracking-tight transition-all duration-300 group-hover:drop-shadow-[0_0_15px_rgba(37,99,235,0.5)]"
              >
                <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-primary-blue to-primary-green text-white shadow-lg">
                  <Zap className="w-5 h-5 fill-white" />
                </div>
                <span>PARSU <span className="text-primary-blue">TECH</span></span>
              </motion.div>
            </Link>

            {/* CENTER: Navigation Links (Desktop) */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-2 h-full">
              {navLinks.map((link) => (
                <NavLink 
                  key={link.name} 
                  href={link.href}
                  // Override isActive logic if we have an activeSection, else default to NavLink's path matching
                  className={cn(activeSection === link.href && "text-foreground")}
                >
                  {link.name}
                </NavLink>
              ))}
            </nav>

            {/* RIGHT: Actions */}
            <div className="hidden lg:flex items-center gap-3">
              <SearchButton />
              <ThemeToggle />
              <Button className="rounded-full ml-2" onClick={scrollToContact}>
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
      </motion.header>

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
