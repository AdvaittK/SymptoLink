import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { AuthProvider } from "@/components/auth-provider"
import { LanguageProvider } from "@/components/language-provider"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { AnimatedGradientBackground } from "@/components/ui/animated-gradient-background"
import { Toaster } from "@/components/ui/sonner"
import { getPageTitle } from "@/lib/utils"
import DynamicTitle from "@/components/dynamic-title"

const inter = Inter({ 
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: '#0f172a' },
  ],
}

// Generate dynamic metadata based on route
export async function generateMetadata({ params, searchParams }: {
  params: { slug?: string[] }
  searchParams: { [key: string]: string | string[] | undefined }
}): Promise<Metadata> {
  // Get current URL path from headers
  const pathname = params.slug ? `/${params.slug.join('/')}` : '/'
  
  // Generate dynamic title based on current route
  const title = getPageTitle(pathname)
  
  return {
    title,
    description: "Connect your symptoms to diagnoses and find healthcare providers near you",
    generator: 'v0.dev',
    keywords: ['healthcare', 'symptoms', 'doctors', 'medical', 'diagnosis'],
    authors: [{ name: 'SymptoLink Team' }],
    creator: 'SymptoLink',
    publisher: 'SymptoLink',
    icons: {
      icon: [
        { url: '/images/logo.png', sizes: '32x32', type: 'image/png' },
        { url: '/images/logo.png', sizes: '16x16', type: 'image/png' },
        { url: '/images/logo.png', sizes: '48x48', type: 'image/png' },
      ],
      shortcut: '/images/logo.png',
      apple: [
        { url: '/images/logo.png', sizes: '180x180', type: 'image/png' },
        { url: '/images/logo.png', sizes: '152x152', type: 'image/png' },
        { url: '/images/logo.png', sizes: '120x120', type: 'image/png' },
      ],
    },
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning className={inter.variable}>
      <head>
        <meta name="viewport" content={String(viewport.width)} />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <AuthProvider>
            <LanguageProvider>
              <AnimatedGradientBackground>
                <DynamicTitle />
                <div className="flex min-h-screen flex-col">
                  <Header />
                  <main className="flex-1">{children}</main>
                  <Footer />
                </div>
              </AnimatedGradientBackground>
              <Toaster />
            </LanguageProvider>
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}