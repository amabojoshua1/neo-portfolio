"use client";

import React from "react";
import { MessageSquare, Mail, Link, FileText } from "lucide-react";
import { useI18n } from "@/providers/I18nProvider";
import Magnetic from "@/components/ui/Magnetic";

export default function Footer() {
  const { t } = useI18n();

  return (
    <footer
      id="contact"
      className="py-16 px-4 bg-deep-charcoal text-soft-cream"
    >
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
        <h2 className="text-4xl md:text-6xl font-serif font-black mb-12 tracking-tighter">
          {t("contact.title")}
        </h2>

        <div className="grid grid-cols-2 md:flex md:flex-row gap-8 md:gap-16 mb-20">
          <ContactLink
            href="https://wa.me/237672446964"
            icon={<MessageSquare className="w-5 h-5" />}
            label="WhatsApp"
          />
          <ContactLink
            href="mailto:amabojoshua@gmail.com"
            icon={<Mail className="w-5 h-5" />}
            label="Email"
          />
          <ContactLink
            href="https://github.com/amabojoshua1"
            icon={<CodeIcon />}
            label="GitHub"
          />
          <ContactLink
            href="https://linkedin.com/in/amabo-joshua"
            icon={<Link className="w-5 h-5" />}
            label="LinkedIn"
          />
          <ContactLink
            href="/resume.pdf"
            icon={<FileText className="w-5 h-5" />}
            label={t("nav.resume")}
            download
          />
        </div>

        <div className="w-full h-px bg-white/10 mb-12" />

        <div className="flex flex-col md:flex-row justify-between w-full items-center gap-8 opacity-40 font-mono text-[10px] uppercase tracking-[0.3em]">
          <p>{t("contact.rights")}</p>
          <div className="flex gap-12">
            <span>{t("contact.location")}</span>
            <span>{t("contact.precision")}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

function CodeIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-5 h-5"
    >
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  );
}

function ContactLink({
  href,
  icon,
  label,
  download = false,
}: {
  href: string;
  icon: React.ReactNode;
  label: string;
  download?: boolean;
}) {
  return (
    <Magnetic>
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        download={download}
        className="flex flex-col items-center gap-4 group"
      >
        <div className="p-4 rounded-full border border-white/10 group-hover:bg-burgundy group-hover:border-burgundy transition-all duration-500 ease-chic">
          {icon}
        </div>
        <span className="text-[10px] font-mono tracking-widest group-hover:text-burgundy transition-colors">
          {label}
        </span>
      </a>
    </Magnetic>
  );
}
