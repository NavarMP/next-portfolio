import { HeroSection } from "@/components/hero-section"
import { SkillsSection } from "@/components/skills-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { ProjectsSection } from "@/components/projects-section"
import { ContactSection } from "@/components/contact-section"
import { SearchDialog } from "@/components/search-dialog"
import { Button } from "@/components/ui/button"
import { Search } from "lucide-react"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <div className="fixed top-4 right-4 z-50">
        <SearchDialog>
          <Button variant="outline" size="icon" className="rounded-full">
            <Search className="h-4 w-4" />
            <span className="sr-only">Search</span>
          </Button>
        </SearchDialog>
      </div>
      <HeroSection />
      <SkillsSection />
      <ProjectsSection />
      <TestimonialsSection />
      <ContactSection />
    </main>
  )
}

