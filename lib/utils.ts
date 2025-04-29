import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getPageTitle(pathname: string): string {
  // Base site name
  const baseName = "SymptoLink"
  
  // Default title for homepage
  if (pathname === "/") {
    return `${baseName} - Healthcare Platform`
  }
  
  // Strip leading slash and split path
  const path = pathname.substring(1)
  
  // Map of paths to titles
  const pageTitles: Record<string, string> = {
    'symptoms': 'Symptom Checker',
    'find-doctors': 'Find Doctors',
    'emergency': 'Emergency Services',
    'login': 'Login',
    'register': 'Create Account',
  }
  
  // Get title from map, or capitalize path if not found
  const pageTitle = pageTitles[path] || 
    path.split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ')
  
  // Return formatted title
  return `${pageTitle} - ${baseName}`
}
