import { getAppBySlug } from "@/lib/data/apps";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { Container } from "@/components/ui/container";
import Link from "next/link";
import { ChevronLeft, Trash2, Mail, Info, ShieldAlert } from "lucide-react";

type AppParams = {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({ params }: AppParams): Promise<Metadata> {
  const { slug } = await params;
  const app = getAppBySlug(slug);
  if (!app) return { title: "Not Found" };
  return {
    title: `Delete Account | ${app.name} | Parsuram Naik`,
    description: `Information about deleting your account in ${app.name}.`,
  };
}

export default async function DeleteAccountPage({ params }: AppParams) {
  const { slug } = await params;
  const app = getAppBySlug(slug);

  if (!app || !app.deleteAccount) {
    notFound();
  }

  return (
    <main className="min-h-screen pt-32 pb-24">
      <Container className="max-w-4xl">
        <Link href={`/apps/${app.slug}`} className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-white transition-colors mb-8">
          <ChevronLeft className="w-4 h-4 mr-1" />
          Back to {app.name}
        </Link>
        
        <div className="bg-red-500/5 border border-red-500/10 rounded-3xl p-8 md:p-12 glass">
          <div className="flex items-center gap-4 mb-8 border-b border-red-500/10 pb-8">
            <div className="w-16 h-16 rounded-2xl bg-red-500/10 flex items-center justify-center text-red-500 shrink-0">
              <Trash2 className="w-8 h-8" />
            </div>
            <div>
              <h1 className="text-3xl md:text-5xl font-heading font-bold text-white tracking-tight mb-2">
                Delete Account
              </h1>
              <p className="text-red-400">
                Permanently delete your {app.name} account and associated data.
              </p>
            </div>
          </div>
          
          <div className="space-y-12">
            <section>
              <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
                <Info className="w-5 h-5 text-blue-400" />
                How It Works
              </h2>
              <ul className="space-y-3">
                {app.deleteAccount.howItWorks.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-muted-foreground">
                    <span className="flex items-center justify-center w-6 h-6 rounded-full bg-white/5 text-xs text-white shrink-0 mt-0.5">{i+1}</span>
                    {item}
                  </li>
                ))}
              </ul>
            </section>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <section className="p-6 rounded-2xl bg-red-500/5 border border-red-500/10">
                <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
                  <ShieldAlert className="w-5 h-5 text-red-400" />
                  What gets deleted?
                </h2>
                <ul className="space-y-3">
                  {app.deleteAccount.dataDeleted.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-muted-foreground text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-red-500 shrink-0 mt-2" />
                      {item}
                    </li>
                  ))}
                </ul>
              </section>

              <section className="p-6 rounded-2xl bg-white/5 border border-white/10">
                <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
                  <ShieldAlert className="w-5 h-5 text-orange-400" />
                  What is retained?
                </h2>
                <ul className="space-y-3">
                  {app.deleteAccount.dataRetained.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-muted-foreground text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-orange-500 shrink-0 mt-2" />
                      {item}
                    </li>
                  ))}
                </ul>
              </section>
            </div>

            <section className="pt-8 border-t border-red-500/10">
              <h2 className="text-xl font-bold text-white mb-4">Request Deletion</h2>
              <p className="text-muted-foreground mb-6">
                To initiate the deletion process, please send an email to our support team from the email address associated with your account.
              </p>
              <a 
                href={`mailto:${app.supportEmail}?subject=Account Deletion Request - ${app.name}&body=Please delete my account associated with this email address.`}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-red-500 hover:bg-red-600 text-white font-bold transition-colors"
              >
                <Mail className="w-5 h-5" />
                Email Deletion Request
              </a>
              <p className="mt-4 text-xs text-red-500/70 italic">
                * Note: In the future, a direct one-click delete feature will be available within the app settings.
              </p>
            </section>
          </div>
        </div>
      </Container>
    </main>
  );
}
