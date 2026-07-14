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
    title: `Delete Account | ${app.name} | Parsuram Naik`,
    description: `Request account deletion for ${app.name}.`,
    alternates: {
      canonical: `https://parsuramnaik.in/apps/${app.slug}/delete-account`,
    },
  };
}

export default async function DeleteAccountPage({ params }: AppParams) {
  const { slug } = await params;
  const app = getAppBySlug(slug);

  if (!app || !app.deleteAccount) {
    notFound();
  }

  const deleteAccountLegalData: AppLegal = {
    lastUpdated: new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }),
    sections: [
      { 
        title: "How it Works", 
        content: [
          "Follow these steps to permanently delete your account:",
          `<ul class='list-disc pl-5 mt-2 space-y-1'>${app.deleteAccount.howItWorks.map(item => `<li>${item}</li>`).join('')}</ul>`,
          `You can also request deletion directly by sending an email to <a href="mailto:${app.supportEmail}?subject=Account Deletion Request" class="text-primary-blue hover:underline">${app.supportEmail}</a> with the subject "Account Deletion Request".`
        ] 
      },
      { 
        title: "Data Deleted", 
        content: [
          "When your account is deleted, the following information is permanently removed:",
          `<ul class='list-disc pl-5 mt-2 space-y-1 text-red-400'>${app.deleteAccount.dataDeleted.map(item => `<li>${item}</li>`).join('')}</ul>`
        ] 
      },
      { 
        title: "Data Retained", 
        content: [
          "For legal and operational reasons, the following anonymized data may be retained:",
          `<ul class='list-disc pl-5 mt-2 space-y-1'>${app.deleteAccount.dataRetained.map(item => `<li>${item}</li>`).join('')}</ul>`
        ] 
      },
    ]
  };

  return (
    <main className="min-h-screen">
      <LegalPageClient app={app} legalData={deleteAccountLegalData} pageTitle="Delete Account" />
    </main>
  );
}
