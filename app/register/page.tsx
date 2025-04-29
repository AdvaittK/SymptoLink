"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
// import { signUp } from "@/lib/firebase/auth" - Not using Firebase auth for now
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { AlertCircle } from "lucide-react"
import Link from "next/link"
import { useTranslation } from "@/components/language-provider"

export default function RegisterPage() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [error, setError] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()
  const { t } = useTranslation()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError("")

    if (password !== confirmPassword) {
      setError(t("Passwords do not match."))
      setIsLoading(false)
      return
    }

    if (password.length < 6) {
      setError(t("Password should be at least 6 characters."))
      setIsLoading(false)
      return
    }

    try {
      // Dummy registration - always succeeds as long as validations pass
      // Store auth state in localStorage
      localStorage.setItem('isLoggedIn', 'true')
      localStorage.setItem('userEmail', email)
      localStorage.setItem('userName', name)
      
      // Redirect to home page
      router.push("/")
    } catch (err: any) {
      console.error("Registration error:", err)
      setError(t("Failed to create account. Please try again."))
      setIsLoading(false)
    }
  }

  return (
    <div className="container mx-auto px-4 py-12 flex flex-col items-center">
      <div className="mb-10 text-center">
        <h1 className="text-3xl font-bold gradient-text mb-3">{t("Join SymptoLink")}</h1>
        <p className="text-gray-600 dark:text-gray-400 max-w-md">
          {t("Create an account to access personalized health recommendations and tools")}
        </p>
      </div>
      
      <Card className="w-full max-w-md border-teal-100 dark:border-teal-900/30 overflow-hidden animate-in fade-in-50 duration-500">
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-teal-500 via-teal-400 to-teal-500"></div>
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl">{t("Sign Up")}</CardTitle>
          <CardDescription className="text-gray-500 dark:text-gray-400">
            {t("Create a new account to get started")}
          </CardDescription>
          <Alert className="mt-2 bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400 border border-blue-200 dark:border-blue-800">
            <AlertDescription>
              Demo mode: Enter any name, email and password (min 6 characters)
            </AlertDescription>
          </Alert>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            {error && (
              <Alert variant="destructive" className="animate-in fade-in-50 slide-in-from-top-5 duration-300">
                <AlertCircle className="h-4 w-4" />
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}
            <div className="space-y-2">
              <Label htmlFor="name" className="text-gray-700 dark:text-gray-300">{t("Full Name")}</Label>
              <Input 
                id="name" 
                value={name} 
                onChange={(e) => setName(e.target.value)} 
                className="border-gray-300 dark:border-gray-700 focus:border-teal-500 focus:ring-teal-500"
                placeholder="John Doe"
                required 
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email" className="text-gray-700 dark:text-gray-300">{t("Email")}</Label>
              <Input 
                id="email" 
                type="email" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)}
                className="border-gray-300 dark:border-gray-700 focus:border-teal-500 focus:ring-teal-500"
                placeholder="your@email.com"
                required 
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password" className="text-gray-700 dark:text-gray-300">{t("Password")}</Label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="border-gray-300 dark:border-gray-700 focus:border-teal-500 focus:ring-teal-500"
                placeholder="••••••••" 
                required
              />
              <p className="text-xs text-gray-500 dark:text-gray-400">{t("Must be at least 6 characters")}</p>
            </div>
            <div className="space-y-2">
              <Label htmlFor="confirmPassword" className="text-gray-700 dark:text-gray-300">{t("Confirm Password")}</Label>
              <Input
                id="confirmPassword"
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="border-gray-300 dark:border-gray-700 focus:border-teal-500 focus:ring-teal-500"
                placeholder="••••••••"
                required
              />
            </div>
            <Button 
              type="submit" 
              className="w-full bg-gradient-to-r from-teal-600 to-teal-500 hover:from-teal-500 hover:to-teal-600 py-6 hover-glow text-lg mt-2" 
              disabled={isLoading}
            >
              {isLoading ? t("Creating account...") : t("Create Account")}
            </Button>
          </form>
          
          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-200 dark:border-gray-800"></div>
            </div>
            <div className="relative flex justify-center text-xs">
              <span className="px-2 bg-white dark:bg-gray-950 text-gray-500">
                {t("OR SIGN UP WITH")}
              </span>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <Button variant="outline" className="w-full border-gray-300 dark:border-gray-700" onClick={() => {
              localStorage.setItem('isLoggedIn', 'true');
              localStorage.setItem('userEmail', 'google@example.com');
              localStorage.setItem('userName', 'Google User');
              router.push("/");
            }}>
              Google
            </Button>
            <Button variant="outline" className="w-full border-gray-300 dark:border-gray-700" onClick={() => {
              localStorage.setItem('isLoggedIn', 'true');
              localStorage.setItem('userEmail', 'apple@example.com');
              localStorage.setItem('userName', 'Apple User');
              router.push("/");
            }}>
              Apple
            </Button>
          </div>
        </CardContent>
        <CardFooter className="bg-gray-50/50 dark:bg-gray-900/40 py-4 border-t border-gray-100 dark:border-gray-800 flex flex-col">
          <p className="text-center w-full text-sm text-gray-600 dark:text-gray-400">
            {t("Already have an account?")}{" "}
            <Link 
              href="/login" 
              className="text-teal-600 dark:text-teal-400 hover:text-teal-700 dark:hover:text-teal-300 font-medium transition-colors"
            >
              {t("Log in")}
            </Link>
          </p>
        </CardFooter>
      </Card>
      
      <div className="mt-8 text-xs text-center text-gray-500 max-w-md">
        <p>{t("By signing up, you agree to our")} 
          <Link href="/terms" className="text-teal-600 dark:text-teal-400 hover:underline mx-1">{t("Terms of Service")}</Link> 
          {t("and")}
          <Link href="/privacy" className="text-teal-600 dark:text-teal-400 hover:underline mx-1">{t("Privacy Policy")}</Link>
        </p>
      </div>
    </div>
  )
}