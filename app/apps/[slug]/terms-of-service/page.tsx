import { getAppBySlug } from "@/lib/data/apps";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { LegalPageClient } from "@/components/apps/LegalPageClient";

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
    title: `Terms of Service | ${app.name} | Parsuram Naik`,
    description: `Read the terms of service for ${app.name}.`,
    alternates: {
      canonical: `https://parsuramnaik.in/apps/${app.slug}/terms-of-service`,
    },
  };
}

export default async function TermsOfServicePage({ params }: AppParams) {
  const { slug } = await params;
  const app = getAppBySlug(slug);

  if (!app || !app.terms) {
    notFound();
  }

  return (
    <main className="min-h-screen">
      <LegalPageClient app={app} legalData={app.terms} pageTitle="Terms of Service" />
    </main>
  );
}
