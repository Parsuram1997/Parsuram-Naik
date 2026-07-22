"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Container } from "@/components/ui/container";
import { GradientText } from "@/components/ui/gradient-text";
import { coursesData, courseCategories, whyLearnData } from "@/config/courses";
import { CourseFilter } from "./course-filter";
import { CourseCard } from "./course-card";
import { FeaturedCourse } from "./featured-course";
import { CourseRoadmap } from "./course-roadmap";
import { CertificatePreview } from "./certificate-preview";
import { GlassCard } from "@/components/ui/glass-card";
import { Briefcase, Code, Award, RefreshCw, Edit3, Users } from "lucide-react";

function WhyLearnIcon({ name, className }: { name: string; className?: string }) {
  const props = { className: className || "w-8 h-8 text-primary-blue group-hover:text-primary-green transition-colors" };
  switch (name) {
    case "Briefcase": return <Briefcase {...props} />;
    case "Code": return <Code {...props} />;
    case "Award": return <Award {...props} />;
    case "RefreshCw": return <RefreshCw {...props} />;
    case "Edit3": return <Edit3 {...props} />;
    case "Users": return <Users {...props} />;
    default: return <Award {...props} />;
  }
}

export function AcademySection() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredCourses = coursesData.filter(course => {
    if (activeCategory === "All") return true;
    if (activeCategory === "Free" || activeCategory === "Premium" || activeCategory === "Coming Soon") {
      return course.status === activeCategory;
    }
    return course.category === activeCategory;
  });

  const featuredCourse = coursesData.find(c => c.featured);

  return (
    <section id="courses" className="relative py-24 md:py-32 overflow-hidden border-y dark:border-white/5 border-slate-200">
      {/* Background Decor */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(var(--primary-blue),0.05)_0%,transparent_70%)] pointer-events-none" />
      
      <Container>
        
        {/* Header */}
        <div className="flex flex-col items-center text-center max-w-[700px] mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass border border-white/10 text-xs font-semibold text-primary-blue tracking-wider uppercase mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-primary-blue animate-pulse" />
            🎓 Learning Academy
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-heading font-bold mb-6 text-foreground leading-tight"
          >
            Master Technology <br />
            <GradientText>With Practical Courses</GradientText>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-muted-foreground"
          >
            Learn Android Development, AI, Web Development, Computer Fundamentals and more through structured courses designed for beginners and professionals.
          </motion.p>
        </div>

        {/* Featured Course */}
        {featuredCourse && <FeaturedCourse course={featuredCourse} />}

        {/* Course Filters */}
        <CourseFilter 
          categories={courseCategories} 
          activeCategory={activeCategory} 
          onSelect={setActiveCategory} 
        />

        {/* Course Grid */}
        <div className="mb-32 min-h-[400px]">
          <AnimatePresence mode="popLayout">
            {filteredCourses.length > 0 ? (
              <motion.div 
                layout 
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {filteredCourses.map((course, idx) => (
                  <CourseCard key={course.id} course={course} index={idx} />
                ))}
              </motion.div>
            ) : (
              <motion.div 
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }} 
                exit={{ opacity: 0 }}
                className="flex flex-col items-center justify-center py-20 text-center"
              >
                <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center mb-4">
                  <span className="text-2xl">🎓</span>
                </div>
                <h4 className="text-xl font-bold mb-2">No courses found</h4>
                <p className="text-muted-foreground">Check back later for new content in this category.</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Why Learn From Me */}
        <div className="mb-32">
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass border border-primary-green/30 text-xs font-semibold text-primary-green tracking-wider uppercase mb-3">
              ⚡ Teaching Methodology
            </span>
            <h3 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">Why Learn With Me?</h3>
            <p className="text-muted-foreground text-sm sm:text-base max-w-lg mx-auto">
              My engineering curriculum focuses strictly on practical results, clean architecture, and real-world execution.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyLearnData.map((item, idx) => {
              const themes = [
                { tag: "PRO-GRADE", bg: "from-emerald-500/20 to-teal-500/10", text: "text-emerald-500 dark:text-emerald-400", border: "border-emerald-500/30", hoverBorder: "hover:border-emerald-500/50", hoverGlow: "hover:shadow-[0_0_30px_rgba(16,185,129,0.15)]", tagStyle: "text-emerald-500 bg-emerald-500/10 border-emerald-500/30" },
                { tag: "REAL-WORLD CODE", bg: "from-cyan-500/20 to-blue-500/10", text: "text-cyan-500 dark:text-cyan-400", border: "border-cyan-500/30", hoverBorder: "hover:border-cyan-500/50", hoverGlow: "hover:shadow-[0_0_30px_rgba(6,182,212,0.15)]", tagStyle: "text-cyan-500 bg-cyan-500/10 border-cyan-500/30" },
                { tag: "BEST PRACTICES", bg: "from-purple-500/20 to-indigo-500/10", text: "text-purple-500 dark:text-purple-400", border: "border-purple-500/30", hoverBorder: "hover:border-purple-500/50", hoverGlow: "hover:shadow-[0_0_30px_rgba(168,85,247,0.15)]", tagStyle: "text-purple-500 bg-purple-500/10 border-purple-500/30" },
                { tag: "FREE UPDATES", bg: "from-amber-500/20 to-yellow-500/10", text: "text-amber-500 dark:text-amber-400", border: "border-amber-500/30", hoverBorder: "hover:border-amber-500/50", hoverGlow: "hover:shadow-[0_0_30px_rgba(245,158,11,0.15)]", tagStyle: "text-amber-500 bg-amber-500/10 border-amber-500/30" },
                { tag: "PRACTICE & QUIZZES", bg: "from-rose-500/20 to-pink-500/10", text: "text-rose-500 dark:text-rose-400", border: "border-rose-500/30", hoverBorder: "hover:border-rose-500/50", hoverGlow: "hover:shadow-[0_0_30px_rgba(244,63,94,0.15)]", tagStyle: "text-rose-500 bg-rose-500/10 border-rose-500/30" },
                { tag: "PRIVATE NETWORK", bg: "from-sky-500/20 to-teal-500/10", text: "text-sky-500 dark:text-sky-400", border: "border-sky-500/30", hoverBorder: "hover:border-sky-500/50", hoverGlow: "hover:shadow-[0_0_30px_rgba(14,165,233,0.15)]", tagStyle: "text-sky-500 bg-sky-500/10 border-sky-500/30" }
              ];
              const theme = themes[idx % themes.length];

              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.08 }}
                >
                  <GlassCard className={`p-7 h-full flex flex-col justify-between border-white/10 dark:border-white/10 border-slate-200 ${theme.hoverBorder} ${theme.hoverGlow} group transition-all duration-300 hover:-translate-y-1.5`}>
                    <div>
                      {/* Top Row: Icon Badge + Pill Tag */}
                      <div className="flex items-center justify-between gap-4 mb-6">
                        <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${theme.bg} border ${theme.border} flex items-center justify-center ${theme.text} shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                          <WhyLearnIcon name={item.icon} className="w-7 h-7" />
                        </div>

                        <span className={`text-[10px] font-black tracking-wider uppercase px-2.5 py-1 rounded-full border ${theme.tagStyle}`}>
                          {theme.tag}
                        </span>
                      </div>

                      <h4 className="text-xl font-bold font-heading text-foreground mb-3 group-hover:text-primary-blue transition-colors">
                        {item.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </GlassCard>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Roadmap Block */}
        <div className="mb-24">
          <div className="text-center max-w-[600px] mx-auto mb-12">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass border border-primary-green/30 text-xs font-semibold text-primary-green tracking-wider uppercase mb-3">
              📍 Structured Path
            </span>
            <h3 className="text-3xl font-heading font-bold text-foreground mb-2">Learning <span className="text-gradient">Roadmap</span></h3>
            <p className="text-muted-foreground text-sm">Step-by-step progress guide from absolute beginner to industry expert.</p>
          </div>
          <CourseRoadmap />
        </div>

        {/* Certificate Block */}
        <div>
          <div className="text-center max-w-[600px] mx-auto mb-12">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass border border-primary-blue/30 text-xs font-semibold text-primary-blue tracking-wider uppercase mb-3">
              📜 Industry Recognition
            </span>
            <h3 className="text-3xl font-heading font-bold text-foreground mb-2">Verifiable <span className="text-gradient">Certificates</span></h3>
            <p className="text-muted-foreground text-sm">Earn shareable, verified credentials upon completing every premium course.</p>
          </div>
          <CertificatePreview />
        </div>

      </Container>
    </section>
  );
}
