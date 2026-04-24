"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

type Language = "en" | "fr";

interface I18nContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const I18nContext = createContext<I18nContextType | undefined>(undefined);

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("en");
  const [messages, setMessages] = useState<
    Record<string, Record<string, unknown>>
  >({});

  useEffect(() => {
    const loadMessages = async () => {
      const en = await import("@/messages/en.json");
      const fr = await import("@/messages/fr.json");
      setMessages({ en: en.default, fr: fr.default });
    };
    loadMessages();
  }, []);

  const t = (key: string) => {
    if (!messages[language]) return key;
    const keys = key.split(".");
    let value: unknown = messages[language];
    for (const k of keys) {
      if (typeof value === "object" && value !== null) {
        value = (value as Record<string, unknown>)[k];
      } else {
        return key;
      }
    }
    return typeof value === "string" ? value : key;
  };

  return (
    <I18nContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  const context = useContext(I18nContext);
  if (!context) {
    throw new Error("useI18n must be used within an I18nProvider");
  }
  return context;
}
