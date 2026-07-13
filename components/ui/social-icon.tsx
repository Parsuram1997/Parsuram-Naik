import * as React from "react";
import { cn } from "@/lib/utils";

export interface SocialIconProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  icon: React.ReactNode;
}

export function SocialIcon({ icon, className, ...props }: SocialIconProps) {
  return (
    <a
      className={cn(
        "glass flex h-12 w-12 items-center justify-center rounded-2xl text-muted-foreground transition-all duration-300 hover:-translate-y-1 hover:scale-110 hover:rotate-6 hover:text-foreground hover:shadow-glow",
        className
      )}
      target="_blank"
      rel="noopener noreferrer"
      {...props}
    >
      {icon}
    </a>
  );
}
