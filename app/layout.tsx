import type React from "react"
import type { Metadata } from "next"
import { Space_Grotesk } from "next/font/google"
import "./globals.css"

// Optimize font loading
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
  preload: true,
})

export const metadata: Metadata = {
  title: "Converzia - Outreach Reimagined. By AI.",
  description: "Meet Converzia — your AI sales agent that crafts cold emails like warm intros — at scale.",
  viewport: "width=device-width, initial-scale=1",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Preload critical assets */}
        <link rel="preload" href="/converzia-logo.png" as="image" />
      </head>
      <body className={spaceGrotesk.className}>{children}</body>
    </html>
  )
}
