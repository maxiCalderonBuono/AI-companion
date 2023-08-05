import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })


export const metadata: Metadata = {
  title: {
    default: "AI-companion",
    template: "%s | ai-companion",
  },
  alternates: { canonical: "" },
  description: 'Have you ever dreamed of talking with a superstar? Discover it here and now!',
  keywords: [
    "AI",
    "artificial intelligence",
    "Next.js",
    "Prisma",
    "Planetscale",
    "ShadcnUI"
  ],
  authors: [
    {
      name: "maxiCalderónBuono",
      url: "https://www.maxicalderon.dev/",
    },
  ],
  creator: "maxiCalderónBuono",
  icons: {
    shortcut: '../favicon.ico',
  },
  openGraph: {
    title: "AI-companion",
    description:
      "Have you ever dreamed of talking with a superstar? Discover it here and now!.",
    url: "",
    siteName: "AI-companion",
    images: [
      {
        url: "https://i.postimg.cc/brg30jKV/AI-companion.jpg",
        width: 1200,
        height: 630,
      },
    ],

    locale: "en",
  },
  robots: {
    index: true,
    googleBot: {
      index: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    title: "AI-companion",
    card: "summary_large_image",
  },


};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
