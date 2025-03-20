"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { useTranslation } from "@/hooks/use-translation"
import { useRouter } from "next/navigation"
import { Home, Briefcase, User, MessageSquare, Search, FileText, Image, Mail } from "lucide-react"

export function SearchDialog({ children }: { children: React.ReactNode }) {
  const { t } = useTranslation()
  const router = useRouter()
  const [open, setOpen] = useState(false)
  const [search, setSearch] = useState("")
  const [results, setResults] = useState<any[]>([])

  // Mock search results based on the search term
  useEffect(() => {
    if (!search.trim()) {
      setResults([])
      return
    }

    const searchLower = search.toLowerCase()

    const allItems = [
      {
        id: "home",
        title: t("home"),
        type: "page",
        url: "/",
        icon: <Home className="h-4 w-4" />,
      },
      {
        id: "portfolio",
        title: t("portfolio"),
        type: "page",
        url: "/portfolio",
        icon: <Briefcase className="h-4 w-4" />,
      },
      {
        id: "resume",
        title: t("resume"),
        type: "page",
        url: "/resume",
        icon: <User className="h-4 w-4" />,
      },
      {
        id: "contact",
        title: t("contact"),
        type: "page",
        url: "/contact",
        icon: <MessageSquare className="h-4 w-4" />,
      },
      {
        id: "logo-design",
        title: t("logoDesign"),
        type: "portfolio",
        url: "/portfolio?category=logo",
        icon: <Image className="h-4 w-4" />,
      },
      {
        id: "web-design",
        title: t("webDesign"),
        type: "portfolio",
        url: "/portfolio?category=website",
        icon: <Image className="h-4 w-4" />,
      },
      {
        id: "app-design",
        title: t("appDesign"),
        type: "portfolio",
        url: "/portfolio?category=app",
        icon: <Image className="h-4 w-4" />,
      },
      {
        id: "3d-design",
        title: t("3dDesign"),
        type: "portfolio",
        url: "/portfolio?category=3d",
        icon: <Image className="h-4 w-4" />,
      },
      {
        id: "cv",
        title: t("downloadCV"),
        type: "document",
        url: "/resume",
        icon: <FileText className="h-4 w-4" />,
      },
      {
        id: "email",
        title: "navarmp@gmail.com",
        type: "contact",
        url: "mailto:navarmp@gmail.com",
        icon: <Mail className="h-4 w-4" />,
      },
    ]

    const filtered = allItems.filter(
      (item) => item.title.toLowerCase().includes(searchLower) || item.type.toLowerCase().includes(searchLower),
    )

    setResults(filtered)
  }, [search, t])

  const handleSelect = (url: string) => {
    setOpen(false)
    router.push(url)
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{t("search")}</DialogTitle>
        </DialogHeader>
        <div className="space-y-4 py-4">
          <div className="flex items-center space-x-2">
            <Search className="h-4 w-4 text-muted-foreground" />
            <Input
              placeholder={t("searchPlaceholder")}
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="flex-1"
              autoFocus
            />
          </div>

          {results.length > 0 && (
            <div className="space-y-2 max-h-[300px] overflow-y-auto">
              {results.map((result) => (
                <button
                  key={result.id}
                  className="flex items-center space-x-2 w-full p-2 rounded-md hover:bg-muted text-left"
                  onClick={() => handleSelect(result.url)}
                >
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-muted">{result.icon}</div>
                  <div>
                    <div className="font-medium">{result.title}</div>
                    <div className="text-xs text-muted-foreground capitalize">{result.type}</div>
                  </div>
                </button>
              ))}
            </div>
          )}

          {search && results.length === 0 && (
            <div className="text-center py-4 text-muted-foreground">{t("noResults")}</div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  )
}

