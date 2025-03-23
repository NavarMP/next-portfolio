import { HeroSection } from "@/components/hero-section"
import { SkillsSection } from "@/components/skills-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { ProjectsSection } from "@/components/projects-section"
import { ContactSection } from "@/components/contact-section"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <HeroSection />
      <SkillsSection />
      <ProjectsSection />
      <TestimonialsSection />
      <ContactSection />
    </main>
  )
}

