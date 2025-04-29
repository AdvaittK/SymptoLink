"use client"

import { useEffect } from "react"
import { usePathname } from "next/navigation"
import { getPageTitle } from "@/lib/utils"

/**
 * A component that updates the document title when the pathname changes
 * This ensures the title updates correctly during client-side navigation
 */
export default function DynamicTitle() {
  const pathname = usePathname()
  
  useEffect(() => {
    // Set document title based on current path
    document.title = getPageTitle(pathname)
  }, [pathname])

  // This component doesn't render anything
  return null
}