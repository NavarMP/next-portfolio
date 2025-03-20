"use client"

import { motion } from "framer-motion"
import { useTranslation } from "@/hooks/use-translation"

interface SkillBarProps {
  skill: string
  percentage: number
  delay?: number
}

export function SkillBar({ skill, percentage, delay = 0 }: SkillBarProps) {
  const { t } = useTranslation()

  return (
    <div className="space-y-2">
      <div className="flex justify-between">
        <span className="text-sm font-medium">{skill}</span>
        <span className="text-sm text-muted-foreground">{percentage}%</span>
      </div>
      <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-primary"
          initial={{ width: 0 }}
          animate={{ width: `${percentage}%` }}
          transition={{ duration: 1, delay, ease: "easeOut" }}
        />
      </div>
    </div>
  )
}

