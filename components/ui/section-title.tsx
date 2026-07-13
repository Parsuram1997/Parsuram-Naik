import * as React from "react";
import { cn } from "@/lib/utils";

export interface SectionTitleProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  subtitle?: string;
  centered?: boolean;
}

export function SectionTitle({ title, subtitle, centered = false, className, ...props }: SectionTitleProps) {
  return (
    <div className={cn("flex flex-col gap-2 mb-10", centered && "items-center text-center", className)} {...props}>
      <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg md:text-xl text-muted-foreground max-w-[700px]">
          {subtitle}
        </p>
      )}
    </div>
  );
}
