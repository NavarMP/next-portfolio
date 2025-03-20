"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { useTranslation } from "@/hooks/use-translation"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export function TestimonialsSection() {
  const { t } = useTranslation()

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Marketing Director",
      company: "TechCorp",
      image: "/placeholder.svg?height=100&width=100",
      text: "Working with Navar was an absolute pleasure. The designs delivered were not only visually stunning but also perfectly aligned with our brand identity. Highly recommended!",
    },
    {
      name: "Michael Chen",
      role: "Startup Founder",
      company: "InnovateLabs",
      image: "/placeholder.svg?height=100&width=100",
      text: "Navar transformed our brand identity with exceptional logo and website designs. The attention to detail and creativity exceeded our expectations.",
    },
    {
      name: "Jessica Williams",
      role: "Product Manager",
      company: "DesignHub",
      image: "/placeholder.svg?height=100&width=100",
      text: "The UI/UX designs created for our app significantly improved user engagement. Navar has a unique ability to combine aesthetics with functionality.",
    },
  ]

  return (
    <section className="w-full py-12 md:py-24">
      <div className="container px-4 md:px-6">
        <motion.div
          className="flex flex-col items-center justify-center space-y-4 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">{t("testimonials")}</h2>
          <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            {t("testimonialsDescription")}
          </p>
        </motion.div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-12 mt-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card>
                <CardContent className="p-6">
                  <div className="flex flex-col items-center space-y-4">
                    <Avatar className="h-16 w-16">
                      <AvatarImage src={testimonial.image} alt={testimonial.name} />
                      <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div className="space-y-2 text-center">
                      <p className="text-muted-foreground italic">"{testimonial.text}"</p>
                      <div>
                        <h3 className="font-semibold">{testimonial.name}</h3>
                        <p className="text-sm text-muted-foreground">
                          {testimonial.role}, {testimonial.company}
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

