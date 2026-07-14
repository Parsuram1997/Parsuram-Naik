"use client";

import { motion } from "framer-motion";
import { X } from "lucide-react";
import { NavLink } from "@/components/ui/nav-link";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { SocialIcon } from "@/components/ui/social-icon";
import { Button } from "@/components/ui/button";
import { FaYoutube, FaInstagram, FaFacebookF, FaGithub, FaLinkedinIn } from "react-icons/fa";
import { useEffect } from "react";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  navLinks: { name: string; href: string }[];
}

export function MobileMenu({ isOpen, onClose, navLinks }: MobileMenuProps) {
  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const scrollToContact = () => {
    onClose();
    // Simplified scrolling for now
    window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
  };

  return (
    <>
      {/* Backdrop */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          onClick={onClose}
          className="fixed inset-0 z-40 bg-background/80 backdrop-blur-sm lg:hidden"
        />
      )}

      {/* Drawer */}
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: isOpen ? 0 : "100%" }}
        transition={{ type: "spring", damping: 25, stiffness: 200 }}
        className="fixed top-0 right-0 z-50 w-[80vw] sm:w-[350px] h-full h-[100dvh] bg-background border-l border-white/10 shadow-elevation overflow-y-auto lg:hidden"
      >
        <div className="p-6 flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <span className="font-heading font-bold text-xl tracking-tight">
              PARSU <span className="text-primary-blue">TECH</span>
            </span>
            <button
              onClick={onClose}
              className="p-2 rounded-full glass hover:bg-white/10 transition-colors"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Links */}
          <div className="flex flex-col gap-4 mb-8">
            {navLinks.map((link, index) => {
              const linkId = link.href === "/" ? "#home" : link.href;
              return (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: isOpen ? 1 : 0, x: isOpen ? 0 : 20 }}
                  transition={{ duration: 0.3, delay: 0.1 + index * 0.05 }}
                >
                  <NavLink
                    href={link.href}
                    onClick={onClose}
                    className="block text-xl font-semibold py-2"
                  >
                    {link.name}
                  </NavLink>
                </motion.div>
              );
            })}
          </div>

          <div className="mt-auto pt-8 border-t border-white/10">
            <div className="flex items-center justify-between mb-8">
              <span className="text-sm font-medium text-muted-foreground">Theme</span>
              <ThemeToggle />
            </div>

            <div className="flex flex-wrap gap-3 mb-8">
              <SocialIcon href="https://youtube.com" icon={<FaYoutube className="h-4 w-4" />} className="w-10 h-10 rounded-xl" />
              <SocialIcon href="https://instagram.com" icon={<FaInstagram className="h-4 w-4" />} className="w-10 h-10 rounded-xl" />
              <SocialIcon href="https://github.com" icon={<FaGithub className="h-4 w-4" />} className="w-10 h-10 rounded-xl" />
              <SocialIcon href="https://linkedin.com" icon={<FaLinkedinIn className="h-4 w-4" />} className="w-10 h-10 rounded-xl" />
            </div>

            <Button className="w-full rounded-full" onClick={scrollToContact}>
              Let&apos;s Connect
            </Button>
          </div>
        </div>
      </motion.div>
    </>
  );
}
