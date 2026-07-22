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
    const isHomePage = window.location.pathname === "/";
    if (isHomePage) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
      window.history.pushState(null, "", "/");
    } else {
      // Let standard Next.js Link navigate to "/"
    }
  };

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-40 py-4 h-[76px] transition-colors duration-150 ease-out overflow-hidden",
          isScrolled 
            ? "glass shadow-soft border-b dark:border-white/10 border-slate-200 bg-background/80 backdrop-blur-xl" 
            : "bg-transparent border-transparent shadow-none"
        )}
      >
        <Container>
          <div className="flex items-center justify-between w-full gap-2 overflow-hidden">
            
            {/* LEFT: Logo */}
            <Link href="/" onClick={scrollToHome} className="group flex items-center h-full min-w-0 shrink">
              <motion.div 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 font-heading font-bold text-lg sm:text-2xl tracking-tight transition-all duration-300 group-hover:drop-shadow-[0_0_15px_rgba(37,99,235,0.5)] min-w-0"
              >
                <div className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-br from-primary-blue to-primary-green p-0.5 shadow-lg overflow-hidden border border-white/20 shrink-0">
                  <img src="/parsuram.png" alt="Parsuram Naik" className="w-full h-full object-cover object-top rounded-[10px]" />
                </div>
                <span className="truncate">PARSURAM <span className="text-primary-blue">NAIK</span></span>
              </motion.div>
            </Link>

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
            <div className="flex lg:hidden items-center gap-2 shrink-0">
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
