"use client"

import type React from "react"

import { createContext, useContext, useEffect, useState } from "react"

type User = {
  uid: string
  email: string | null
  displayName: string | null
  photoURL: string | null
}

type AuthContextType = {
  user: User | null
  loading: boolean
  signOut: () => Promise<void>
}

const AuthContext = createContext<AuthContextType>({
  user: null,
  loading: true,
  signOut: async () => {},
})

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Check localStorage for authentication
    const checkAuth = () => {
      // Check if window is defined (client-side only)
      if (typeof window !== "undefined") {
        const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true'
        if (isLoggedIn) {
          const email = localStorage.getItem('userEmail')
          const name = localStorage.getItem('userName') || 'User'
          
          setUser({
            uid: email || 'dummy-user-id',
            email: email,
            displayName: name,
            photoURL: null,
          })
        } else {
          setUser(null)
        }
      }
      setLoading(false)
    }

    // Run on first render and set up event listener for storage changes
    checkAuth()
    
    // Listen for localStorage changes (in case user logs in/out in another tab)
    const handleStorageChange = () => {
      checkAuth()
    }
    
    if (typeof window !== "undefined") {
      window.addEventListener('storage', handleStorageChange)
      
      return () => {
        window.removeEventListener('storage', handleStorageChange)
      }
    }
  }, [])

  const signOut = async () => {
    // Clear localStorage auth data
    if (typeof window !== "undefined") {
      localStorage.removeItem('isLoggedIn')
      localStorage.removeItem('userEmail')
      localStorage.removeItem('userName')
      setUser(null)
    }
  }

  return <AuthContext.Provider value={{ user, loading, signOut }}>{children}</AuthContext.Provider>
}

export const useAuth = () => useContext(AuthContext)
