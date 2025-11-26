"use client"

import { useEffect, useRef, useState } from "react"
import { ScrollAnimation } from "@/components/scroll-animation"
import { AnimatedLine } from "@/components/animated-line"
import { Briefcase, GraduationCap, FlaskConical, Headphones } from "lucide-react"

const timelineEvents = [
  {
    year: "Sep 1991 - Nov 1999",
    title: "Early Career Experience",
    organization: "Park Nicollet Health Services",
    location: "St Louis Park, MN",
    description: "Various roles in laboratory and patient-service operations. Positions included Phlebotomist / Team Lead, Client Services Representative, and Call Center Representative. Built foundational expertise in laboratory workflow, data accuracy, patient interaction, and process improvement.",
    icon: Headphones,
    type: "work",
    highlights: ["Health Information Management", "System Monitoring", "Patient Focus"],
  },
  {
    year: "Nov 2005 - Apr 2020",
    title: "Laboratory Assistant",
    organization: "Park Nicollet Health Services (HealthPartners)",
    location: "Minnetonka, MN",
    description: "Supported outpatient diagnostic operations, performing specimen collection, processing, and data entry in EPIC. Trained and mentored new staff, ensuring adherence to laboratory safety and compliance standards. Served on safety committees; led a QA project to improve order accuracy and reduce specimen labeling errors.",
    icon: FlaskConical,
    type: "work",
    highlights: ["Documentation", "Analytical Skills", "QA Projects", "Staff Training"],
  },
  {
    year: "2014",
    title: "Bachelor of Science in Business",
    organization: "Capella University",
    description: "Graduated with 4.0 GPA, concentrating in Healthcare Management. Built foundational knowledge in business administration with a focus on healthcare operations.",
    icon: GraduationCap,
    type: "education",
    highlights: ["4.0 GPA", "Healthcare Management", "BS Degree"],
  },
  {
    year: "2020",
    title: "Master of Healthcare Administration",
    organization: "Capella University",
    description: "Graduated with 4.0 GPA, specializing in healthcare quality management and organizational leadership.",
    icon: GraduationCap,
    type: "education",
    highlights: ["4.0 GPA", "MHA Degree"],
  },
  {
    year: "Apr 2021 - Nov 2025",
    title: "Quality & Patient Safety Improvement Consultant",
    organization: "North Memorial Health",
    location: "Robbinsdale, Minnesota",
    description: "Directed quality and patient-safety improvement initiatives across inpatient and outpatient areas, ensuring compliance with CMS, Joint Commission, and internal performance standards. Facilitated adverse-event reviews and corrective-action planning for 135+ cases. Developed and monitored departmental metrics, dashboards, and regulatory readiness programs. Collaborated with leadership and cross-functional teams to advance Lean process-improvement projects.",
    icon: Briefcase,
    type: "work",
    highlights: ["Facilitation", "Government Reporting", "135+ Case Reviews", "Lean Process Improvement"],
  },
]

export function CareerTimeline() {
  const [activeIndex, setActiveIndex] = useState(-1)
  const timelineRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute("data-index") || "0")
            setActiveIndex((prev) => Math.max(prev, index))
          }
        })
      },
      { threshold: 0.5, rootMargin: "-100px 0px" }
    )

    const items = timelineRef.current?.querySelectorAll("[data-index]")
    items?.forEach((item) => observer.observe(item))

    return () => observer.disconnect()
  }, [])

  return (
    <section id="timeline" className="py-32 relative overflow-hidden scroll-mt-20">
      {/* Background decoration */}
      <div className="absolute top-1/2 -translate-y-1/2 left-0 w-1/3 h-96 bg-primary/5 rounded-full blur-3xl" />
      
      <div className="max-w-6xl mx-auto px-6 relative">
        <ScrollAnimation direction="up" delay={0.1}>
          <div className="flex items-center gap-4 mb-8">
            <AnimatedLine className="w-16" delay={0.2} />
            <h2 className="text-sm font-medium text-primary tracking-widest uppercase">Career Journey</h2>
          </div>
        </ScrollAnimation>

        <ScrollAnimation direction="up" delay={0.15}>
          <p className="text-xl text-muted-foreground mb-16 max-w-3xl">
            Over 30 years of progressive experience building expertise from laboratory operations to healthcare quality leadership.
          </p>
        </ScrollAnimation>

        <div ref={timelineRef} className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px">
            <div 
              className="absolute top-0 left-0 w-full bg-gradient-to-b from-primary to-primary/50 transition-all duration-1000 ease-out"
              style={{ 
                height: activeIndex >= 0 ? `${((activeIndex + 1) / timelineEvents.length) * 100}%` : '0%' 
              }}
            />
          </div>

          {timelineEvents.map((event, index) => (
            <div
              key={index}
              data-index={index}
              className={`relative flex items-center mb-12 last:mb-0 ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* Timeline node */}
              <div className="absolute left-8 md:left-1/2 -translate-x-1/2 z-10">
                <div 
                  className={`w-4 h-4 rounded-full border-2 transition-all duration-500 ${
                    activeIndex >= index 
                      ? "bg-primary border-primary scale-125" 
                      : "bg-background border-border"
                  }`}
                >
                  {activeIndex >= index && (
                    <div className="absolute inset-0 rounded-full bg-primary animate-ping opacity-20" />
                  )}
                </div>
              </div>

              {/* Content */}
              <div className={`w-full md:w-1/2 pl-20 md:pl-0 ${
                index % 2 === 0 ? "md:pr-16" : "md:pl-16"
              }`}>
                <div 
                  className={`group p-6 rounded-xl bg-card border border-border hover:border-primary/30 transition-all duration-500 ${
                    activeIndex >= index ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  {/* Year badge */}
                  <div className="flex items-center gap-3 mb-3">
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300 group-hover:scale-110 ${
                      event.type === "education" ? "bg-amber-500/10" : "bg-primary/10"
                    }`}>
                      <event.icon className={`w-5 h-5 ${
                        event.type === "education" ? "text-amber-500" : "text-primary"
                      }`} />
                    </div>
                    <span className={`text-sm font-medium px-3 py-1 rounded-full ${
                      event.type === "education" 
                        ? "bg-amber-500/10 text-amber-500" 
                        : "bg-primary/10 text-primary"
                    }`}>
                      {event.year}
                    </span>
                  </div>

                  <h3 className="text-lg font-semibold text-foreground mb-1 group-hover:text-primary transition-colors duration-300">
                    {event.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-1">{event.organization}</p>
                  {event.location && (
                    <p className="text-xs text-muted-foreground/70 mb-3">{event.location}</p>
                  )}
                  {!event.location && <div className="mb-2" />}
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    {event.description}
                  </p>

                  {/* Highlights */}
                  <div className="flex flex-wrap gap-2">
                    {event.highlights.map((highlight, hIndex) => (
                      <span
                        key={hIndex}
                        className="px-2 py-1 text-xs font-medium text-muted-foreground bg-secondary/50 rounded-md"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

