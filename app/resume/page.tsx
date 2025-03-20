"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"
import { useTranslation } from "@/hooks/use-translation"
import { SkillBar } from "@/components/skill-bar"

const resumeCategories = ["all", "education", "experience", "skills", "certifications"]

export default function ResumePage() {
  const { t } = useTranslation()
  const [activeCategory, setActiveCategory] = useState("all")

  const handleDownloadCV = () => {
    // In a real implementation, this would trigger a download of your CV PDF
    alert("CV download would start here")
  }

  return (
    <div className="container mx-auto py-20 px-4">
      <div className="flex flex-col md:flex-row justify-between items-center mb-12">
        <motion.h1
          className="text-4xl md:text-5xl font-bold"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {t("resume")}
        </motion.h1>

        <Button onClick={handleDownloadCV} className="mt-4 md:mt-0">
          <Download className="mr-2 h-4 w-4" />
          {t("downloadCV")}
        </Button>
      </div>

      <Tabs defaultValue="all" className="w-full">
        <TabsList className="grid grid-cols-3 md:grid-cols-5 mb-8">
          {resumeCategories.map((category) => (
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

        <div className="space-y-8">
          {(activeCategory === "all" || activeCategory === "education") && (
            <TabsContent value={activeCategory} forceMount={activeCategory === "all"}>
              <Card>
                <CardHeader>
                  <CardTitle>{t("education")}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <h3 className="text-xl font-semibold">Bachelor of Design</h3>
                    <p className="text-muted-foreground">University of Design Arts, 2015-2019</p>
                    <p className="mt-2">Specialized in UI/UX and Graphic Design with focus on digital media.</p>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                  >
                    <h3 className="text-xl font-semibold">Diploma in Web Development</h3>
                    <p className="text-muted-foreground">Tech Institute, 2013-2015</p>
                    <p className="mt-2">Learned front-end development technologies and design principles.</p>
                  </motion.div>
                </CardContent>
              </Card>
            </TabsContent>
          )}

          {(activeCategory === "all" || activeCategory === "experience") && (
            <TabsContent value={activeCategory} forceMount={activeCategory === "all"}>
              <Card>
                <CardHeader>
                  <CardTitle>{t("experience")}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <h3 className="text-xl font-semibold">Freelance Designer</h3>
                    <p className="text-muted-foreground">Self-employed, 2020-Present</p>
                    <p className="mt-2">
                      Working with clients worldwide on various design projects including branding, UI/UX, and web
                      design.
                    </p>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                  >
                    <h3 className="text-xl font-semibold">UI/UX Designer</h3>
                    <p className="text-muted-foreground">Design Agency XYZ, 2019-2020</p>
                    <p className="mt-2">
                      Designed user interfaces for mobile applications and websites, conducted user research and
                      testing.
                    </p>
                  </motion.div>
                </CardContent>
              </Card>
            </TabsContent>
          )}

          {(activeCategory === "all" || activeCategory === "skills") && (
            <TabsContent value={activeCategory} forceMount={activeCategory === "all"}>
              <Card>
                <CardHeader>
                  <CardTitle>{t("skills")}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <SkillBar skill="UI/UX Design" percentage={90} />
                    <SkillBar skill="Graphic Design" percentage={85} />
                    <SkillBar skill="Web Design" percentage={80} />
                    <SkillBar skill="3D Modeling" percentage={70} />
                    <SkillBar skill="HTML/CSS" percentage={75} />
                    <SkillBar skill="JavaScript" percentage={65} />
                    <SkillBar skill="Adobe Creative Suite" percentage={95} />
                    <SkillBar skill="Figma" percentage={90} />
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          )}

          {(activeCategory === "all" || activeCategory === "certifications") && (
            <TabsContent value={activeCategory} forceMount={activeCategory === "all"}>
              <Card>
                <CardHeader>
                  <CardTitle>{t("certifications")}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <h3 className="text-xl font-semibold">Certified UX Designer</h3>
                    <p className="text-muted-foreground">UX Design Institute, 2021</p>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                  >
                    <h3 className="text-xl font-semibold">Advanced Web Design</h3>
                    <p className="text-muted-foreground">Web Design Academy, 2020</p>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    <h3 className="text-xl font-semibold">3D Modeling Masterclass</h3>
                    <p className="text-muted-foreground">3D Design Institute, 2019</p>
                  </motion.div>
                </CardContent>
              </Card>
            </TabsContent>
          )}
        </div>
      </Tabs>
    </div>
  )
}

