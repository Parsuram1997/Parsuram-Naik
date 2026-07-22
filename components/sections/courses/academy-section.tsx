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

function WhyLearnIcon({ name }: { name: string }) {
  const props = { className: "w-8 h-8 text-primary-blue group-hover:text-primary-green transition-colors" };
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
            <h3 className="text-3xl font-heading font-bold mb-4">Why Learn With Me?</h3>
            <p className="text-muted-foreground">My teaching methodology focuses on practical results.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyLearnData.map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <GlassCard className="p-8 h-full flex flex-col gap-4 border-white/5 hover:border-primary-blue/30 group">
                  <div className="w-14 h-14 rounded-2xl glass bg-white/5 border border-white/10 flex items-center justify-center group-hover:-translate-y-2 transition-transform duration-300">
                    <WhyLearnIcon name={item.icon} />
                  </div>
                  <h4 className="text-xl font-bold text-foreground">{item.title}</h4>
                  <p className="text-muted-foreground">{item.description}</p>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Roadmap & Certificate */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-12 xl:gap-16">
          <div>
            <div className="mb-8">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass border border-primary-green/30 text-xs font-semibold text-primary-green tracking-wider uppercase mb-3">
                📍 Structured Path
              </span>
              <h3 className="text-3xl font-heading font-bold text-foreground mb-2">Learning <span className="text-gradient">Roadmap</span></h3>
              <p className="text-muted-foreground text-sm">Step-by-step progress guide from absolute beginner to industry expert.</p>
            </div>
            <CourseRoadmap />
          </div>
          
          <div>
            <div className="mb-8">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass border border-primary-blue/30 text-xs font-semibold text-primary-blue tracking-wider uppercase mb-3">
                📜 Industry Recognition
              </span>
              <h3 className="text-3xl font-heading font-bold text-foreground mb-2">Verifiable <span className="text-gradient">Certificates</span></h3>
              <p className="text-muted-foreground text-sm">Earn shareable, verified credentials upon completing every premium course.</p>
            </div>
            <CertificatePreview />
          </div>
        </div>

      </Container>
    </section>
  );
}
