import type React from "react"
import type { Metadata } from "next"
import { Space_Grotesk } from "next/font/google"
import "./globals.css"

// Optimize font loading
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
  preload: true,
  variable: "--font-space-grotesk",
})

export const metadata: Metadata = {
  title: "Converzia - AI-Powered B2B Sales Outreach | Personalized Cold Emails at Scale",
  description:
    "Transform your B2B outreach with Converzia's AI. Generate personalized cold emails in 3 seconds that feel like warm intros. Trusted by 3,000+ teams across 14 countries. 18% average reply rate.",
  keywords:
    "AI sales outreach, cold email automation, B2B lead generation, personalized emails, sales automation, AI email writer, prospect outreach, sales tools",
  authors: [{ name: "Ujjwal Tiwari" }, { name: "Bhaskar Gupta" }],
  creator: "Converzia Team",
  publisher: "Converzia",
  robots: "index, follow",
  viewport: "width=device-width, initial-scale=1, maximum-scale=5",
  themeColor: "#6366f1",
  colorScheme: "light",
  category: "Business Software",
  classification: "Business",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://converzia.com",
    siteName: "Converzia",
    title: "Converzia - AI-Powered B2B Sales Outreach",
    description:
      "Generate personalized cold emails in 3 seconds with AI. Transform prospects into customers with emails that feel like warm intros.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Converzia - AI Sales Outreach Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Converzia - AI-Powered B2B Sales Outreach",
    description: "Generate personalized cold emails in 3 seconds with AI. 18% average reply rate.",
    images: ["/twitter-image.jpg"],
    creator: "@converzia",
  },
  alternates: {
    canonical: "https://converzia.com",
  },
  verification: {
    google: "your-google-verification-code",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`scroll-smooth ${spaceGrotesk.variable}`}>
      <head>
        {/* Preload critical assets */}
        <link rel="preload" href="https://i.ibb.co/Vc43TQvR/converzia-logo.png" as="image" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />

        {/* Calendly badge widget CSS */}
        <link href="https://assets.calendly.com/assets/external/widget.css" rel="stylesheet" />

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              name: "Converzia",
              description: "AI-powered B2B sales outreach platform that generates personalized cold emails",
              url: "https://converzia.com",
              applicationCategory: "BusinessApplication",
              operatingSystem: "Web",
              offers: {
                "@type": "Offer",
                price: "0",
                priceCurrency: "USD",
                description: "Free demo available",
              },
              creator: {
                "@type": "Organization",
                name: "Converzia",
                founder: [
                  {
                    "@type": "Person",
                    name: "Ujjwal Tiwari",
                  },
                  {
                    "@type": "Person",
                    name: "Bhaskar Gupta",
                  },
                ],
              },
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.9",
                ratingCount: "3000",
              },
            }),
          }}
        />
      </head>
      <body className={`${spaceGrotesk.className} antialiased`}>
        <noscript>
          <div style={{ padding: "20px", textAlign: "center", backgroundColor: "#f3f4f6" }}>
            This website requires JavaScript to function properly. Please enable JavaScript in your browser.
          </div>
        </noscript>
        {children}
      </body>
    </html>
  )
}
