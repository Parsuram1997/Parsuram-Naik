import { getAppBySlug } from "@/lib/data/apps";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { Container } from "@/components/ui/container";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";

type AppParams = {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({ params }: AppParams): Promise<Metadata> {
  const { slug } = await params;
  const app = getAppBySlug(slug);
  
  if (!app) {
    return {
      title: "Not Found",
    };
  }

  return {
    title: `Privacy Policy | ${app.name} | Parsuram Naik`,
    description: `Privacy Policy for ${app.name} developed by ${app.developer}.`,
    openGraph: {
      title: `${app.name} - Privacy Policy`,
      description: `Privacy Policy for ${app.name} developed by ${app.developer}.`,
    },
  };
}

import { PrivacyPolicyClient } from "./privacy-policy-client";

export default async function PrivacyPolicyPage({ params }: AppParams) {
  const { slug } = await params;
  const app = getAppBySlug(slug);

  if (!app || !app.privacyPolicy) {
    notFound();
  }

  return (
    <main className="min-h-screen">
      <PrivacyPolicyClient app={app} />
    </main>
  );
}
