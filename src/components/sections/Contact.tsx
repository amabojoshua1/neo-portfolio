"use client";

import React from "react";
import { motion } from "framer-motion";
import { Mail, Link, Code, ArrowUpRight } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-32 px-4 bg-soft-cream">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="p-12 md:p-24 rounded-[3rem] bg-deep-charcoal text-soft-cream overflow-hidden relative"
        >
          {/* Subtle noise/texture overlay could go here */}

          <h2 className="text-4xl md:text-7xl font-serif font-black mb-8 relative z-10">
            LET&apos;S ARCHITECT <br /> THE FUTURE.
          </h2>

          <p className="text-soft-cream/60 text-lg md:text-xl mb-12 max-w-xl mx-auto relative z-10">
            Available for selected freelance opportunities and architectural
            consultations.
          </p>

          <div className="flex flex-wrap justify-center gap-6 relative z-10">
            <ContactLink
              icon={<Mail />}
              label="Email"
              href="mailto:amabojoshua@example.com"
            />
            <ContactLink
              icon={<Link />}
              label="LinkedIn"
              href="https://linkedin.com/in/amabojoshua"
            />
            <ContactLink
              icon={<Code />}
              label="GitHub"
              href="https://github.com/amabojoshua"
            />
          </div>

          {/* Decorative geometric background */}
          <div className="absolute top-0 right-0 -translate-y-1/3 translate-x-1/3 w-64 h-64 border border-soft-cream/10 rounded-full" />
          <div className="absolute bottom-0 left-0 translate-y-1/3 -translate-x-1/3 w-96 h-96 border border-soft-cream/5 rounded-full" />
        </motion.div>
      </div>
    </section>
  );
}

function ContactLink({
  icon,
  label,
  href,
}: {
  icon: React.ReactNode;
  label: string;
  href: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex items-center gap-3 px-6 py-4 border border-soft-cream/20 rounded-full hover:bg-soft-cream hover:text-deep-charcoal transition-all duration-500"
    >
      {/* Icon size adjustment */}
      {React.cloneElement(icon as React.ReactElement<{ size?: number }>, {
        size: 18,
      })}
      <span className="font-medium">{label}</span>
      <ArrowUpRight className="w-4 h-4 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all duration-300" />
    </a>
  );
}
