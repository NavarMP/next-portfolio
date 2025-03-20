"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { useTranslation } from "@/hooks/use-translation"
import {
  Phone,
  Mail,
  MapPin,
  Send,
  Youtube,
  Instagram,
  TextIcon as Telegram,
  Facebook,
  Linkedin,
  Github,
  Twitter,
  ExternalLink,
} from "lucide-react"

export default function ContactPage() {
  const { t } = useTranslation()
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real implementation, this would send the form data to your backend
    console.log(formState)
    alert("Form submitted!")
  }

  const socialLinks = [
    { name: "YouTube", icon: <Youtube />, url: "https://www.youtube.com/@NavarMP" },
    { name: "Instagram", icon: <Instagram />, url: "https://instagram.com/Navar_MP" },
    { name: "Telegram", icon: <Telegram />, url: "https://t.me/NavarMP" },
    { name: "WhatsApp", icon: <Phone />, url: "https://api.whatsapp.com/send?phone=919746902268" },
    { name: "X (Twitter)", icon: <Twitter />, url: "https://x.com/Navar_MP" },
    { name: "LinkedIn", icon: <Linkedin />, url: "https://linkedin.com/in/NavarMP" },
    { name: "Facebook", icon: <Facebook />, url: "https://www.facebook.com/NavarMP" },
    { name: "Behance", icon: <ExternalLink />, url: "https://www.behance.net/NavarMP" },
    { name: "GitHub", icon: <Github />, url: "https://github.com/NavarMP" },
  ]

  return (
    <div className="container mx-auto py-20 px-4">
      <motion.h1
        className="text-4xl md:text-5xl font-bold text-center mb-12"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {t("contact")}
      </motion.h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
          <Card>
            <CardHeader>
              <CardTitle>{t("getInTouch")}</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Input
                    placeholder={t("yourName")}
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <Input
                    type="email"
                    placeholder={t("yourEmail")}
                    name="email"
                    value={formState.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <Input
                    placeholder={t("subject")}
                    name="subject"
                    value={formState.subject}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <Textarea
                    placeholder={t("message")}
                    className="min-h-[150px]"
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    required
                  />
                </div>
                <Button type="submit" className="w-full">
                  <Send className="mr-2 h-4 w-4" />
                  {t("sendMessage")}
                </Button>
              </form>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-8"
        >
          <Card>
            <CardHeader>
              <CardTitle>{t("contactInfo")}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center">
                <Phone className="h-5 w-5 mr-3 text-primary" />
                <span>+91 9746 902268</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 mr-3 text-primary" />
                <span>navarmp@gmail.com</span>
              </div>
              <div className="flex items-center">
                <MapPin className="h-5 w-5 mr-3 text-primary" />
                <span>Kerala, India</span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>{t("socialLinks")}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-3 gap-4">
                {socialLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center justify-center p-3 rounded-lg hover:bg-primary/10 transition-colors"
                  >
                    <div className="text-primary mb-2">{link.icon}</div>
                    <span className="text-xs text-center">{link.name}</span>
                  </a>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}

