import { getAppBySlug } from "@/lib/data/apps";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { LegalPageClient } from "@/components/apps/LegalPageClient";
import { AppLegal } from "@/types/app";

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
    title: `Support | ${app.name} | Parsuram Naik`,
    description: `Get support for ${app.name}.`,
    alternates: {
      canonical: `https://parsuramnaik.in/apps/${app.slug}/support`,
    },
  };
}

export default async function SupportPage({ params }: AppParams) {
  const { slug } = await params;
  const app = getAppBySlug(slug);

  if (!app) {
    notFound();
  }

  const supportLegalData: AppLegal = {
    lastUpdated: "Always Available",
    sections: [
      { 
        title: "Contact Support", 
        content: [
          `If you are experiencing any issues with <strong>${app.name}</strong>, our support team is here to help.`,
          `You can reach us directly at: <br/><br/><a href="mailto:${app.supportEmail}" class="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-primary-blue/10 text-primary-blue hover:bg-primary-blue/20 transition-colors font-medium text-lg">✉️ ${app.supportEmail}</a><br/><br/>`,
          "We typically respond within 24-48 hours. Please include your device model and app version for faster resolution."
        ] 
      },
      {
        title: "Frequently Asked Questions",
        content: [
          `Before contacting support, you might find your answer in our <a href="/apps/${app.slug}/faq" class="text-primary-blue hover:underline font-medium">FAQ section</a>.`,
          "We regularly update our FAQ with the most common issues and feature requests."
        ]
      },
      {
        title: "Report a Bug",
        content: [
          "Found a bug? We appreciate your help in making our app better.",
          `Please email <a href="mailto:${app.supportEmail}?subject=Bug Report: ${app.name}" class="text-primary-blue hover:underline">${app.supportEmail}</a> with the subject line <strong>\"Bug Report: ${app.name}\"</strong>.`,
          "Include steps to reproduce the bug and screenshots if possible."
        ]
      }
    ]
  };

  return (
    <main className="min-h-screen">
      <LegalPageClient app={app} legalData={supportLegalData} pageTitle="Support" />
    </main>
  );
}
