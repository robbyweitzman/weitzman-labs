import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import Script from 'next/script'

export const metadata: Metadata = {
  title: "Weitzman Labs",
  description: "Weitzman Labs LLC",
  generator: 'v0.dev',
  icons: {
    icon: '/favicon.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        {children}
        <Script
          src="/_vercel/insights/script.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  )
}