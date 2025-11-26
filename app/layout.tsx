import type React from "react"
import type { Metadata } from "next"
import { Inter, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { SmoothScrollProvider } from "@/components/smooth-scroll"
import "./globals.css"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const geistMono = Geist_Mono({ subsets: ["latin"], variable: "--font-geist-mono" })

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://julieralph.com"

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Julie Ralph, MHA | Healthcare Quality & Patient Safety Professional",
    template: "%s | Julie Ralph, MHA",
  },
  description:
    "Strategic healthcare quality and patient safety professional with 15+ years of experience in quality management systems, root cause analysis, and regulatory readiness (CMS/DNV). Based in Plymouth, MN.",
  keywords: [
    "healthcare quality",
    "patient safety",
    "quality improvement",
    "CMS compliance",
    "DNV accreditation",
    "root cause analysis",
    "quality management systems",
    "Epic EMR",
    "healthcare consultant",
    "Minnesota healthcare",
    "North Memorial Health",
  ],
  authors: [{ name: "Julie Ralph, MHA" }],
  creator: "Julie Ralph",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Julie Ralph, MHA",
    title: "Julie Ralph, MHA | Healthcare Quality & Patient Safety Professional",
    description:
      "Strategic healthcare quality and patient safety professional with 15+ years of experience driving improvement initiatives in inpatient and outpatient settings.",
    images: [
      {
        url: "/images/mom.jpg",
        width: 1200,
        height: 630,
        alt: "Julie Ralph - Healthcare Quality & Patient Safety Professional",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Julie Ralph, MHA | Healthcare Quality & Patient Safety Professional",
    description:
      "Strategic healthcare quality and patient safety professional with 15+ years of experience in quality management systems and regulatory readiness.",
    images: ["/images/mom.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.svg",
        media: "(prefers-color-scheme: light)",
        type: "image/svg+xml",
      },
      {
        url: "/icon-dark-32x32.svg",
        media: "(prefers-color-scheme: dark)",
        type: "image/svg+xml",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.svg",
  },
}

// JSON-LD structured data for better SEO
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Julie Ralph",
  jobTitle: "Healthcare Quality & Patient Safety Professional",
  description:
    "Strategic healthcare quality and patient safety professional with 15+ years of experience in quality management systems, root cause analysis, and regulatory readiness.",
  url: siteUrl,
  image: `${siteUrl}/images/mom.jpg`,
  sameAs: ["https://www.linkedin.com/in/jralph/"],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Plymouth",
    addressRegion: "MN",
    addressCountry: "US",
  },
  alumniOf: {
    "@type": "EducationalOrganization",
    name: "Master of Healthcare Administration (MHA)",
  },
  knowsAbout: [
    "Patient Safety",
    "Quality Improvement",
    "Quality Management Systems",
    "Regulatory Readiness (CMS/DNV)",
    "Root Cause Analysis",
    "Epic EMR",
    "Data Analysis",
    "Government Quality Reporting",
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${geistMono.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans antialiased">
        <SmoothScrollProvider>{children}</SmoothScrollProvider>
        <Analytics />
      </body>
    </html>
  )
}
