"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { useI18n } from "@/providers/I18nProvider";
import { ExternalLink, Code } from "lucide-react";

interface Project {
  title: string;
  category: string;
  image: string;
  link: string;
  github?: string;
  tags: string[];
}

const projects: Project[] = [
  {
    title: "IChef",
    category: "Mobile | Social",
    image: "",
    link: "",
    github: "https://github.com/amabojoshua1/i-chef",
    tags: ["Flutter", "Node.js"],
  },
  {
    title: "Rekomn App",
    category: "Mobile | AI",
    image: "",
    link: "",
    github: "https://github.com/amabojoshua1/Rekom-n",
    tags: ["React Native", "Django", "Django REST", "AI"],
  },
  {
    title: "eDS - City of ExcellenceDriving School",
    category: "Web | Business",
    image: "",
    link: "https://city-of-excellence-driving-school.vercel.app",
    github: "https://github.com/amabojoshua1/eDS",
    tags: ["Next.js", "React", "Frontend"],
  },
  {
    title: "Kurebridge",
    category: "Web | Health Tech",
    image: "",
    link: "",
    tags: ["Django", "Teleconsultation", "Backend"],
  },
];

export default function Projects() {
  const { t } = useI18n();

  return (
    <section
      id="work"
      className="py-16 px-4 bg-soft-cream dark:bg-soft-cream/5"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div>
            <h2 className="text-3xl md:text-5xl font-serif font-black text-deep-charcoal">
              {t("projects.title")}
            </h2>
          </div>
          <p className="text-sm text-deep-charcoal opacity-40 font-mono uppercase tracking-widest max-w-xs">
            {t("projects.subtitle")}
          </p>
        </div>

        <div className="flex flex-col gap-24 mt-24">
          {projects.map((project, i) => {
            const isEven = i % 2 === 0;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{
                  duration: 0.8,
                  delay: 0.1,
                  ease: [0.76, 0, 0.24, 1],
                }}
                className={`flex flex-col ${
                  isEven ? "md:flex-row" : "md:flex-row-reverse"
                } gap-8 md:gap-16 items-center group cursor-default`}
              >
                {/* Image Container */}
                <div className="w-full md:w-3/5">
                  <div className="relative aspect-[16/10] overflow-hidden rounded-3xl bg-zinc-200 dark:bg-zinc-800 shadow-lg group-hover:shadow-[0_20px_50px_rgba(0,0,0,0.1)] transition-all duration-700">
                    {project.image ? (
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 60vw"
                        className="object-cover transition-transform duration-1000 group-hover:scale-105"
                      />
                    ) : (
                      <div className="w-full h-full bg-zinc-100 dark:bg-zinc-900 transition-transform duration-1000 group-hover:scale-105 flex items-center justify-center">
                        <span className="text-zinc-400 dark:text-zinc-600 font-serif font-black tracking-tight text-2xl md:text-4xl px-4 text-center">
                          {project.title} <br className="hidden md:block" />
                          <span className="text-sm font-sans font-medium tracking-widest uppercase opacity-50 block mt-4">
                            Image Unavailable
                          </span>
                        </span>
                      </div>
                    )}

                    {/* Overlay on hover */}
                    <div className="absolute inset-0 bg-burgundy/90 dark:bg-burgundy/80 opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col items-center justify-center gap-6 p-8 text-center backdrop-blur-md">
                      <div className="flex gap-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                        {project.github && (
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-4 bg-white/10 hover:bg-white/20 hover:scale-110 rounded-full border border-white/20 transition-all shadow-xl"
                          >
                            <Code className="w-6 h-6 text-white" />
                          </a>
                        )}
                        {project.link && (
                          <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-4 bg-white/10 hover:bg-white/20 hover:scale-110 rounded-full border border-white/20 transition-all shadow-xl"
                          >
                            <ExternalLink className="w-6 h-6 text-white" />
                          </a>
                        )}
                      </div>
                      <p className="text-white text-sm font-bold uppercase tracking-[0.3em] translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75 ease-out">
                        {t("projects.view")}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Text / Context Container */}
                <div
                  className={`w-full md:w-2/5 flex flex-col ${
                    isEven
                      ? "items-start text-left"
                      : "items-start md:items-end md:text-right"
                  }`}
                >
                  <span className="text-[10px] font-mono tracking-[0.4em] text-burgundy font-bold">
                    {project.category}
                  </span>
                  <h3 className="text-3xl md:text-5xl font-serif font-black text-zinc-900 dark:text-zinc-100 mt-6 group-hover:text-burgundy transition-colors duration-500">
                    {project.title}
                  </h3>

                  <div
                    className={`flex flex-wrap gap-3 mt-10 ${
                      isEven ? "justify-start" : "justify-start md:justify-end"
                    }`}
                  >
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[9px] font-bold text-zinc-700 dark:text-zinc-300 tracking-widest px-4 py-2 border border-zinc-200 dark:border-zinc-800 rounded-full group-hover:border-burgundy/50 group-hover:text-burgundy transition-colors duration-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
