"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Globe, Moon, Sun, MessageSquare } from "lucide-react";
import { useI18n } from "@/providers/I18nProvider";
import { useTheme } from "next-themes";
import Magnetic from "@/components/ui/Magnetic";

const navItems = [
  { id: "hero", label: "nav.home" },
  { id: "work", label: "nav.work" },
  { id: "about", label: "nav.about" },
  { id: "experience", label: "nav.experience" },
  { id: "contact", label: "nav.contact" },
];

export default function Navbar() {
  const { language, setLanguage, t } = useI18n();
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <nav
      aria-label="Primary navigation"
      className="site-nav fixed bottom-4 left-1/2 -translate-x-1/2 z-50 px-2 w-full max-w-2xl"
    >
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="bg-burgundy/90 text-white rounded-2xl sm:rounded-full px-2 sm:px-4 md:px-6 py-2 sm:py-3 flex items-center justify-between shadow-2xl shadow-burgundy/20 backdrop-blur-xl border border-white/10"
      >
        <div className="nav-links min-w-0 flex-1 flex items-center gap-3 sm:gap-6 overflow-x-auto">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="shrink-0 text-[10px] sm:text-[11px] font-mono uppercase tracking-[0.1em] sm:tracking-[0.2em] hover:text-sage-green focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white transition-colors duration-300 whitespace-nowrap"
            >
              {t(item.label)}
            </a>
          ))}
        </div>

        <div className="shrink-0 flex items-center gap-1 sm:gap-3 pl-2 sm:pl-4 border-l border-white/10 ml-2">
          {/* Language Toggle */}
          <Magnetic>
            <button
              onClick={() => setLanguage(language === "en" ? "fr" : "en")}
              className="p-2 hover:bg-white/10 rounded-full transition-colors group focus-visible:outline focus-visible:outline-2 focus-visible:outline-white"
              title={
                language === "en" ? "Passer en Français" : "Switch to English"
              }
            >
              <Globe className="w-4 h-4 group-hover:scale-110 transition-transform" />
              <span className="sr-only">Toggle Language</span>
            </button>
          </Magnetic>

          {/* Theme Toggle */}
          <Magnetic>
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              aria-label="Toggle color theme"
              className="p-2 hover:bg-white/10 rounded-full transition-colors group focus-visible:outline focus-visible:outline-2 focus-visible:outline-white"
            >
              {theme === "dark" ? (
                <Sun className="w-4 h-4 group-hover:rotate-45 transition-transform" />
              ) : (
                <Moon className="w-4 h-4 group-hover:-rotate-12 transition-transform" />
              )}
            </button>
          </Magnetic>

          {/* WhatsApp Link */}
          <Magnetic>
            <a
              href="https://wa.me/237672446964"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Contact on WhatsApp"
              className="p-2 bg-green-500 hover:bg-green-600 rounded-full transition-colors group shadow-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-white"
            >
              <MessageSquare className="w-4 h-4 text-white group-hover:scale-110 transition-transform" />
            </a>
          </Magnetic>
        </div>
      </motion.div>
    </nav>
  );
}
