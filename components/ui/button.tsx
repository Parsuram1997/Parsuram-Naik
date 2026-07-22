import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

// Using standard classes, but wait I don't have CVA installed. I'll just use simple string maps or install it.
// I'll rewrite this to use simple clsx logic without CVA to avoid needing another install, or just install CVA.
// Wait, I can just use a simple function since it's cleaner.

const buttonVariants = {
  variant: {
    default: "bg-gradient-to-r from-primary-blue to-[#0e9668] text-white shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(37,99,235,0.6)] active:scale-95 border border-white/10",
    outline: "border border-white/20 glass text-foreground hover:bg-foreground hover:text-background hover:-translate-y-1 hover:shadow-glow active:scale-95",
    ghost: "hover:bg-primary-blue/10 text-foreground hover:-translate-y-1 active:scale-95",
    glass: "glass hover:bg-white/10 dark:hover:bg-white/5 hover:-translate-y-1 hover:shadow-glow active:scale-95",
  },
  size: {
    default: "h-11 px-6 py-2",
    sm: "h-9 rounded-md px-4",
    lg: "h-14 rounded-lg px-8 text-lg",
    icon: "h-11 w-11",
  },
};

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: keyof typeof buttonVariants.variant;
  size?: keyof typeof buttonVariants.size;
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(
          "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-semibold ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-blue focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
          buttonVariants.variant[variant],
          buttonVariants.size[size],
          className
        )}
        ref={ref as any}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button };
