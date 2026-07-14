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

export function TechIcon({ name, className = "" }: { name: string; className?: string }) {
  switch (name.toLowerCase()) {
    case "android": return <SiAndroidstudio className={className} />;
    case "kotlin": return <SiKotlin className={className} />;
    case "java": return <FaJava className={className} />;
    case "firebase": return <SiFirebase className={className} />;
    case "react": return <SiReact className={className} />;
    case "nextjs": return <SiNextdotjs className={className} />;
    case "typescript": return <SiTypescript className={className} />;
    case "javascript": return <SiJavascript className={className} />;
    case "html": return <SiHtml5 className={className} />;
    case "css": return <SiCss className={className} />;
    case "tailwind": return <SiTailwindcss className={className} />;
    case "framer": return <SiFramer className={className} />;
    case "git": return <SiGit className={className} />;
    case "github": return <SiGithub className={className} />;
    case "vscode": return <VscVscode className={className} />;
    case "postman": return <SiPostman className={className} />;
    case "figma": return <SiFigma className={className} />;
    case "chatgpt": return <Bot className={className} />;
    
    // Lucide Icons as fallbacks
    case "database": return <Database className={className} />;
    case "layers": return <Layers className={className} />;
    case "zap": return <Zap className={className} />;
    case "route": return <Route className={className} />;
    case "lock": return <Lock className={className} />;
    case "cloud": return <Cloud className={className} />;
    case "server": return <Server className={className} />;
    case "droplet": return <Droplet className={className} />;
    case "play": return <Play className={className} />;
    case "rocket": return <Rocket className={className} />;
    case "api": return <Workflow className={className} />;
    case "architecture": return <Code2 className={className} />;
    case "gemini": return <Cpu className={className} />; // Placeholder
    case "claude": return <Cpu className={className} />;
    case "copilot": return <Terminal className={className} />;
    case "cursor": return <Terminal className={className} />;
    
    default: return <Code2 className={className} />;
  }
}
