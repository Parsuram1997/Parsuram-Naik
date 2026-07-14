"use client";

import { motion } from "framer-motion";
import { Mail, MessageCircle, Phone } from "lucide-react";
import { FaWhatsapp, FaLinkedinIn, FaYoutube, FaGithub } from "react-icons/fa6";

export function QuickActions() {
  const actions = [
    { name: "Email Me", icon: <Mail className="w-5 h-5" />, href: "mailto:contact@parsutech.com", color: "text-primary-blue", bg: "bg-primary-blue/10" },
    { name: "WhatsApp", icon: <FaWhatsapp className="w-5 h-5" />, href: "https://wa.me/1234567890", color: "text-green-500", bg: "bg-green-500/10" },
    { name: "Schedule a Call", icon: <Phone className="w-5 h-5" />, href: "#", color: "text-purple-500", bg: "bg-purple-500/10", badge: "Coming Soon" },
    { name: "Visit LinkedIn", icon: <FaLinkedinIn className="w-5 h-5" />, href: "https://linkedin.com", color: "text-blue-500", bg: "bg-blue-500/10" },
    { name: "YouTube", icon: <FaYoutube className="w-5 h-5" />, href: "https://youtube.com", color: "text-red-500", bg: "bg-red-500/10" },
    { name: "GitHub", icon: <FaGithub className="w-5 h-5" />, href: "https://github.com", color: "text-white", bg: "bg-white/10" },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
      {actions.map((action, i) => (
        <motion.a
          key={action.name}
          href={action.href}
          target={action.href.startsWith("http") ? "_blank" : undefined}
          rel={action.href.startsWith("http") ? "noopener noreferrer" : undefined}
          whileHover={action.badge ? {} : { scale: 1.02 }}
          whileTap={action.badge ? {} : { scale: 0.98 }}
          className={`relative flex flex-col items-center justify-center p-4 rounded-xl border border-white/5 bg-white/5 hover:bg-white/10 transition-colors ${
            action.badge ? "opacity-50 cursor-not-allowed" : "cursor-pointer"
          }`}
        >
          <div className={`w-10 h-10 rounded-full flex items-center justify-center mb-2 ${action.bg} ${action.color}`}>
            {action.icon}
          </div>
          <span className="text-xs font-medium text-center text-white">{action.name}</span>
          {action.badge && (
            <span className="absolute top-2 right-2 text-[8px] uppercase tracking-wider px-1.5 py-0.5 rounded bg-black/50 text-white border border-white/10">
              {action.badge}
            </span>
          )}
        </motion.a>
      ))}
    </div>
  );
}
