"use client"

import { Shield, HeartPulse, Microscope } from "lucide-react"
import { ScrollAnimation } from "@/components/scroll-animation"

const focusAreas = [
  {
    icon: Shield,
    title: "Patient Safety",
    description:
      "Leading systemwide safety initiatives to reduce harm and move towards zero harm. Facilitating adverse health event reviews and root cause analysis to prevent recurrence.",
  },
  {
    icon: HeartPulse,
    title: "Quality Improvement",
    description:
      "Driving data-driven performance improvement through quality management systems, measure development, and evidence-based quality initiatives.",
  },
  {
    icon: Microscope,
    title: "Regulatory Readiness",
    description:
      "Ensuring compliance with CMS and DNV requirements through government quality reporting, Epic chart abstraction, and continuous monitoring.",
  },
]

export function FocusAreasSection() {
  return (
    <section className="py-32">
      <div id="focus" className="scroll-mt-20 max-w-6xl mx-auto px-6">
        <ScrollAnimation direction="up" delay={0.1}>
          <div className="flex items-center gap-4 mb-12">
            <div className="w-16 h-px bg-primary" />
            <h2 className="text-sm font-medium text-primary tracking-widest uppercase">Focus Areas</h2>
          </div>
        </ScrollAnimation>

        <div className="grid md:grid-cols-3 gap-8">
          {focusAreas.map((area, index) => (
            <ScrollAnimation
              key={index}
              direction="up"
              delay={0.2 + index * 0.1}
            >
              <div className="group p-8 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <area.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">{area.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{area.description}</p>
              </div>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  )
}
