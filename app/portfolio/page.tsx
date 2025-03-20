"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"
import { useTranslation } from "@/hooks/use-translation"
import Image from "next/image"

const categories = ["all", "logo", "flyer", "3d", "app", "website"]

// Sample portfolio items - you would replace these with your actual work
const portfolioItems = [
  {
    id: 1,
    title: "Brand Logo Design",
    category: "logo",
    image: "/placeholder.svg?height=400&width=600",
    description: "Modern logo design for a tech startup",
  },
  {
    id: 2,
    title: "Event Flyer",
    category: "flyer",
    image: "/placeholder.svg?height=400&width=600",
    description: "Promotional flyer for a music festival",
  },
  {
    id: 3,
    title: "3D Product Visualization",
    category: "3d",
    image: "/placeholder.svg?height=400&width=600",
    description: "3D rendering of a product for marketing",
  },
  {
    id: 4,
    title: "Mobile App UI",
    category: "app",
    image: "/placeholder.svg?height=400&width=600",
    description: "User interface design for a fitness app",
  },
  {
    id: 5,
    title: "E-commerce Website",
    category: "website",
    image: "/placeholder.svg?height=400&width=600",
    description: "Full website design for an online store",
  },
  {
    id: 6,
    title: "Corporate Identity",
    category: "logo",
    image: "/placeholder.svg?height=400&width=600",
    description: "Complete branding package for a business",
  },
  {
    id: 7,
    title: "Product Landing Page",
    category: "website",
    image: "/placeholder.svg?height=400&width=600",
    description: "Conversion-focused landing page design",
  },
  {
    id: 8,
    title: "Architectural Visualization",
    category: "3d",
    image: "/placeholder.svg?height=400&width=600",
    description: "3D rendering of an architectural project",
  },
]

export default function PortfolioPage() {
  const { t } = useTranslation()
  const [activeCategory, setActiveCategory] = useState("all")

  const filteredItems =
    activeCategory === "all" ? portfolioItems : portfolioItems.filter((item) => item.category === activeCategory)

  return (
    <div className="container mx-auto py-20 px-4">
      <motion.h1
        className="text-4xl md:text-5xl font-bold text-center mb-12"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {t("portfolio")}
      </motion.h1>

      <Tabs defaultValue="all" className="w-full">
        <TabsList className="grid grid-cols-3 md:grid-cols-6 mb-8">
          {categories.map((category) => (
            <TabsTrigger
              key={category}
              value={category}
              onClick={() => setActiveCategory(category)}
              className="capitalize"
            >
              {t(category)}
            </TabsTrigger>
          ))}
        </TabsList>

        <TabsContent value={activeCategory} className="mt-0">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <Card className="overflow-hidden">
                  <div className="relative h-60">
                    <Image src={item.image || "/placeholder.svg"} alt={item.title} fill className="object-cover" />
                  </div>
                  <CardContent className="p-4">
                    <h3 className="text-xl font-semibold">{item.title}</h3>
                    <p className="text-muted-foreground mt-2">{item.description}</p>
                    <div className="mt-2">
                      <span className="inline-block bg-primary/10 text-primary text-xs px-2 py-1 rounded-full">
                        {item.category}
                      </span>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

