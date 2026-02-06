'use client'

import '@/styles/globals.css'
import { Noto_Sans } from 'next/font/google'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

// Initialize Noto Sans font
const notoSans = Noto_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  display: 'swap',
  variable: '--font-noto-sans',
})


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="en" className={notoSans.className}>
      <head>
        <title>Title</title>
        <meta name="description" content="description" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* Add Open Graph meta tags */}
        <meta property="og:title" content="Title" />
        <meta property="og:description" content="description" />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://stg.bengoshicchi.jp/images/logo.png"
        />
        <meta property="og:site_name" content="Title" />
        <meta property="og:locale" content="ja_JP" />
        <meta property="og:locale:alternate" content="en_US" />
        {/* Facebook SDK will be loaded client-side only */}
      </head>
      <body className="flex min-h-screen flex-col text-[#262221] md:min-w-[980px]">
        <Header />
          {children}
          <Footer />
      </body>
    </html>
  );
}