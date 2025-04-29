"use client"

import { useTranslation } from "@/components/language-provider"

export function Translator({ text }: { text: string }) {
  const { t } = useTranslation()
  return <>{t(text)}</>
}
