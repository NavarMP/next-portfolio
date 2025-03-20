"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useTranslation } from "@/hooks/use-translation"
import { cn } from "@/lib/utils"
import { Home, Briefcase, User, MessageSquare } from "lucide-react"

export default function FloatingNav() {
  const pathname = usePathname()
  const { t } = useTranslation()
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false)
      } else {
        setIsVisible(true)
      }

      setLastScrollY(currentScrollY)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [lastScrollY])

  const navItems = [
    { href: "/", label: t("home"), icon: <Home className="h-5 w-5" /> },
    { href: "/portfolio", label: t("portfolio"), icon: <Briefcase className="h-5 w-5" /> },
    { href: "/resume", label: t("resume"), icon: <User className="h-5 w-5" /> },
    { href: "/contact", label: t("contact"), icon: <MessageSquare className="h-5 w-5" /> },
  ]

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed bottom-6 left-0 right-0 z-50 flex justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.2 }}
        >
          <nav className="flex items-center justify-between rounded-full border bg-background/80 px-4 py-2 backdrop-blur-md">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "relative flex h-10 w-10 items-center justify-center rounded-full",
                  pathname === item.href ? "text-primary" : "text-muted-foreground hover:text-foreground",
                )}
              >
                {pathname === item.href && (
                  <motion.div
                    layoutId="bubble"
                    className="absolute inset-0 z-10 rounded-full bg-primary/10"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <span className="relative z-20">{item.icon}</span>
                <span className="sr-only">{item.label}</span>
              </Link>
            ))}
          </nav>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

