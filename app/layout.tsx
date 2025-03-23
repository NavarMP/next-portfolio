import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { LanguageProvider } from "@/components/language-provider"
import FloatingNav from "@/components/floating-nav"
import SideMenu from "@/components/side-menu"
import CursorEffect from "@/components/cursor-effect"
import AudioPlayer from "@/components/audio-player"
import { cn } from "@/lib/utils"
import { HeaderControls } from "@/components/header-controls"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Navar MP | Web & UI/UX Designer",
  description: "Personal portfolio of Navar MP, a web, UI/UX, and graphic designer",
  manifest: "/manifest.json",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn(inter.className, "min-h-screen bg-background antialiased")}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <LanguageProvider>
            <AudioPlayer />
            <CursorEffect />
            <SideMenu />
            <HeaderControls />
            <div className="relative">
              {children}
              <FloatingNav />
            </div>
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}



import './globals.css'