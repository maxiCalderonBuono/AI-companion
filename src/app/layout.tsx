import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ClerkProvider } from '@clerk/nextjs'
import { ThemeProvider } from '@/components/theme-provider'
import { cn } from '../lib/utils';
import { Toaster } from '@/components/ui/toaster'

const inter = Inter({ subsets: ['latin'] })


export const metadata: Metadata = {
  title: {
    default: "AI-companion",
    template: "%s | ai-companion",
  },
  alternates: { canonical: "https://companionai.vercel.app/" },
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
    url: "https://companionai.vercel.app/",
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
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning={true}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <body className={cn("bg-secondary", inter.className,)}>
            {children}
            <Toaster />
          </body>
        </ThemeProvider>
      </html>
    </ClerkProvider>
  )
}
