"use client"

import type React from "react"

import { createContext, useContext, useState, useEffect } from "react"

type Language = "en" | "es" | "fr" | "de" | "zh"

type Translations = {
  [key: string]: {
    [key in Language]?: string
  }
}

type LanguageContextType = {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const translations: Translations = {
  "Your health journey starts here": {
    en: "Your health journey starts here",
    es: "Tu viaje de salud comienza aquí",
    fr: "Votre parcours santé commence ici",
    de: "Ihre Gesundheitsreise beginnt hier",
    zh: "您的健康之旅从这里开始",
  },
  "Check Symptoms": {
    en: "Check Symptoms",
    es: "Verificar síntomas",
    fr: "Vérifier les symptômes",
    de: "Symptome prüfen",
    zh: "检查症状",
  },
  // Add more translations as needed
}

const LanguageContext = createContext<LanguageContextType>({
  language: "en",
  setLanguage: () => {},
  t: (key) => key,
})

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("en")

  useEffect(() => {
    const savedLanguage = localStorage.getItem("language") as Language
    if (savedLanguage) {
      setLanguage(savedLanguage)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("language", language)
  }, [language])

  const t = (key: string): string => {
    return translations[key]?.[language] || key
  }

  return <LanguageContext.Provider value={{ language, setLanguage, t }}>{children}</LanguageContext.Provider>
}

export const useTranslation = () => useContext(LanguageContext)
