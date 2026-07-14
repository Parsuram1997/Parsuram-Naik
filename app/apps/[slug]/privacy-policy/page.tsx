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
    title: `Privacy Policy | ${app.name} | Parsuram Naik`,
    description: `Read the privacy policy for ${app.name}. Understand how we collect, use, and protect your data.`,
    alternates: {
      canonical: `https://parsuramnaik.in/apps/${app.slug}/privacy-policy`,
    },
  };
}

export default async function PrivacyPolicyPage({ params }: AppParams) {
  const { slug } = await params;
  const app = getAppBySlug(slug);

  if (!app || !app.privacyPolicy) {
    notFound();
  }

  return (
    <main className="min-h-screen">
      <LegalPageClient app={app} legalData={app.privacyPolicy} pageTitle="Privacy Policy" />
    </main>
  );
}
