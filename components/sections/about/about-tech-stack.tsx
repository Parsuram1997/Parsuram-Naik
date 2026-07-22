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

const BrandColors: Record<string, string> = {
  android: "text-[#3DDC84]",     // Android Studio Green
  kotlin: "text-[#A97BFF]",      // Kotlin Purple/Indigo
  java: "text-[#F89820]",        // Java Orange
  firebase: "text-[#FFCA28]",    // Firebase Amber/Yellow
  react: "text-[#61DAFB]",       // React Cyan
  nextjs: "text-foreground",     // Next.js White
  github: "text-foreground",     // GitHub White
  vscode: "text-[#007ACC]",      // VS Code Blue
  figma: "text-[#F24E1E]",       // Figma Coral/Red
  playstore: "text-[#00C853]",   // Google Play Green
};

export function AboutTechStack({ data }: { data: TechItem[] }) {
  return (
    <div className="mb-16">
      <h4 className="text-xl font-heading font-bold mb-6 text-foreground">Tech Stack</h4>
      <div className="flex flex-wrap gap-3 sm:gap-4">
        {data.map((tech, idx) => {
          const Icon = IconMap[tech.icon] || FaGithub;
          const colorClass = BrandColors[tech.icon] || "text-primary-blue";

          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              whileHover={{ y: -4, scale: 1.05 }}
              className="group glass px-4 py-3 rounded-xl border border-white/10 dark:border-white/10 border-slate-300 flex items-center gap-3 cursor-default hover:border-white/30 transition-all shadow-sm hover:shadow-lg bg-black/30 dark:bg-black/30 bg-white"
            >
              <Icon className={`text-2xl shrink-0 transition-transform duration-300 group-hover:scale-115 ${colorClass}`} />
              <span className="text-sm font-bold text-foreground tracking-wide">{tech.name}</span>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
