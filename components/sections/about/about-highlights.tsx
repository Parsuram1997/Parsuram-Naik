"use client";

import { motion } from "framer-motion";
import { Smartphone, Layout, GraduationCap, LucideIcon } from "lucide-react";
import { FaYoutube } from "react-icons/fa";
import { IconType } from "react-icons";

// Map string icon names from config to actual Lucide components
const IconMap: Record<string, LucideIcon | IconType> = {
  "smartphone": Smartphone,
  "layout": Layout,
  "graduation-cap": GraduationCap,
  "youtube": FaYoutube,
};

const ColorMap: Record<string, string> = {
  "blue": "text-blue-500 bg-blue-500/10 border-blue-500/20 group-hover:border-blue-500/40 group-hover:shadow-[0_0_20px_rgba(59,130,246,0.2)]",
  "green": "text-emerald-500 bg-emerald-500/10 border-emerald-500/20 group-hover:border-emerald-500/40 group-hover:shadow-[0_0_20px_rgba(16,185,129,0.2)]",
  "purple": "text-purple-500 bg-purple-500/10 border-purple-500/20 group-hover:border-purple-500/40 group-hover:shadow-[0_0_20px_rgba(168,85,247,0.2)]",
  "red": "text-red-500 bg-red-500/10 border-red-500/20 group-hover:border-red-500/40 group-hover:shadow-[0_0_20px_rgba(239,68,68,0.2)]",
};

interface HighlightItem {
  id: string;
  title: string;
  description: string;
  icon: string;
  color: string;
}

export function AboutHighlights({ data }: { data: HighlightItem[] }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-16">
      {data.map((item, index) => {
        const Icon = IconMap[item.icon] || Layout;
        const colorClasses = ColorMap[item.color] || ColorMap["blue"];

        return (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={`group p-5 rounded-2xl glass border transition-all duration-300 hover:-translate-y-1 ${colorClasses.split(' ').filter(c => c.includes('hover')).join(' ')}`}
          >
            <div className={`w-12 h-12 rounded-xl mb-4 flex items-center justify-center transition-transform group-hover:scale-110 ${colorClasses.split(' ').filter(c => !c.includes('hover')).join(' ')}`}>
              <Icon className="w-6 h-6" />
            </div>
            <h4 className="font-heading font-bold text-lg text-foreground mb-1">{item.title}</h4>
            <p className="text-sm text-muted-foreground">{item.description}</p>
          </motion.div>
        );
      })}
    </div>
  );
}
