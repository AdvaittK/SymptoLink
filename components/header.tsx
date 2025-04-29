"use client"

import { useState } from "react"
import Link from "next/link"
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
import { Menu, X, User, LogOut, Settings } from "lucide-react"
import { useTranslation } from "@/components/language-provider"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { user, signOut } = useAuth()
  const { t } = useTranslation()

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)
  const closeMenu = () => setIsMenuOpen(false)

  return (
    <header className="border-b bg-background/80 backdrop-blur-md sticky top-0 z-40 shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="h-8 w-8 rounded-lg overflow-hidden flex items-center justify-center group-hover:shadow-glow transition-all duration-300">
              <img 
                src="/images/logo.png" 
                alt="SymptoLink Logo" 
                className="h-full w-full object-contain" 
                style={{ maxHeight: "100%", width: "auto" }}
              />
            </div>
            <span className="text-2xl font-bold gradient-text">SymptoLink</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href="/symptoms"
              className="text-gray-700 hover:text-teal-600 dark:text-gray-300 dark:hover:text-teal-500 fancy-link py-1 font-medium"
            >
              {t("Symptoms")}
            </Link>
            <Link
              href="/find-doctors"
              className="text-gray-700 hover:text-teal-600 dark:text-gray-300 dark:hover:text-teal-500 fancy-link py-1 font-medium"
            >
              {t("Find Doctors")}
            </Link>
            <Link
              href="/emergency"
              className="text-gray-700 hover:text-teal-600 dark:text-gray-300 dark:hover:text-teal-500 fancy-link py-1 font-medium"
            >
              {t("Emergency")}
            </Link>
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <ModeToggle />

            {user ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="relative h-10 w-10 rounded-full p-0 border border-teal-200 dark:border-teal-800 hover:shadow-glow transition-shadow duration-300">
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
                  <DropdownMenuItem onClick={signOut} className="py-2 cursor-pointer">
                    <LogOut className="mr-2 h-4 w-4" />
                    <span>{t("Log out")}</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <div className="flex items-center space-x-3">
                <Button asChild variant="outline" className="border-teal-500/30 hover:border-teal-500/60 hover:bg-teal-50/50 dark:hover:bg-teal-950/30">
                  <Link href="/login">{t("Log in")}</Link>
                </Button>
                <Button asChild className="bg-gradient-to-r from-teal-600 to-teal-500 hover:from-teal-500 hover:to-teal-600 hover-glow">
                  <Link href="/register">{t("Sign up")}</Link>
                </Button>
              </div>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center space-x-4 md:hidden">
            <ModeToggle />
            <Button variant="ghost" size="icon" onClick={toggleMenu} aria-label="Toggle Menu">
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t animate-in slide-in-from-top duration-300">
          <div className="container mx-auto px-4 py-6 space-y-6">
            <nav className="flex flex-col space-y-5">
              <Link
                href="/symptoms"
                className="text-gray-700 hover:text-teal-600 dark:text-gray-300 dark:hover:text-teal-500 px-2 py-2 rounded-md hover:bg-teal-50 dark:hover:bg-teal-950/30 transition-colors"
                onClick={closeMenu}
              >
                {t("Symptoms")}
              </Link>
              <Link
                href="/find-doctors"
                className="text-gray-700 hover:text-teal-600 dark:text-gray-300 dark:hover:text-teal-500 px-2 py-2 rounded-md hover:bg-teal-50 dark:hover:bg-teal-950/30 transition-colors"
                onClick={closeMenu}
              >
                {t("Find Doctors")}
              </Link>
              <Link
                href="/emergency"
                className="text-gray-700 hover:text-teal-600 dark:text-gray-300 dark:hover:text-teal-500 px-2 py-2 rounded-md hover:bg-teal-50 dark:hover:bg-teal-950/30 transition-colors"
                onClick={closeMenu}
              >
                {t("Emergency")}
              </Link>
            </nav>

            <div className="flex flex-col space-y-2">
              {user ? (
                <>
                  <Link
                    href="/profile"
                    className="flex items-center px-4 py-2 text-gray-700 hover:text-teal-600 dark:text-gray-300 dark:hover:text-teal-500"
                    onClick={closeMenu}
                  >
                    <User className="mr-2 h-4 w-4" />
                    <span>{t("Profile")}</span>
                  </Link>
                  <Link
                    href="/settings"
                    className="flex items-center px-4 py-2 text-gray-700 hover:text-teal-600 dark:text-gray-300 dark:hover:text-teal-500"
                    onClick={closeMenu}
                  >
                    <Settings className="mr-2 h-4 w-4" />
                    <span>{t("Settings")}</span>
                  </Link>
                  <Button
                    variant="ghost"
                    className="flex items-center justify-start px-4 py-2"
                    onClick={() => {
                      signOut()
                      closeMenu()
                    }}
                  >
                    <LogOut className="mr-2 h-4 w-4" />
                    <span>{t("Log out")}</span>
                  </Button>
                </>
              ) : (
                <>
                  <Button asChild variant="ghost" className="w-full justify-center" onClick={closeMenu}>
                    <Link href="/login">{t("Log in")}</Link>
                  </Button>
                  <Button asChild className="w-full justify-center bg-teal-600 hover:bg-teal-700" onClick={closeMenu}>
                    <Link href="/register">{t("Sign up")}</Link>
                  </Button>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
