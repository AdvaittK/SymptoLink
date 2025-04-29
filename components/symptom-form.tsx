"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Loader2, AlertCircle, CheckCircle2, Stethoscope, ClipboardList } from "lucide-react"
import { useTranslation } from "@/components/language-provider"
import { analyzeSymptoms } from "@/lib/api/symptoms"

type AnalysisResult = {
  possibleConditions: Array<{
    name: string
    probability: string
    description: string
  }>
  recommendations: string[]
  disclaimer: string
}

export default function SymptomForm() {
  const [symptoms, setSymptoms] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")
  const [result, setResult] = useState<AnalysisResult | null>(null)
  const [isVisible, setIsVisible] = useState(false)
  const { t } = useTranslation()

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { type: 'spring', stiffness: 100 }
    }
  }

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!symptoms.trim()) return

    setIsLoading(true)
    setError("")
    setResult(null)

    try {
      const data = await analyzeSymptoms(symptoms)
      setResult(data)
    } catch (err) {
      setError(t("An error occurred while analyzing your symptoms. Please try again."))
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <motion.div 
      className="space-y-8"
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
      variants={containerVariants}
    >
      <motion.div variants={itemVariants}>
        <Card className="overflow-hidden border-teal-100 dark:border-teal-900 shadow-lg transition-all duration-300 hover:shadow-teal-100 dark:hover:shadow-teal-900/20">
          <div className="absolute inset-0 bg-gradient-to-br from-teal-50 via-white/90 to-blue-50/50 dark:from-teal-950/40 dark:via-gray-950/90 dark:to-blue-950/30 opacity-50"></div>
          <div className="absolute top-0 left-0 h-1 w-full bg-gradient-to-r from-teal-500 via-teal-400 to-teal-500"></div>
          <div className="relative">
            <CardHeader className="pb-2">
              <div className="flex items-center gap-3">
                <motion.div 
                  className="h-10 w-10 rounded-full bg-gradient-to-br from-teal-100 to-teal-200 dark:from-teal-800/50 dark:to-teal-700/30 flex items-center justify-center"
                  animate={{ rotate: [0, 10, 0, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity, repeatDelay: 5 }}
                >
                  <Stethoscope className="h-5 w-5 text-teal-600 dark:text-teal-400" />
                </motion.div>
                <CardTitle className="text-2xl text-transparent bg-clip-text bg-gradient-to-r from-teal-600 via-teal-500 to-teal-400 dark:from-teal-400 dark:via-teal-300 dark:to-teal-400 font-bold">
                  {t("Describe Your Symptoms")}
                </CardTitle>
              </div>
              <CardDescription className="text-base mt-1">
                {t("Provide as much detail as possible for a more accurate analysis")}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="space-y-3">
                  <Textarea
                    placeholder={t(
                      "Describe your symptoms in detail (e.g., 'I have a headache, fever, and sore throat for the past 2 days')",
                    )}
                    value={symptoms}
                    onChange={(e) => setSymptoms(e.target.value)}
                    rows={8}
                    className="resize-none border-2 rounded-xl border-teal-100 dark:border-teal-900 focus:border-teal-400 dark:focus:border-teal-600 focus:ring-teal-300 dark:focus:ring-teal-700 text-md shadow-inner bg-white/80 dark:bg-gray-900/50 transition-all duration-200 placeholder:text-gray-400 dark:placeholder:text-gray-500"
                    required
                  />
                  <div className="flex items-center gap-2 text-teal-600 dark:text-teal-400 animate-pulse">
                    <ClipboardList className="h-4 w-4" />
                    <p className="text-xs text-teal-600 dark:text-teal-400 font-medium">
                      {t("Include: duration, severity, triggers, relieving factors, and any relevant medical history.")}
                    </p>
                  </div>
                </div>
                <div className="flex justify-end pt-2">
                  <motion.div
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    <Button 
                      type="submit" 
                      className="bg-gradient-to-r from-teal-600 to-teal-500 hover:from-teal-500 hover:to-teal-600 text-white shadow-md hover:shadow-lg hover:shadow-teal-200 dark:hover:shadow-teal-900/30 py-6 px-8 rounded-xl transition-all duration-300 font-semibold" 
                      disabled={isLoading || !symptoms.trim()}
                      size="lg"
                    >
                      {isLoading ? (
                        <motion.div
                          className="flex items-center justify-center"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                        >
                          <Loader2 className="mr-3 h-5 w-5 animate-spin" />
                          {t("Analyzing...")}
                        </motion.div>
                      ) : (
                        <motion.div
                          className="flex items-center justify-center"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                        >
                          {t("Analyze Symptoms")}
                        </motion.div>
                      )}
                    </Button>
                  </motion.div>
                </div>
              </form>
            </CardContent>
          </div>
        </Card>
      </motion.div>

      {error && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: 'spring', stiffness: 100 }}
        >
          <Alert variant="destructive">
            <AlertCircle className="h-4 w-4" />
            <AlertTitle>{t("Error")}</AlertTitle>
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        </motion.div>
      )}

      {result && (
        <motion.div 
          className="space-y-10 mt-10"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.div variants={itemVariants}>
            <Alert className="bg-gradient-to-r from-teal-50 to-teal-50/50 dark:from-teal-900/30 dark:to-teal-900/10 border-teal-200 dark:border-teal-800 p-6 shadow-sm rounded-xl">
              <motion.div 
                className="flex items-center gap-3"
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ type: 'spring', stiffness: 100, delay: 0.3 }}
              >
                <motion.div 
                  className="h-10 w-10 rounded-full bg-teal-100 dark:bg-teal-800/50 flex items-center justify-center"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 1, repeat: Infinity, repeatDelay: 2 }}
                >
                  <CheckCircle2 className="h-6 w-6 text-teal-600 dark:text-teal-400" />
                </motion.div>
                <div>
                  <AlertTitle className="text-teal-700 dark:text-teal-400 text-lg font-semibold">{t("Analysis Complete")}</AlertTitle>
                  <AlertDescription className="text-teal-600 dark:text-teal-300 text-base mt-1">
                    {t("Based on the symptoms you described, here's what our AI suggests:")}
                  </AlertDescription>
                </div>
              </motion.div>
            </Alert>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Card className="overflow-hidden border-teal-100/50 dark:border-teal-900/50 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-teal-500 via-teal-400 to-teal-500"></div>
              <CardHeader className="bg-gradient-to-r from-teal-50/50 to-transparent dark:from-teal-900/20 dark:to-transparent">
                <CardTitle className="text-2xl text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-teal-500 dark:from-teal-400 dark:to-teal-300 font-bold">
                  {t("Possible Conditions")}
                </CardTitle>
                <CardDescription className="text-base">{t("These conditions might be associated with your symptoms")}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {result.possibleConditions.map((condition, index) => (
                  <motion.div 
                    key={index} 
                    className="border-b border-gray-100 dark:border-gray-800 pb-6 last:border-0 last:pb-0"
                    initial={{ x: 50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ type: 'spring', stiffness: 70, delay: 0.1 * index }}
                  >
                    <div className="flex justify-between items-center mb-3">
                      <h3 className="font-semibold text-xl text-teal-800 dark:text-teal-300">{condition.name}</h3>
                      <motion.span 
                        className={`text-sm px-3 py-1.5 font-medium rounded-full 
                          ${index === 0 
                            ? 'bg-teal-100 text-teal-800 dark:bg-teal-900/40 dark:text-teal-300' 
                            : 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300'}`
                        }
                        whileHover={{ scale: 1.05 }}
                      >
                        {condition.probability}
                      </motion.span>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{condition.description}</p>
                  </motion.div>
                ))}
              </CardContent>
            </Card>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Card className="overflow-hidden border-teal-100/50 dark:border-teal-900/50 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-teal-500 via-teal-400 to-teal-500"></div>
              <CardHeader className="bg-gradient-to-r from-teal-50/50 to-transparent dark:from-teal-900/20 dark:to-transparent">
                <CardTitle className="text-2xl text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-teal-500 dark:from-teal-400 dark:to-teal-300 font-bold">
                  {t("Recommendations")}
                </CardTitle>
                <CardDescription className="text-base">{t("Suggested next steps based on your symptoms")}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  {result.recommendations.map((recommendation, index) => (
                    <motion.li 
                      key={index} 
                      className="flex items-start gap-3"
                      initial={{ x: 50, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ type: 'spring', stiffness: 70, delay: 0.15 * index }}
                    >
                      <motion.div 
                        className="h-6 w-6 rounded-full bg-teal-100 dark:bg-teal-900/40 flex items-center justify-center text-teal-600 dark:text-teal-400 mt-0.5 flex-shrink-0"
                        whileHover={{ scale: 1.2, rotate: 5 }}
                      >
                        {index + 1}
                      </motion.div>
                      <p className="text-gray-700 dark:text-gray-300">{recommendation}</p>
                    </motion.li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter className="border-t border-gray-100 dark:border-gray-800 pt-4 mt-4 text-sm text-gray-500 dark:text-gray-400 bg-gradient-to-b from-teal-50/30 to-transparent dark:from-teal-900/10 dark:to-transparent px-6 py-4">
                <p className="italic">{result.disclaimer}</p>
              </CardFooter>
            </Card>
          </motion.div>
        </motion.div>
      )}
    </motion.div>
  )
}
