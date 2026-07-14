"use client";

import { motion } from "framer-motion";
import { 
  SiAndroidstudio, 
  SiKotlin, 
  SiFirebase, 
  SiReact, 
  SiNextdotjs,
  SiFigma,
  SiGoogleplay
} from "react-icons/si";
import { FaJava, FaGithub } from "react-icons/fa";
import { VscVscode } from "react-icons/vsc";

interface TechItem {
  name: string;
  icon: string;
}

const IconMap: Record<string, React.ElementType> = {
  android: SiAndroidstudio,
  kotlin: SiKotlin,
  java: FaJava,
  firebase: SiFirebase,
  react: SiReact,
  nextjs: SiNextdotjs,
  github: FaGithub,
  vscode: VscVscode,
  figma: SiFigma,
  playstore: SiGoogleplay,
};

export function AboutTechStack({ data }: { data: TechItem[] }) {
  return (
    <div className="mb-16">
      <h4 className="text-xl font-heading font-bold mb-6 text-foreground">Tech Stack</h4>
      <div className="flex flex-wrap gap-4">
        {data.map((tech, idx) => {
          const Icon = IconMap[tech.icon] || FaGithub;
          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              whileHover={{ y: -5, scale: 1.05 }}
              className="glass px-4 py-3 rounded-xl border border-white/10 flex items-center gap-3 cursor-default hover:border-primary-blue/30 transition-colors shadow-soft hover:shadow-elevation"
            >
              <Icon className="text-2xl text-muted-foreground group-hover:text-foreground transition-colors" />
              <span className="text-sm font-semibold text-foreground/90">{tech.name}</span>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
