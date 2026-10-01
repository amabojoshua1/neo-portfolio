"use client";

"use client";

import React from "react";
import { motion } from "framer-motion";

const technologies = [
  "NEXT.JS",
  "NEST.JS",
  "REACT NATIVE",
  "DJANGO",
  "FLUTTER",
  "PROXMOX",
  "DOCKER",
  "LINUX",
  "UI/UX DESIGN",
  "GRAPHIC DESIGN",
  "DATABASES",
  "CLOUD COMPUTING",
  "SOFTWARE ARCHITECTURE",
  "PRODUCT DESIGN",
  "PRODUCT MANAGEMENT",
];

export default function TechMarquee() {
  return (
    <section className="py-10 overflow-hidden border-y border-light-gray bg-soft-cream dark:bg-soft-cream/5">
      <div className="flex whitespace-nowrap">
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={i}
            animate={{ x: "-100%" }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear",
            }}
            className="flex items-center gap-12 px-6"
          >
            {technologies.map((tech) => (
              <span
                key={tech}
                className="text-4xl md:text-6xl font-serif font-black tracking-tighter text-deep-charcoal/20 hover:text-deep-charcoal transition-colors duration-500 cursor-default"
              >
                {tech}
              </span>
            ))}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
