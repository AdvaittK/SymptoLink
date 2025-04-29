import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export function middleware(request: NextRequest) {
  // Get the pathname
  const path = request.nextUrl.pathname

  // For the dummy auth implementation, we'll disable route protection
  // and just add security headers to all responses

  // Add security headers to all responses
  const response = NextResponse.next()

  // Set security headers
  response.headers.set("X-Frame-Options", "DENY")
  response.headers.set("X-Content-Type-Options", "nosniff")
  response.headers.set("Referrer-Policy", "strict-origin-when-cross-origin")
  response.headers.set("Permissions-Policy", "camera=(), microphone=(), geolocation=(self)")
  response.headers.set("Content-Security-Policy", "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline'; img-src 'self' data: blob:; font-src 'self'; connect-src 'self'")

  return response
}

export const config = {
  matcher: [
    // Match all routes except static files, api routes, and _next
    "/((?!_next/static|_next/image|favicon.ico|api/).*)",
  ],
}
