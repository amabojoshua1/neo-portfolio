"use client";

import { motion } from "framer-motion";
import { useI18n } from "@/providers/I18nProvider";

export default function Experience() {
  const { t } = useI18n();

  const experience = [
    {
      company: t("experience.item1.company"),
      role: t("experience.item1.role"),
      period: t("experience.item1.period"),
      description: t("experience.item1.description"),
      side: "left",
    },
    {
      company: t("experience.item2.company"),
      role: t("experience.item2.role"),
      period: t("experience.item2.period"),
      description: t("experience.item2.description"),
      side: "right",
    },
    {
      company: t("experience.item3.company"),
      role: t("experience.item3.role"),
      period: t("experience.item3.period"),
      description: t("experience.item3.description"),
      side: "left",
    },
  ];

  return (
    <section
      id="experience"
      className="py-16 px-4 bg-soft-cream dark:bg-soft-cream/5"
    >
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="text-3xl md:text-5xl font-serif font-black text-deep-charcoal">
            {t("experience.title")}
          </h2>
        </div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-light-gray" />

          <div className="space-y-24">
            {experience.map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.8,
                  delay: i * 0.1,
                  ease: [0.76, 0, 0.24, 1],
                }}
                whileHover={{ y: -5 }}
                className={`flex items-center gap-8 ${
                  exp.side === "right" ? "md:flex-row-reverse" : ""
                }`}
              >
                <div className="w-full md:w-1/2 p-8 border border-zinc-200 dark:border-zinc-800 rounded-2xl bg-white dark:bg-zinc-900 shadow-sm hover:shadow-xl transition-all duration-500 ease-chic group cursor-default">
                  <span className="text-[10px] font-mono tracking-widest text-burgundy font-bold">
                    {exp.period}
                  </span>
                  <h3 className="text-xl md:text-2xl font-serif font-bold text-zinc-900 dark:text-zinc-100 mt-2">
                    {exp.company}
                  </h3>
                  <p className="text-xs font-bold text-zinc-600 dark:text-zinc-400 tracking-widest mt-1">
                    {exp.role}
                  </p>
                  <p className="mt-4 text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed group-hover:text-zinc-900 dark:group-hover:text-white transition-colors">
                    {exp.description}
                  </p>
                </div>
                <div className="hidden md:block w-4 h-4 rounded-full bg-burgundy relative z-10 border-4 border-soft-cream" />
                <div className="hidden md:block w-1/2" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
