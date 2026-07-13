"use client";

import { motion } from "framer-motion";

interface SkillItem {
  name: string;
  progress: number;
}

export function AboutSkills({ data }: { data: SkillItem[] }) {
  return (
    <div className="mb-16">
      <h4 className="text-2xl font-heading font-bold mb-6 text-foreground">Core Skills</h4>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {data.map((skill, index) => (
          <div key={skill.name} className="flex flex-col gap-2">
            <div className="flex justify-between items-center text-sm font-medium">
              <span className="text-foreground">{skill.name}</span>
              <span className="text-muted-foreground">{skill.progress}%</span>
            </div>
            {/* Progress Bar Track */}
            <div className="w-full h-2 rounded-full bg-muted overflow-hidden relative">
              {/* Animated Progress Fill */}
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.progress}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.2 + index * 0.1, ease: "easeOut" }}
                className="absolute top-0 left-0 h-full bg-gradient-to-r from-primary-blue to-primary-green rounded-full"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
