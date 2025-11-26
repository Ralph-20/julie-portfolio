"use client"

import { Award, CheckCircle2, Clock, GraduationCap } from "lucide-react"
import { ScrollAnimation } from "@/components/scroll-animation"
import { GlowCard } from "@/components/glow-card"
import { MagneticCard } from "@/components/magnetic-card"
import { AnimatedLine } from "@/components/animated-line"

const education = [
  {
    degree: "Master of Healthcare Administration",
    school: "Capella University",
    year: "2020",
    gpa: "4.0",
  },
  {
    degree: "Bachelor of Science in Business",
    field: "Healthcare Management",
    school: "Capella University",
    gpa: "4.0",
  },
]

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
    <section id="certifications" className="py-32 bg-secondary/20 scroll-mt-20">
      <div className="max-w-6xl mx-auto px-6">
        <ScrollAnimation direction="up" delay={0.1}>
          <div className="flex items-center gap-4 mb-12">
            <AnimatedLine className="w-16" delay={0.2} />
            <h2 className="text-sm font-medium text-primary tracking-widest uppercase">
              Education & Certifications
            </h2>
          </div>
        </ScrollAnimation>

        <ScrollAnimation direction="up" delay={0.15}>
          <p className="text-xl text-muted-foreground mb-16 max-w-3xl">
            Academic credentials and professional development in healthcare administration, quality, and process improvement.
          </p>
        </ScrollAnimation>

        {/* Education */}
        <div className="mb-12">
          <ScrollAnimation direction="up" delay={0.2}>
            <h3 className="text-lg font-semibold text-foreground mb-6">Education</h3>
          </ScrollAnimation>
          <div className="grid md:grid-cols-2 gap-6">
            {education.map((edu, index) => (
              <ScrollAnimation key={index} direction="up" delay={0.25 + index * 0.1} className="h-full">
                <MagneticCard intensity={0.15} className="h-full">
                  <GlowCard className="h-full">
                    <div className="group h-full p-6 rounded-xl bg-card border border-border hover:border-primary/30 transition-all duration-300 relative overflow-hidden flex flex-col">
                      {/* Decorative gradient */}
                      <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      
                      <div className="flex items-start gap-4 relative">
                        <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                          <GraduationCap className="w-6 h-6 text-primary" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="text-lg font-semibold text-foreground mb-1 group-hover:text-primary transition-colors duration-300">
                            {edu.degree}
                          </h4>
                          {edu.field && (
                            <p className="text-sm text-muted-foreground mb-1">{edu.field}</p>
                          )}
                          <p className="text-sm text-muted-foreground">
                            {edu.school}
                          </p>
                          <div className="mt-3">
                            <span className="inline-flex items-center px-2.5 py-0.5 text-xs font-medium text-primary bg-primary/10 rounded-full group-hover:bg-primary/20 transition-colors duration-300">
                              GPA: {edu.gpa}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </GlowCard>
                </MagneticCard>
              </ScrollAnimation>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div>
          <ScrollAnimation direction="up" delay={0.4}>
            <h3 className="text-lg font-semibold text-foreground mb-6">Certifications</h3>
          </ScrollAnimation>
          <div className="max-w-xl">
            {certifications.map((cert, index) => (
              <ScrollAnimation key={index} direction="up" delay={0.45 + index * 0.1}>
                <MagneticCard intensity={0.15}>
                  <GlowCard glowColor="rgba(251, 191, 36, 0.1)">
                    <div className="group h-full p-6 rounded-xl bg-card border border-border hover:border-amber-500/30 transition-all duration-300 relative overflow-hidden">
                      {/* Animated progress indicator */}
                      <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-amber-500/50 via-amber-400/50 to-amber-500/50 animate-pulse" />
                      
                      {/* Header */}
                      <div className="flex items-start gap-4 mb-4">
                        <div className="w-12 h-12 rounded-lg bg-amber-500/10 flex items-center justify-center shrink-0 group-hover:bg-amber-500/20 group-hover:scale-110 transition-all duration-300">
                          <Award className="w-6 h-6 text-amber-500" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="text-lg font-semibold text-foreground mb-1 group-hover:text-amber-400 transition-colors duration-300">
                            {cert.name}
                          </h4>
                          <div className="flex items-center gap-2">
                            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 text-xs font-medium text-amber-600 dark:text-amber-400 bg-amber-500/10 rounded-full">
                              <Clock className="w-3 h-3 animate-pulse" />
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
                            className="inline-flex items-center gap-1 px-2 py-1 text-xs text-muted-foreground bg-secondary/50 rounded-md group-hover:bg-secondary transition-colors duration-300"
                            style={{ transitionDelay: `${skillIndex * 50}ms` }}
                          >
                            <CheckCircle2 className="w-3 h-3 text-primary" />
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </GlowCard>
                </MagneticCard>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
