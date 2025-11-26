import { HeroSection } from "@/components/hero-section"
import { AchievementsBanner } from "@/components/achievements-banner"
import { AboutSection } from "@/components/about-section"
import { FocusAreasSection } from "@/components/focus-areas-section"
import { CareerTimeline } from "@/components/career-timeline"
import { CaseStudiesSection } from "@/components/case-studies-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { CertificationsSection } from "@/components/certifications-section"
import { ContactSection } from "@/components/contact-section"
import { Navigation } from "@/components/navigation"
import { ScrollToTop } from "@/components/scroll-to-top"

export default function Home() {
  return (
    <main className="min-h-screen bg-background relative">
      <Navigation />
      <HeroSection />
      <AchievementsBanner />
      <AboutSection />
      <FocusAreasSection />
      <CareerTimeline />
      <CaseStudiesSection />
      <TestimonialsSection />
      <CertificationsSection />
      <ContactSection />
      <ScrollToTop />
    </main>
  )
}
