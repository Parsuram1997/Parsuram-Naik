"use client";

import { AppStat } from "@/config/apps";

export function AppStats({ stats }: { stats: AppStat[] }) {
  return (
    <div className="flex flex-wrap items-center gap-4 mt-6">
      {stats.map((stat, idx) => (
        <div key={idx} className="flex flex-col">
          <span className="text-xl font-bold text-foreground">{stat.value}</span>
          <span className="text-[10px] uppercase tracking-wider text-muted-foreground font-semibold">{stat.label}</span>
        </div>
      ))}
    </div>
  );
}
