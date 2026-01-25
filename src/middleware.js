import { NextResponse } from "next/server";

export function middleware(request) {
  const url = request.nextUrl.clone();
  
  // Check if the hostname starts with "www."
  if (url.hostname.startsWith("www.")) {
    // Remove "www." from the hostname
    url.hostname = url.hostname.replace("www.", "");
    
    // Return a 301 Permanent Redirect
    return NextResponse.redirect(url, 301);
  }

  // Continue to the next middleware or request handler
  return NextResponse.next();
}

export const config = {
  // Apply to all routes
  matcher: "/:path*",
};
