"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useTranslation } from "@/hooks/use-translation"
import Link from "next/link"
import { ArrowRight, Mail, Phone } from "lucide-react"

export function ContactSection() {
  const { t } = useTranslation()

  return (
    <section className="w-full py-12 md:py-24 bg-muted/50">
      <div className="container px-4 md:px-6">
        <motion.div
          className="flex flex-col items-center justify-center space-y-4 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">{t("getInTouch")}</h2>
          <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            {t("contactDescription")}
          </p>
        </motion.div>
        <div className="grid gap-6 md:grid-cols-2 lg:gap-12 mt-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Card>
              <CardContent className="p-6">
                <form className="space-y-4">
                  <div className="grid gap-4">
                    <div>
                      <Input placeholder={t("yourName")} />
                    </div>
                    <div>
                      <Input type="email" placeholder={t("yourEmail")} />
                    </div>
                    <div>
                      <Textarea placeholder={t("message")} className="min-h-[120px]" />
                    </div>
                    <Button type="submit" className="w-full">
                      {t("sendMessage")}
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card>
              <CardContent className="p-6">
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold">{t("contactInfo")}</h3>
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <Phone className="h-5 w-5 mr-3 text-primary" />
                      <span>+91 9746 902268</span>
                    </div>
                    <div className="flex items-center">
                      <Mail className="h-5 w-5 mr-3 text-primary" />
                      <span>navarmp@gmail.com</span>
                    </div>
                  </div>
                  <div className="pt-4">
                    <Link href="/contact">
                      <Button variant="outline" className="w-full">
                        {t("moreContactOptions")}
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

