"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useTranslation } from "@/hooks/use-translation"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export function ProjectsSection() {
  const { t } = useTranslation()

  const featuredProjects = [
    {
      title: "E-commerce Redesign",
      category: "website",
      image: "/placeholder.svg?height=400&width=600",
      description:
        "Complete redesign of an e-commerce platform focusing on user experience and conversion optimization.",
    },
    {
      title: "Brand Identity",
      category: "logo",
      image: "/placeholder.svg?height=400&width=600",
      description:
        "Comprehensive brand identity design including logo, color palette, typography, and brand guidelines.",
    },
    {
      title: "Mobile App UI",
      category: "app",
      image: "/placeholder.svg?height=400&width=600",
      description:
        "User interface design for a fitness tracking mobile application with a focus on intuitive navigation.",
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
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">{t("featuredProjects")}</h2>
          <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            {t("projectsDescription")}
          </p>
        </motion.div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-12 mt-8">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <Card className="overflow-hidden">
                <div className="relative h-60">
                  <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
                </div>
                <CardContent className="p-6">
                  <div className="mb-2">
                    <span className="inline-block bg-primary/10 text-primary text-xs px-2 py-1 rounded-full">
                      {project.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
        <div className="flex justify-center mt-8">
          <Link href="/portfolio">
            <Button>
              {t("viewAllProjects")}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}

