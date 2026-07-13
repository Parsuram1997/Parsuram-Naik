import * as React from "react";
import { cn } from "@/lib/utils";

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "secondary" | "outline" | "glass";
}

export function Badge({ className, variant = "default", ...props }: BadgeProps) {
  const variants = {
    default: "bg-primary-blue text-white",
    secondary: "bg-muted text-muted-foreground",
    outline: "border border-primary-blue text-primary-blue",
    glass: "glass text-foreground",
  };

  return (
    <div
      className={cn(
        "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-primary-blue focus:ring-offset-2",
        variants[variant],
        className
      )}
      {...props}
    />
  );
}
