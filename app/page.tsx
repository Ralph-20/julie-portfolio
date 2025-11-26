import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { FocusAreasSection } from "@/components/focus-areas-section"
import { CaseStudiesSection } from "@/components/case-studies-section"
import { CertificationsSection } from "@/components/certifications-section"
import { ContactSection } from "@/components/contact-section"
import { Navigation } from "@/components/navigation"
import { ScrollToTop } from "@/components/scroll-to-top"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <FocusAreasSection />
      <CaseStudiesSection />
      <CertificationsSection />
      <ContactSection />
      <ScrollToTop />
    </main>
  )
}
