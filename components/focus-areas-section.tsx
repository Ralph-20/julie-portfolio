"use client"

import { Shield, HeartPulse, Microscope } from "lucide-react"
import { ScrollAnimation } from "@/components/scroll-animation"
import { GlowCard } from "@/components/glow-card"
import { MagneticCard } from "@/components/magnetic-card"
import { AnimatedLine } from "@/components/animated-line"

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
    <section id="focus" className="py-32 relative scroll-mt-20">
      <div className="max-w-6xl mx-auto px-6">
        <ScrollAnimation direction="up" delay={0.1}>
          <div className="flex items-center gap-4 mb-12">
            <AnimatedLine className="w-16" delay={0.2} />
            <h2 className="text-sm font-medium text-primary tracking-widest uppercase">Focus Areas</h2>
          </div>
        </ScrollAnimation>

        <div className="grid md:grid-cols-3 gap-8">
          {focusAreas.map((area, index) => (
            <ScrollAnimation
              key={index}
              direction="up"
              delay={0.2 + index * 0.1}
              className="h-full"
            >
              <MagneticCard intensity={0.2} className="h-full">
                <GlowCard className="h-full">
                  <div className="group h-full p-8 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300 relative flex flex-col">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                      <area.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">{area.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{area.description}</p>
                    
                    {/* Bottom accent line */}
                    <div className="absolute bottom-0 left-8 right-8 h-0.5 bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                </GlowCard>
              </MagneticCard>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  )
}
