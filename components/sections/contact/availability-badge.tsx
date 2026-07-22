"use client";

import { motion } from "framer-motion";
import { contactInfo } from "@/config/contact";
import { Sparkles } from "lucide-react";

export function AvailabilityBadge() {
  const isAvailable = contactInfo.availability === "Available";

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      className={`inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full border backdrop-blur-xl font-bold text-xs sm:text-sm transition-all shadow-lg hover:scale-105 ${
        isAvailable 
          ? "bg-gradient-to-r from-emerald-500/15 via-teal-500/10 to-transparent border-emerald-500/30 text-emerald-400 shadow-emerald-500/10" 
          : "bg-gradient-to-r from-amber-500/15 via-orange-500/10 to-transparent border-amber-500/30 text-amber-400 shadow-amber-500/10"
      }`}
    >
      <span className="relative flex h-3.5 w-3.5">
        <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${
          isAvailable ? "bg-emerald-400" : "bg-amber-400"
        }`} />
        <span className={`relative inline-flex rounded-full h-3.5 w-3.5 ${
          isAvailable ? "bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.8)]" : "bg-amber-400"
        }`} />
      </span>
      <span className="tracking-wide">
        {isAvailable ? "Open for Collaboration & Projects" : "Currently Booked"}
      </span>
      <Sparkles className="w-4 h-4 ml-1 opacity-80" />
    </motion.div>
  );
}
