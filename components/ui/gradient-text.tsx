import * as React from "react";
import { cn } from "@/lib/utils";

export interface GradientTextProps extends React.HTMLAttributes<HTMLSpanElement> {
  as?: React.ElementType;
}

export const GradientText = React.forwardRef<HTMLSpanElement, GradientTextProps>(
  ({ className, as: Component = "span", ...props }, ref) => {
    return (
      <Component
        ref={ref}
        className={cn(
          "bg-gradient-to-r from-primary-blue via-primary-green to-primary-blue bg-[length:200%_auto] animate-gradient text-transparent bg-clip-text",
          className
        )}
        {...props}
      />
    );
  }
);
GradientText.displayName = "GradientText";
