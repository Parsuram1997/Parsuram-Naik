"use client";

import { SearchItemType } from "./searchData";
import { Smartphone, Globe, GraduationCap, FileText, LayoutTemplate, HelpCircle, Mail, User } from "lucide-react";
import { FaYoutube } from "react-icons/fa6";
import { cn } from "@/lib/utils";

interface SearchItemProps {
  item: SearchItemType;
  isSelected: boolean;
  onSelect: () => void;
  query: string;
}

const getIcon = (item: SearchItemType) => {
  switch (item.category) {
    case "App": return <Smartphone className="w-5 h-5 text-primary-blue" />;
    case "Website": return <Globe className="w-5 h-5 text-primary-green" />;
    case "Course": return <GraduationCap className="w-5 h-5 text-yellow-500" />;
    case "Blog": return <FileText className="w-5 h-5 text-pink-500" />;
    case "FAQ": return <HelpCircle className="w-5 h-5 text-purple-500" />;
    case "Section":
      if (item.id === "youtube") return <FaYoutube className="w-5 h-5 text-red-500" />;
      if (item.id === "contact") return <Mail className="w-5 h-5 text-primary-green" />;
      if (item.id === "about") return <User className="w-5 h-5 text-blue-400" />;
      return <LayoutTemplate className="w-5 h-5 text-muted-foreground" />;
    default: return <LayoutTemplate className="w-5 h-5 text-muted-foreground" />;
  }
};

const HighlightText = ({ text, highlight }: { text: string; highlight: string }) => {
  if (!highlight.trim()) return <>{text}</>;
  
  const regex = new RegExp(`(${highlight})`, "gi");
  const parts = text.split(regex);
  
  return (
    <>
      {parts.map((part, i) => 
        regex.test(part) ? (
          <span key={i} className="text-primary-green font-bold">{part}</span>
        ) : (
          <span key={i}>{part}</span>
        )
      )}
    </>
  );
};

export function SearchItem({ item, isSelected, onSelect, query }: SearchItemProps) {
  return (
    <div
      onClick={onSelect}
      className={cn(
        "flex items-start gap-4 p-4 rounded-xl cursor-pointer transition-all duration-200 border",
        isSelected 
          ? "bg-white/10 border-white/20 shadow-[0_0_15px_rgba(255,255,255,0.05)]" 
          : "bg-transparent border-transparent hover:bg-white/5"
      )}
    >
      <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-black/40 border border-white/10 shrink-0">
        {getIcon(item)}
      </div>
      <div className="flex flex-col min-w-0">
        <div className="flex items-center gap-2 mb-1">
          <span className="font-semibold text-white truncate">
            <HighlightText text={item.title} highlight={query} />
          </span>
          <span className="text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-full bg-white/10 text-muted-foreground shrink-0 border border-white/5">
            {item.category}
          </span>
        </div>
        <p className="text-sm text-muted-foreground truncate">
          <HighlightText text={item.description} highlight={query} />
        </p>
      </div>
    </div>
  );
}
