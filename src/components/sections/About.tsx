"use client";

import React from "react";
import { motion } from "framer-motion";
import { useI18n } from "@/providers/I18nProvider";
import Image from "next/image";

export default function About() {
  const { t } = useI18n();

  return (
    <section id="about" className="py-16 px-4 bg-soft-cream">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
        {/* Author Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          className="relative aspect-[3/4] w-full max-w-sm mx-auto md:max-w-md rounded-3xl overflow-hidden shadow-2xl border border-burgundy/10"
        >
          <Image
            src="/me.jpg"
            alt="Amabo Joshua"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.76, 0, 0.24, 1] }}
        >
          <h2 className="text-3xl md:text-5xl font-serif font-black text-deep-charcoal leading-tight mb-8">
            {t("about.title")}
          </h2>
          <div className="w-20 h-1 bg-burgundy rounded-full mb-8" />

          <p className="text-lg md:text-xl text-zinc-900 dark:text-zinc-300 leading-relaxed font-sans font-medium">
            {t("about.content")}
          </p>

          <div className="mt-12 flex flex-wrap gap-4">
            <div className="px-4 py-2 bg-burgundy/10 dark:bg-burgundy/20 rounded-full border border-burgundy/20 text-[10px] font-mono tracking-widest text-burgundy">
              Flutter
            </div>
            <div className="px-4 py-2 bg-burgundy/10 dark:bg-burgundy/20 rounded-full border border-burgundy/20 text-[10px] font-mono tracking-widest text-burgundy">
              Django
            </div>
            <div className="px-4 py-2 bg-burgundy/10 dark:bg-burgundy/20 rounded-full border border-burgundy/20 text-[10px] font-mono tracking-widest text-burgundy">
              UI/UX Design
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
