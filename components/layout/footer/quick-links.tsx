"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface QuickLinksProps {
  title: string;
  links: { name: string; href: string }[];
}

export function QuickLinks({ title, links }: QuickLinksProps) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
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
    }
  };

  return (
    <div className="flex flex-col">
      <h3 className="text-lg font-bold text-white mb-6 font-heading">{title}</h3>
      <ul className="flex flex-col gap-3">
        {links.map((link, index) => (
          <motion.li 
            key={link.name}
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            <a 
              href={link.href}
              onClick={(e) => handleClick(e, link.href)}
              className="text-muted-foreground hover:text-white transition-colors group flex items-center text-sm sm:text-base cursor-pointer"
            >
              <span className="w-0 overflow-hidden group-hover:w-4 transition-all duration-300 ease-out flex items-center">
                <ArrowRight className="h-3 w-3 text-primary-green" />
              </span>
              {link.name}
            </a>
          </motion.li>
        ))}
      </ul>
    </div>
  );
}
