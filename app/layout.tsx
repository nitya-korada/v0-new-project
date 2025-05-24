import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/navbar"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Sanjay Kumar Machanapally | Data Scientist & Analyst",
  description: "Professional portfolio of Sanjay Kumar Machanapally, Data Scientist and Data Analyst",
  openGraph: {
    images: [
      {
        url: "/images/profile.png",
        width: 1200,
        height: 630,
        alt: "Sanjay Kumar Machanapally",
      },
    ],
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} bg-black`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
