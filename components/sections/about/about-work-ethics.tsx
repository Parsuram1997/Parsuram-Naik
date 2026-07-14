"use client";

import { motion } from "framer-motion";
import { Lightbulb, Award, Zap, BookOpen, Repeat, Users, LucideIcon } from "lucide-react";

interface EthicsItem {
  title: string;
  icon: string;
}

const IconMap: Record<string, LucideIcon> = {
  lightbulb: Lightbulb,
  award: Award,
  zap: Zap,
  "book-open": BookOpen,
  repeat: Repeat,
  users: Users,
};

export function AboutWorkEthics({ data }: { data: EthicsItem[] }) {
  return (
    <div className="mb-16">
      <h4 className="text-xl font-heading font-bold mb-6 text-foreground">Work Ethics</h4>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {data.map((ethic, idx) => {
          const Icon = IconMap[ethic.icon] || Lightbulb;
          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="glass px-5 py-4 rounded-xl border border-white/10 flex items-center gap-4 hover:border-primary-green/30 hover:shadow-soft transition-all"
            >
              <div className="p-2 rounded-lg bg-white/5 border border-white/10">
                <Icon className="w-5 h-5 text-primary-green" />
              </div>
              <span className="font-semibold text-foreground/90">{ethic.title}</span>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
