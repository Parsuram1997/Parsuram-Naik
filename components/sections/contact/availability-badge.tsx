"use client";

import { motion } from "framer-motion";
import { contactInfo } from "@/config/contact";

export function AvailabilityBadge() {
  const isAvailable = contactInfo.availability === "Available";

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border backdrop-blur-md font-medium text-sm transition-colors ${
        isAvailable 
          ? "bg-green-500/10 border-green-500/30 text-green-400" 
          : "bg-yellow-500/10 border-yellow-500/30 text-yellow-400"
      }`}
    >
      <span className="relative flex h-3 w-3">
        <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${
          isAvailable ? "bg-green-400" : "bg-yellow-400"
        }`} />
        <span className={`relative inline-flex rounded-full h-3 w-3 ${
          isAvailable ? "bg-green-500" : "bg-yellow-500"
        }`} />
      </span>
      {isAvailable ? "Available for Collaboration" : "Currently Busy"}
    </motion.div>
  );
}
