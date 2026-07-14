import { AppData } from "@/types/app";
import { cashflowai } from "./cashflowai";

// Registry of all apps
export const apps: AppData[] = [
  cashflowai
];

export function getAppBySlug(slug: string): AppData | undefined {
  return apps.find((app) => app.slug === slug);
}
