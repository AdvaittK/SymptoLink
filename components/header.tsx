"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/mode-toggle"
import { useAuth } from "@/components/auth-provider"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { Menu, X, User, LogOut, Settings, Bell, Home, Stethoscope, AlertCircle } from "lucide-react"
import { useTranslation } from "@/components/language-provider"
import { cn } from "@/lib/utils"
import { motion } from "framer-motion"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { user, signOut } = useAuth()
  const { t } = useTranslation()
  const pathname = usePathname()

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)
  const closeMenu = () => setIsMenuOpen(false)
  
  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY
      if (offset > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  // Check if link is active
  const isActive = (path: string) => {
    return pathname === path
  }

  return (
    <header className={cn(
      "border-b sticky top-0 z-40 transition-all duration-300 backdrop-blur-md",
      scrolled 
        ? "bg-background/90 shadow-md py-2" 
        : "bg-background/70 shadow-sm py-4"
    )}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            <div className={cn(
              "rounded-lg overflow-hidden flex items-center justify-center transition-all duration-300",
              scrolled ? "h-7 w-7" : "h-8 w-8",
              "group-hover:shadow-[0_0_15px_rgba(45,212,191,0.5)] group-hover:scale-105"
            )}>
              <img 
                src="/images/logo.png" 
                alt="SymptoLink Logo" 
                className="h-full w-full object-contain" 
                style={{ borderRadius: '0.5rem' }}
              />
            </div>
            <span className={cn(
              "font-bold bg-clip-text text-transparent bg-gradient-to-r from-teal-600 to-teal-500 transition-all duration-300",
              scrolled ? "text-xl" : "text-2xl"
            )}>
              SymptoLink
            </span>
          </Link>

          {/* Desktop Navigation */}
          <NavigationMenu className="hidden lg:flex">
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link href="/symptoms" legacyBehavior passHref>
                  <NavigationMenuLink 
                    className={cn(
                      navigationMenuTriggerStyle(),
                      isActive("/symptoms") && "bg-accent text-accent-foreground"
                    )}
                  >
                    <Stethoscope className="mr-2 h-4 w-4" />
                    {t("Symptoms")}
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              
              <NavigationMenuItem>
                <Link href="/find-doctors" legacyBehavior passHref>
                  <NavigationMenuLink 
                    className={cn(
                      navigationMenuTriggerStyle(),
                      isActive("/find-doctors") && "bg-accent text-accent-foreground"
                    )}
                  >
                    <User className="mr-2 h-4 w-4" />
                    {t("Find Doctors")}
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              
              <NavigationMenuItem>
                <Link href="/emergency" legacyBehavior passHref>
                  <NavigationMenuLink 
                    className={cn(
                      navigationMenuTriggerStyle(),
                      isActive("/emergency") && "bg-accent text-accent-foreground"
                    )}
                  >
                    <AlertCircle className="mr-2 h-4 w-4" />
                    {t("Emergency")}
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <ModeToggle />

            {/* Notifications */}
            {user && (
              <Button variant="ghost" size="icon" className="rounded-full relative">
                <Bell className="h-5 w-5" />
                <span className="absolute -top-1 -right-1 bg-red-500 rounded-full w-4 h-4 text-[10px] flex items-center justify-center text-white">
                  2
                </span>
              </Button>
            )}

            {user ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button 
                    variant="ghost" 
                    className="relative h-10 w-10 rounded-full p-0 border border-teal-200 dark:border-teal-800 hover:shadow-[0_0_15px_rgba(45,212,191,0.5)] transition-shadow duration-300"
                  >
                    <Avatar className="h-9 w-9">
                      <AvatarImage src={user.photoURL || ""} alt={user.displayName || "User"} />
                      <AvatarFallback className="bg-gradient-to-br from-teal-500 to-teal-700 text-white">
                        {user.displayName?.charAt(0) || "U"}
                      </AvatarFallback>
                    </Avatar>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56 p-1">
                  <div className="flex items-center gap-2 p-2">
                    <Avatar className="h-10 w-10">
                      <AvatarImage src={user.photoURL || ""} alt={user.displayName || "User"} />
                      <AvatarFallback className="bg-gradient-to-br from-teal-500 to-teal-700 text-white">
                        {user.displayName?.charAt(0) || "U"}
                      </AvatarFallback>
                    </Avatar>
                    <div className="text-sm">
                      <p className="font-medium">{user.displayName || "User"}</p>
                      <p className="text-xs text-muted-foreground truncate max-w-[180px]">{user.email}</p>
                    </div>
                  </div>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem asChild className="py-2 cursor-pointer">
                    <Link href="/profile" className="flex items-center">
                      <User className="mr-2 h-4 w-4" />
                      <span>{t("Profile")}</span>
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild className="py-2 cursor-pointer">
                    <Link href="/settings" className="flex items-center">
                      <Settings className="mr-2 h-4 w-4" />
                      <span>{t("Settings")}</span>
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={signOut} className="py-2 cursor-pointer text-red-500 hover:text-red-600 focus:text-red-600">
                    <LogOut className="mr-2 h-4 w-4" />
                    <span>{t("Log out")}</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <div className="flex items-center space-x-3">
                <Button 
                  asChild 
                  variant="outline" 
                  className="border-teal-500/30 hover:border-teal-500/60 hover:bg-teal-50/50 dark:hover:bg-teal-950/30"
                >
                  <Link href="/login">{t("Log in")}</Link>
                </Button>
                <Button 
                  asChild 
                  className="bg-gradient-to-r from-teal-600 to-teal-500 hover:from-teal-500 hover:to-teal-600 shadow-sm hover:shadow-[0_0_15px_rgba(45,212,191,0.4)] transition-shadow"
                >
                  <Link href="/register">{t("Sign up")}</Link>
                </Button>
              </div>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center space-x-4 md:hidden">
            <ModeToggle />
            <Button variant="ghost" size="icon" onClick={toggleMenu} aria-label="Toggle Menu" className="relative">
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              {user && (
                <span className="absolute -top-1 -right-1 bg-red-500 rounded-full w-2 h-2"></span>
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div 
          className="md:hidden border-t"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="container mx-auto px-4 py-6 space-y-6">
            <nav className="flex flex-col space-y-1">
              <Link
                href="/"
                className={cn(
                  "flex items-center space-x-3 px-3 py-3 rounded-md transition-colors",
                  isActive("/") 
                    ? "bg-teal-50 text-teal-700 dark:bg-teal-900/30 dark:text-teal-400 font-medium" 
                    : "hover:bg-muted"
                )}
                onClick={closeMenu}
              >
                <Home className="h-5 w-5" />
                <span>{t("Home")}</span>
              </Link>
              
              <Link
                href="/symptoms"
                className={cn(
                  "flex items-center space-x-3 px-3 py-3 rounded-md transition-colors",
                  isActive("/symptoms") 
                    ? "bg-teal-50 text-teal-700 dark:bg-teal-900/30 dark:text-teal-400 font-medium" 
                    : "hover:bg-muted"
                )}
                onClick={closeMenu}
              >
                <Stethoscope className="h-5 w-5" />
                <span>{t("Symptoms")}</span>
              </Link>
              
              <Link
                href="/find-doctors"
                className={cn(
                  "flex items-center space-x-3 px-3 py-3 rounded-md transition-colors",
                  isActive("/find-doctors") 
                    ? "bg-teal-50 text-teal-700 dark:bg-teal-900/30 dark:text-teal-400 font-medium" 
                    : "hover:bg-muted"
                )}
                onClick={closeMenu}
              >
                <User className="h-5 w-5" />
                <span>{t("Find Doctors")}</span>
              </Link>
              
              <Link
                href="/emergency"
                className={cn(
                  "flex items-center space-x-3 px-3 py-3 rounded-md transition-colors",
                  isActive("/emergency") 
                    ? "bg-teal-50 text-teal-700 dark:bg-teal-900/30 dark:text-teal-400 font-medium" 
                    : "hover:bg-muted"
                )}
                onClick={closeMenu}
              >
                <AlertCircle className="h-5 w-5" />
                <span>{t("Emergency")}</span>
              </Link>
            </nav>

            <div className="border-t pt-4">
              {user ? (
                <div className="space-y-3">
                  <div className="flex items-center gap-3 px-3 py-2">
                    <Avatar className="h-10 w-10">
                      <AvatarImage src={user.photoURL || ""} alt={user.displayName || "User"} />
                      <AvatarFallback className="bg-gradient-to-br from-teal-500 to-teal-700 text-white">
                        {user.displayName?.charAt(0) || "U"}
                      </AvatarFallback>
                    </Avatar>
                    <div className="text-sm">
                      <p className="font-medium">{user.displayName || "User"}</p>
                      <p className="text-xs text-muted-foreground truncate max-w-[180px]">{user.email}</p>
                    </div>
                  </div>
                  
                  <Link
                    href="/profile"
                    className="flex items-center px-3 py-2 hover:bg-muted rounded-md"
                    onClick={closeMenu}
                  >
                    <User className="mr-3 h-4 w-4" />
                    <span>{t("Profile")}</span>
                  </Link>
                  
                  <Link
                    href="/settings"
                    className="flex items-center px-3 py-2 hover:bg-muted rounded-md"
                    onClick={closeMenu}
                  >
                    <Settings className="mr-3 h-4 w-4" />
                    <span>{t("Settings")}</span>
                  </Link>
                  
                  <Button
                    variant="ghost"
                    className="flex items-center justify-start w-full px-3 py-2 text-red-500 hover:bg-red-50 dark:hover:bg-red-950/20 hover:text-red-600 rounded-md"
                    onClick={() => {
                      signOut()
                      closeMenu()
                    }}
                  >
                    <LogOut className="mr-3 h-4 w-4" />
                    <span>{t("Log out")}</span>
                  </Button>
                </div>
              ) : (
                <div className="flex flex-col space-y-3 px-2">
                  <Button asChild variant="outline" className="w-full justify-center" onClick={closeMenu}>
                    <Link href="/login">{t("Log in")}</Link>
                  </Button>
                  <Button 
                    asChild 
                    className="w-full justify-center bg-gradient-to-r from-teal-600 to-teal-500" 
                    onClick={closeMenu}
                  >
                    <Link href="/register">{t("Sign up")}</Link>
                  </Button>
                </div>
              )}
            </div>
          </div>
        </motion.div>
      )}
    </header>
  )
}
