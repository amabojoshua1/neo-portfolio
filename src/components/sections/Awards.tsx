"use client";

import React from "react";
import { motion } from "framer-motion";
import { Award, ShieldCheck, Cpu } from "lucide-react";
import { useI18n } from "@/providers/I18nProvider";

export default function Awards() {
  const { t } = useI18n();

  const awards = [
    {
      title: "HCIA Datacom",
      issuer: "Huawei",
      category: "Networking",
      icon: <Cpu className="w-6 h-6 text-burgundy" />,
      description: t("awards.item1.description"),
    },
    {
      title: "Enterprise Design Thinking",
      issuer: "IBM",
      category: "Design",
      icon: <ShieldCheck className="w-6 h-6 text-sage-green" />,
      description: t("awards.item2.description"),
    },
    {
      title: "AWS Certified Developer",
      issuer: "Amazon",
      category: "Cloud",
      icon: <ShieldCheck className="w-6 h-6 text-deep-charcoal" />,
      description: t("awards.item3.description"),
    },
  ];

  return (
    <section id="awards" className="py-16 px-4 bg-soft-cream">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="text-4xl md:text-6xl font-serif font-black text-deep-charcoal leading-tight">
            {t("awards.title")}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {awards.map((award, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: i * 0.1,
                ease: "easeOut",
              }}
              className="p-8 border border-zinc-200 dark:border-zinc-800 rounded-2xl bg-white dark:bg-zinc-900 transition-all duration-500 flex flex-col justify-between aspect-square md:aspect-auto hover:shadow-xl"
            >
              <div>
                <div className="mb-6 flex justify-between items-start">
                  {award.icon}
                  <span className="text-[10px] tracking-widest font-mono text-zinc-500 dark:text-zinc-400">
                    {award.category}
                  </span>
                </div>
                <h3 className="text-xl font-serif font-bold text-zinc-900 dark:text-zinc-100 mb-2">
                  {award.title}
                </h3>
                <p className="text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed">
                  {award.description}
                </p>
              </div>

              <div className="mt-8 flex justify-between items-center border-t border-zinc-200 dark:border-zinc-800 pt-4">
                <span className="text-xs font-bold text-zinc-800 dark:text-zinc-200 tracking-widest">
                  {award.issuer}
                </span>
                <Award className="w-4 h-4 text-burgundy opacity-50" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
