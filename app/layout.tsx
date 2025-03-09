import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { Analytics } from '@vercel/analytics/next'

export const metadata: Metadata = {
  title: "Weitzman Labs",
  description: "Weitzman Labs LLC",
  generator: 'v0.dev'
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
        <Analytics />
      </body>
    </html>
  )
}
