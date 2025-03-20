"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

export default function CursorEffect() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isVisible, setIsVisible] = useState(false)
  const [isActive, setIsActive] = useState(false)
  const [idleTimer, setIdleTimer] = useState<NodeJS.Timeout | null>(null)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
      setIsVisible(true)

      if (idleTimer) clearTimeout(idleTimer)

      const timer = setTimeout(() => {
        setIsVisible(false)
      }, 3000)

      setIdleTimer(timer as NodeJS.Timeout)
    }

    const handleMouseDown = () => setIsActive(true)
    const handleMouseUp = () => setIsActive(false)

    window.addEventListener("mousemove", handleMouseMove)
    window.addEventListener("mousedown", handleMouseDown)
    window.addEventListener("mouseup", handleMouseUp)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("mousedown", handleMouseDown)
      window.removeEventListener("mouseup", handleMouseUp)
      if (idleTimer) clearTimeout(idleTimer)
    }
  }, [idleTimer])

  // Don't render on touch devices
  const [isTouchDevice, setIsTouchDevice] = useState(false)

  useEffect(() => {
    setIsTouchDevice("ontouchstart" in window || navigator.maxTouchPoints > 0)
  }, [])

  if (isTouchDevice) return null

  return (
    <AnimatePresence>
      {isVisible && (
        <>
          <motion.div
            className="fixed top-0 left-0 w-8 h-8 rounded-full border-2 border-primary pointer-events-none z-50"
            animate={{
              x: mousePosition.x - 16,
              y: mousePosition.y - 16,
              scale: isActive ? 0.8 : 1,
            }}
            exit={{ opacity: 0, scale: 0 }}
            transition={{ type: "spring", damping: 20, stiffness: 300 }}
          />
          <motion.div
            className="fixed top-0 left-0 w-2 h-2 rounded-full bg-primary pointer-events-none z-50"
            animate={{
              x: mousePosition.x - 4,
              y: mousePosition.y - 4,
              scale: isActive ? 1.5 : 1,
            }}
            exit={{ opacity: 0, scale: 0 }}
            transition={{ type: "spring", damping: 30, stiffness: 500 }}
          />
        </>
      )}
    </AnimatePresence>
  )
}

