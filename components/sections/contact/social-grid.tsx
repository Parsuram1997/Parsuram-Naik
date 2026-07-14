"use client";

import { motion } from "framer-motion";
import { socialLinks } from "@/config/contact";
import { FaYoutube, FaLinkedin, FaGithub, FaInstagram, FaFacebook, FaTwitter, FaTelegram } from "react-icons/fa";
import { Mail } from "lucide-react";

export function SocialGrid() {
  
  const getIcon = (name: string) => {
    switch (name.toLowerCase()) {
      case "youtube": return <FaYoutube className="w-5 h-5" />;
      case "linkedin": return <FaLinkedin className="w-5 h-5" />;
      case "github": return <FaGithub className="w-5 h-5" />;
      case "instagram": return <FaInstagram className="w-5 h-5" />;
      case "facebook": return <FaFacebook className="w-5 h-5" />;
      case "twitter": 
      case "x": return <FaTwitter className="w-5 h-5" />;
      case "telegram": return <FaTelegram className="w-5 h-5" />;
      case "email": return <Mail className="w-5 h-5" />;
      default: return <Mail className="w-5 h-5" />;
    }
  };

  return (
    <div className="flex flex-wrap items-center justify-center gap-4">
      {socialLinks.map((social, idx) => (
        <motion.a
          key={social.id}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: idx * 0.05, type: "spring", stiffness: 200, damping: 10 }}
          whileHover={{ scale: 1.15, rotate: 5 }}
          whileTap={{ scale: 0.95 }}
          className="relative group w-14 h-14 rounded-full glass bg-white/5 border border-white/10 flex items-center justify-center text-muted-foreground hover:text-white transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,255,170,0.3)] hover:border-primary-green/50"
        >
          {getIcon(social.icon)}
          
          {/* Tooltip */}
          <span className="absolute -top-10 scale-0 group-hover:scale-100 transition-transform origin-bottom px-3 py-1 bg-black/80 border border-white/10 rounded text-xs font-semibold text-white whitespace-nowrap">
            {social.name}
          </span>
        </motion.a>
      ))}
    </div>
  );
}
