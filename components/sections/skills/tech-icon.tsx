"use client";

import {
  SiAndroidstudio,
  SiKotlin,
  SiFirebase,
  SiReact,
  SiNextdotjs,
  SiFigma,
  SiTypescript,
  SiJavascript,
  SiHtml5,
  SiCss,
  SiTailwindcss,
  SiFramer,
  SiGit,
  SiGithub,
  SiPostman
} from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { VscVscode } from "react-icons/vsc";
import { 
  Database, 
  Layers, 
  Zap, 
  Route, 
  Lock, 
  Cloud, 
  Server, 
  Droplet,
  Play,
  Rocket,
  Code2,
  Terminal,
  Cpu,
  Workflow,
  Bot
} from "lucide-react";

const BrandColorMap: Record<string, string> = {
  android: "text-[#3DDC84]",
  kotlin: "text-[#A97BFF]",
  java: "text-[#F89820]",
  firebase: "text-[#FFCA28]",
  react: "text-[#61DAFB]",
  nextjs: "text-foreground",
  typescript: "text-[#3178C6]",
  javascript: "text-[#F7DF1E]",
  html: "text-[#E34F26]",
  css: "text-[#1572B6]",
  tailwind: "text-[#38BDF8]",
  framer: "text-[#0055FF]",
  git: "text-[#F05032]",
  github: "text-foreground",
  vscode: "text-[#007ACC]",
  postman: "text-[#FF6C37]",
  figma: "text-[#F24E1E]",
  chatgpt: "text-[#10A37F]",
  playstore: "text-[#00C853]"
};

export function TechIcon({ name, className = "" }: { name: string; className?: string }) {
  const brandClass = BrandColorMap[name.toLowerCase()] || "";
  const combinedClass = className ? `${className} ${brandClass}` : brandClass;

  switch (name.toLowerCase()) {
    case "android": return <SiAndroidstudio className={combinedClass} />;
    case "kotlin": return <SiKotlin className={combinedClass} />;
    case "java": return <FaJava className={combinedClass} />;
    case "firebase": return <SiFirebase className={combinedClass} />;
    case "react": return <SiReact className={combinedClass} />;
    case "nextjs": return <SiNextdotjs className={combinedClass} />;
    case "typescript": return <SiTypescript className={combinedClass} />;
    case "javascript": return <SiJavascript className={combinedClass} />;
    case "html": return <SiHtml5 className={combinedClass} />;
    case "css": return <SiCss className={combinedClass} />;
    case "tailwind": return <SiTailwindcss className={combinedClass} />;
    case "framer": return <SiFramer className={combinedClass} />;
    case "git": return <SiGit className={combinedClass} />;
    case "github": return <SiGithub className={combinedClass} />;
    case "vscode": return <VscVscode className={combinedClass} />;
    case "postman": return <SiPostman className={combinedClass} />;
    case "figma": return <SiFigma className={combinedClass} />;
    case "chatgpt": return <Bot className={combinedClass} />;
    
    // Lucide Icons as fallbacks
    case "database": return <Database className={combinedClass} />;
    case "layers": return <Layers className={combinedClass} />;
    case "zap": return <Zap className={combinedClass} />;
    case "route": return <Route className={combinedClass} />;
    case "lock": return <Lock className={combinedClass} />;
    case "cloud": return <Cloud className={combinedClass} />;
    case "server": return <Server className={combinedClass} />;
    case "droplet": return <Droplet className={combinedClass} />;
    case "play": return <Play className={combinedClass} />;
    case "rocket": return <Rocket className={combinedClass} />;
    case "api": return <Workflow className={combinedClass} />;
    case "architecture": return <Code2 className={combinedClass} />;
    case "gemini": return <Cpu className={combinedClass} />;
    case "claude": return <Cpu className={combinedClass} />;
    case "copilot": return <Terminal className={combinedClass} />;
    case "cursor": return <Terminal className={combinedClass} />;
    
    default: return <Code2 className={combinedClass} />;
  }
}
