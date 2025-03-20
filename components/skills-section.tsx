"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { useTranslation } from "@/hooks/use-translation"
import { SkillBar } from "@/components/skill-bar"

export function SkillsSection() {
  const { t } = useTranslation()

  const designSkills = [
    { name: "UI/UX Design", percentage: 90 },
    { name: "Graphic Design", percentage: 85 },
    { name: "Logo Design", percentage: 80 },
    { name: "3D Modeling", percentage: 70 },
  ]

  const techSkills = [
    { name: "HTML/CSS", percentage: 75 },
    { name: "JavaScript", percentage: 65 },
    { name: "React", percentage: 60 },
    { name: "Figma", percentage: 90 },
    { name: "Adobe Creative Suite", percentage: 95 },
  ]

  return (
    <section className="w-full py-12 md:py-24 bg-muted/50">
      <div className="container px-4 md:px-6">
        <motion.div
          className="flex flex-col items-center justify-center space-y-4 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">{t("mySkills")}</h2>
          <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            {t("skillsDescription")}
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
                <h3 className="text-xl font-bold mb-4">{t("designSkills")}</h3>
                <div className="space-y-4">
                  {designSkills.map((skill, index) => (
                    <SkillBar key={index} skill={skill.name} percentage={skill.percentage} delay={index * 0.1} />
                  ))}
                </div>
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
                <h3 className="text-xl font-bold mb-4">{t("technicalSkills")}</h3>
                <div className="space-y-4">
                  {techSkills.map((skill, index) => (
                    <SkillBar key={index} skill={skill.name} percentage={skill.percentage} delay={index * 0.1} />
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

