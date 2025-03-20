"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useTranslation } from "@/hooks/use-translation"
import { cn } from "@/lib/utils"
import {
  Home,
  Briefcase,
  User,
  MessageSquare,
  Menu,
  X,
  Youtube,
  Instagram,
  TextIcon as Telegram,
  Phone,
  Twitter,
  Linkedin,
  Facebook,
  Github,
  ExternalLink,
} from "lucide-react"
import { Button } from "@/components/ui/button"

export default function SideMenu() {
  const pathname = usePathname()
  const { t } = useTranslation()
  const [isOpen, setIsOpen] = useState(false)
  const [isHovering, setIsHovering] = useState(false)
  const [hoverTimeout, setHoverTimeout] = useState<NodeJS.Timeout | null>(null)

  const handleMouseEnter = () => {
    if (hoverTimeout) clearTimeout(hoverTimeout)
    setIsHovering(true)
  }

  const handleMouseLeave = () => {
    const timeout = setTimeout(() => {
      setIsHovering(false)
    }, 300)
    setHoverTimeout(timeout as NodeJS.Timeout)
  }

  useEffect(() => {
    return () => {
      if (hoverTimeout) clearTimeout(hoverTimeout)
    }
  }, [hoverTimeout])

  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  const navItems = [
    { href: "/", label: t("home"), icon: <Home className="h-5 w-5 mr-2" /> },
    { href: "/portfolio", label: t("portfolio"), icon: <Briefcase className="h-5 w-5 mr-2" /> },
    { href: "/resume", label: t("resume"), icon: <User className="h-5 w-5 mr-2" /> },
    { href: "/contact", label: t("contact"), icon: <MessageSquare className="h-5 w-5 mr-2" /> },
  ]

  const socialLinks = [
    { name: "YouTube", icon: <Youtube className="h-5 w-5" />, url: "https://www.youtube.com/@NavarMP" },
    { name: "Instagram", icon: <Instagram className="h-5 w-5" />, url: "https://instagram.com/Navar_MP" },
    { name: "Telegram", icon: <Telegram className="h-5 w-5" />, url: "https://t.me/NavarMP" },
    { name: "WhatsApp", icon: <Phone className="h-5 w-5" />, url: "https://api.whatsapp.com/send?phone=919746902268" },
    { name: "X (Twitter)", icon: <Twitter className="h-5 w-5" />, url: "https://x.com/Navar_MP" },
    { name: "LinkedIn", icon: <Linkedin className="h-5 w-5" />, url: "https://linkedin.com/in/NavarMP" },
    { name: "Facebook", icon: <Facebook className="h-5 w-5" />, url: "https://www.facebook.com/NavarMP" },
    { name: "Behance", icon: <ExternalLink className="h-5 w-5" />, url: "https://www.behance.net/NavarMP" },
    { name: "GitHub", icon: <Github className="h-5 w-5" />, url: "https://github.com/NavarMP" },
  ]

  return (
    <>
      <div
        className="fixed left-0 top-0 bottom-0 w-2 z-40"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      />

      <Button
        variant="outline"
        size="icon"
        className="fixed top-4 left-4 z-50 rounded-full"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
      </Button>

      <AnimatePresence>
        {(isOpen || isHovering) && (
          <motion.div
            className="fixed inset-y-0 left-0 z-40 w-64 bg-background/95 backdrop-blur-sm border-r shadow-lg"
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ type: "spring", bounce: 0, duration: 0.4 }}
          >
            <div className="flex flex-col h-full p-6">
              <div className="flex items-center justify-center py-6">
                <Link href="/" className="text-2xl font-bold">
                  Navar MP
                </Link>
              </div>

              <nav className="space-y-2 mt-6">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "flex items-center px-4 py-2 rounded-lg transition-colors",
                      pathname === item.href ? "bg-primary/10 text-primary" : "hover:bg-muted",
                    )}
                  >
                    {item.icon}
                    <span>{item.label}</span>
                  </Link>
                ))}
              </nav>

              <div className="mt-auto">
                <h3 className="text-sm font-semibold mb-2">{t("socialLinks")}</h3>
                <div className="grid grid-cols-3 gap-2">
                  {socialLinks.map((link, index) => (
                    <a
                      key={index}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex flex-col items-center justify-center p-2 rounded-lg hover:bg-primary/10 transition-colors"
                    >
                      <div className="text-primary">{link.icon}</div>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

