"use client";

import React from "react";
import { motion } from "framer-motion";
import { useI18n } from "@/providers/I18nProvider";
import Magnetic from "@/components/ui/Magnetic";

export default function Hero() {
  const { t } = useI18n();

  return (
    <section
      id="hero"
      className="relative min-h-[80vh] flex items-center justify-center pt-20 px-4 overflow-hidden"
    >
      {/* Background Graphic: Sage Green geometric wireframe (Parallax) */}
      <motion.div
        drag
        dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
        dragElastic={0.1}
        className="absolute inset-0 z-0 opacity-20 pointer-events-none"
      >
        <svg
          viewBox="0 0 100 100"
          className="w-full h-full text-sage-green stroke-current fill-none stroke-[0.1]"
        >
          <path d="M10,10 L90,10 L90,90 L10,90 Z M10,10 L90,90 M90,10 L10,90" />
          <circle cx="50" cy="50" r="40" />
          <circle cx="50" cy="50" r="20" />
        </svg>
      </motion.div>

      <div className="relative z-10 text-center max-w-4xl">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.76, 0, 0.24, 1] }}
          className="text-xs md:text-sm font-mono uppercase tracking-[0.4em] text-burgundy mb-6 block"
        >
          {t("hero.greeting")}
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.76, 0, 0.24, 1] }}
          className="text-4xl md:text-6xl lg:text-7xl font-serif font-black mb-8 leading-[1.1]"
        >
          AMABO <br />
          <span className="text-burgundy">JOSHUA</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8, ease: [0.76, 0, 0.24, 1] }}
          className="flex flex-col items-center gap-6"
        >
          <p className="text-sm md:text-lg text-deep-charcoal opacity-60 leading-relaxed max-w-xl mx-auto font-sans font-medium">
            {t("hero.tagline")}
          </p>

          <Magnetic>
            <button
              onClick={() =>
                document
                  .getElementById("work")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="group relative px-6 py-3 overflow-hidden rounded-full border border-burgundy text-burgundy text-xs font-bold uppercase tracking-widest hover:text-white transition-colors duration-500"
            >
              <span className="relative z-10">{t("nav.work")}</span>
              <div className="absolute inset-0 bg-burgundy -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-in-out" />
            </button>
          </Magnetic>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-32 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-30"
      >
        <div className="w-px h-12 bg-deep-charcoal" />
        <span className="text-[10px] uppercase tracking-widest font-mono text-deep-charcoal opacity-60">
          {t("scroll")}
        </span>
      </motion.div>
    </section>
  );
}
