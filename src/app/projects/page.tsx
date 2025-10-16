import { Navigation } from "@/components/navigation"
import { ProjectsPageContent } from "@/components/projects-page-content"
import { ContactSection } from "@/components/contact-section"
import { BackToTop } from "@/components/back-to-top"

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <div className="pt-16">
        <ProjectsPageContent />
        <ContactSection />
      </div>
      <BackToTop />
    </main>
  )
}
