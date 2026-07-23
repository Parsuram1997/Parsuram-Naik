import { getArticleById } from "@/config/blog";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { Container } from "@/components/ui/container";
import Link from "next/link";
import { ChevronLeft, Calendar, Clock } from "lucide-react";
import fs from "fs";
import path from "path";
import ReactMarkdown from "react-markdown";

type BlogParams = {
  params: Promise<{
    id: string;
  }>;
};

export async function generateMetadata({ params }: BlogParams): Promise<Metadata> {
  const { id } = await params;
  const article = getArticleById(id);
  if (!article) return { title: "Article Not Found" };
  return {
    title: `${article.title} | Parsuram Naik Blog`,
    description: article.excerpt,
  };
}

export default async function BlogPostPage({ params }: BlogParams) {
  const { id } = await params;
  const article = getArticleById(id);

  if (!article) {
    notFound();
  }

  // Attempt to read the markdown file
  let content = "";
  try {
    const filePath = path.join(process.cwd(), "content", "blog", `${id}.md`);
    content = fs.readFileSync(filePath, "utf8");
  } catch (error) {
    content = "This article's detailed content is currently being written. Please check back later!";
  }

  return (
    <main className="min-h-screen pt-32 pb-24 relative z-0 overflow-hidden">
      {/* Background Decor Ambient Mesh Glows */}
      <div className="absolute top-[-10%] right-[-5%] w-[400px] h-[400px] md:w-[600px] md:h-[600px] bg-primary-blue/10 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] md:w-[600px] md:h-[600px] bg-primary-green/10 rounded-full blur-[120px] pointer-events-none -z-10" />

      <Container className="relative z-10">
        <Link href="/#blog" className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-white transition-colors mb-8">
          <ChevronLeft className="w-4 h-4 mr-1" />
          Back to Blog
        </Link>
        
        <div className="bg-white/[0.02] border border-white/5 rounded-[2.5rem] p-8 md:p-14 shadow-[0_8px_32px_rgba(0,0,0,0.4)] backdrop-blur-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-primary-blue/5 rounded-full blur-[100px] pointer-events-none"></div>
          
          <div className="mb-14 border-b border-white/5 pb-10 relative z-10">
            <div className="flex items-center gap-4 text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-6">
              <span className="flex items-center gap-1.5"><Clock className="w-4 h-4 text-primary-blue" /> {article.readingTime}</span>
              <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4 text-primary-green" /> {article.publishedDate}</span>
              <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white ml-2">{article.category}</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-heading font-extrabold tracking-tight mb-8">
              <span className="bg-clip-text text-transparent bg-gradient-to-br from-white via-white/90 to-white/30 leading-tight">
                {article.title}
              </span>
            </h1>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-primary-blue to-primary-green p-[2px]">
                <div className="w-full h-full rounded-full bg-background flex items-center justify-center font-bold text-lg">
                  PN
                </div>
              </div>
              <div>
                <p className="font-semibold text-white">{article.author}</p>
                <p className="text-sm text-muted-foreground">Software Engineer</p>
              </div>
            </div>
          </div>
          
          <div className="relative z-10 w-full prose prose-invert prose-lg max-w-none prose-headings:font-heading prose-headings:text-white prose-a:text-primary-blue hover:prose-a:text-primary-green prose-a:transition-colors prose-strong:text-white prose-code:text-primary-green prose-code:bg-white/5 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded-md prose-pre:bg-black/50 prose-pre:border prose-pre:border-white/10">
            <ReactMarkdown>
              {content}
            </ReactMarkdown>
          </div>
        </div>
      </Container>
    </main>
  );
}
