import * as React from "react";
import { cn } from "@/lib/utils";
import { GlassCard } from "./glass-card";

export interface StatCardProps extends React.HTMLAttributes<HTMLDivElement> {
  icon?: React.ReactNode;
  value: string;
  label: string;
  description?: string;
}

export function StatCard({ icon, value, label, description, className, ...props }: StatCardProps) {
  return (
    <GlassCard className={cn("flex items-center gap-4 p-6", className)} {...props}>
      {icon && (
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary-blue/10 text-primary-blue">
          {icon}
        </div>
      )}
      <div>
        <h4 className="font-heading text-3xl font-bold tracking-tight text-foreground">{value}</h4>
        <p className="font-medium text-foreground">{label}</p>
        {description && <p className="text-sm text-muted-foreground">{description}</p>}
      </div>
    </GlassCard>
  );
}
