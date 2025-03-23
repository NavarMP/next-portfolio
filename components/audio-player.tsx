"use client"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Volume2, VolumeX } from "lucide-react"
import { Slider } from "@/components/ui/slider"
import { useTranslation } from "@/hooks/use-translation"
import { AnimatePresence, motion } from "framer-motion"

export default function AudioPlayer() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [volume, setVolume] = useState(0.2)
  const [showControls, setShowControls] = useState(false)
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const { t } = useTranslation()

  // Add state and scroll handler to auto-hide when scrolling
  // Add these at the top of the component:

  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false)
      } else {
        setIsVisible(true)
      }

      setLastScrollY(currentScrollY)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [lastScrollY])

  useEffect(() => {
    const audio = new Audio("/audio/background-nasheed.mp3")
    audio.loop = true
    audio.volume = volume
    audioRef.current = audio

    return () => {
      audio.pause()
      audio.src = ""
    }
  }, [])

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume
    }
  }, [volume])

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause()
      } else {
        audioRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  // Wrap the entire return statement with AnimatePresence:
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed bottom-20 right-4 z-40"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.2 }}
        >
          <div
            className="relative"
            onMouseEnter={() => setShowControls(true)}
            onMouseLeave={() => setShowControls(false)}
          >
            <Button
              variant="outline"
              size="icon"
              className="rounded-full"
              onClick={togglePlay}
              aria-label={isPlaying ? t("muteAudio") : t("playAudio")}
            >
              {isPlaying ? <Volume2 className="h-4 w-4" /> : <VolumeX className="h-4 w-4" />}
            </Button>

            {showControls && (
              <div className="absolute bottom-full right-0 mb-2 p-2 bg-background border rounded-lg shadow-lg w-32">
                <Slider
                  value={[volume * 100]}
                  max={100}
                  step={1}
                  onValueChange={(value) => setVolume(value[0] / 100)}
                  aria-label={t("volumeControl")}
                />
              </div>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

