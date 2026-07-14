"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  isActive?: boolean;
}

export function NavLink({ href, children, className, onClick, isActive }: NavLinkProps) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (href.startsWith("#") || href === "/") {
      e.preventDefault();
      
      const targetId = href === "/" ? "home" : href.substring(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        const offset = 80;
        const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY - offset;
        
        window.scrollTo({
          top: targetPosition,
          behavior: "smooth"
        });

        history.pushState(null, "", href === "/" ? "#home" : href);
      }
      
      if (onClick) onClick();
    } else {
      if (onClick) onClick();
    }
  };

  return (
    <a
      href={href}
      onClick={handleClick}
      className={cn(
        "relative group px-3 py-2 text-sm font-medium transition-colors hover:text-foreground cursor-pointer",
        isActive ? "text-foreground" : "text-muted-foreground",
        className
      )}
    >
      {children}
      {/* Hover underline */}
      <motion.span
        className="absolute bottom-0 left-0 w-full h-0.5 bg-primary-blue origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out rounded-full"
      />
      {/* Active page indicator */}
      {isActive && (
        <motion.span
          layoutId="navbar-active-indicator"
          className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-primary-blue to-primary-green rounded-full shadow-[0_0_8px_rgba(37,99,235,0.8)]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        />
      )}
    </a>
  );
}
