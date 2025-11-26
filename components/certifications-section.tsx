"use client"

import { Award, CheckCircle2, Clock } from "lucide-react"
import { ScrollAnimation } from "@/components/scroll-animation"

const certifications = [
  {
    name: "Lean Six Sigma Yellow Belt",
    status: "in-progress",
    description:
      "Foundational training in Lean Six Sigma methodology, including process improvement principles, waste identification, and quality improvement techniques in healthcare settings.",
    skills: ["Process Improvement", "Waste Reduction", "Quality Improvement", "Problem Solving"],
  },
]

export function CertificationsSection() {
  return (
    <section className="py-32 bg-secondary/20">
      <div id="certifications" className="scroll-mt-20 max-w-6xl mx-auto px-6">
        <ScrollAnimation direction="up" delay={0.1}>
          <div className="flex items-center gap-4 mb-12">
            <div className="w-16 h-px bg-primary" />
            <h2 className="text-sm font-medium text-primary tracking-widest uppercase">
              Certifications
            </h2>
          </div>
        </ScrollAnimation>

        <ScrollAnimation direction="up" delay={0.15}>
          <p className="text-xl text-muted-foreground mb-16 max-w-3xl">
            Professional credentials and ongoing development in healthcare quality and process improvement methodologies.
          </p>
        </ScrollAnimation>

        <div className="max-w-xl">
          {certifications.map((cert, index) => (
            <ScrollAnimation key={index} direction="up" delay={0.2 + index * 0.1}>
              <div className="group h-full p-6 rounded-xl bg-card border border-border hover:border-primary/30 transition-all duration-300">
                {/* Header */}
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-lg bg-amber-500/10 flex items-center justify-center shrink-0 group-hover:bg-amber-500/20 transition-colors">
                    <Award className="w-6 h-6 text-amber-500" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">
                      {cert.name}
                    </h3>
                    <div className="flex items-center gap-2">
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 text-xs font-medium text-amber-600 dark:text-amber-400 bg-amber-500/10 rounded-full">
                        <Clock className="w-3 h-3" />
                        In Progress
                      </span>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {cert.description}
                </p>

                {/* Skills */}
                <div className="flex flex-wrap gap-2">
                  {cert.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="inline-flex items-center gap-1 px-2 py-1 text-xs text-muted-foreground bg-secondary/50 rounded-md"
                    >
                      <CheckCircle2 className="w-3 h-3 text-primary" />
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  )
}
