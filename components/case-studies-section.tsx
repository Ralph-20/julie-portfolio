"use client"

import { ArrowUpRight, TrendingDown, Clock, Users } from "lucide-react"
import { ScrollAnimation } from "@/components/scroll-animation"
import { GlowCard } from "@/components/glow-card"
import { AnimatedLine } from "@/components/animated-line"

const caseStudies = [
  {
    title: "Systemwide Patient Safety Incident Reduction",
    organization: "North Memorial Health",
    duration: "4+ years",
    challenge:
      "The health system needed to strengthen safety culture and reduce patient safety incidents across both inpatient and outpatient settings while moving towards zero harm.",
    approach:
      "Used the organizational incident reporting system to monitor, trend, and support reduction in patient safety incidents. Supported the facilitation of 135 adverse event reviews and root cause analysis to develop meaningful corrective action plans that prevent recurrence.",
    results: [
      { metric: "Incident Trending", value: "Systemwide", icon: TrendingDown },
      { metric: "Duration", value: "4+ years", icon: Clock },
      { metric: "Settings Covered", value: "All", icon: Users },
    ],
    tags: ["Patient Safety", "Root Cause Analysis", "Zero Harm"],
  },
  {
    title: "CMS Quality Measure Compliance Program",
    organization: "North Memorial Health",
    duration: "Ongoing",
    challenge:
      "Ensuring accurate and timely submission of government-reported quality measures to maintain compliance with CMS reporting requirements.",
    approach:
      "Conducted Epic chart abstraction to collect data for government-reported Patient Safety Indicators (PSIs) submission. Assisted in measure development, analysis, and target setting to identify and support opportunities for improvement.",
    results: [
      { metric: "Compliance", value: "100%", icon: TrendingDown },
      { metric: "Data Source", value: "Epic EMR", icon: Clock },
      { metric: "Measures Tracked", value: "Multiple", icon: Users },
    ],
    tags: ["Quality Improvement", "Government Reporting", "Data Analysis"],
  },
  {
    title: "Quality Management System Enhancement",
    organization: "North Memorial Health",
    duration: "Ongoing",
    challenge:
      "Need to ensure organizational understanding of QMS principles and maintain cohesion with the strategic and operational direction of the organizational Quality Management System.",
    approach:
      "Provided support to organizational Quality Management Systems (QMS), serving as a consultant to leadership and medical staff with expertise in performance improvement methods, systems thinking, and change management.",
    results: [
      { metric: "Scope", value: "Systemwide", icon: TrendingDown },
      { metric: "Stakeholders", value: "Leadership", icon: Clock },
      { metric: "Focus", value: "QMS", icon: Users },
    ],
    tags: ["Quality Management Systems", "Change Management", "Systems Thinking"],
  },
]

export function CaseStudiesSection() {
  return (
    <section id="case-studies" className="py-32 scroll-mt-20">
      <div className="max-w-6xl mx-auto px-6">
        <ScrollAnimation direction="up" delay={0.1}>
          <div className="flex items-center gap-4 mb-12">
            <AnimatedLine className="w-16" delay={0.2} />
            <h2 className="text-sm font-medium text-primary tracking-widest uppercase">
              Case Studies
            </h2>
          </div>
        </ScrollAnimation>

        <ScrollAnimation direction="up" delay={0.15}>
          <p className="text-xl text-muted-foreground mb-16 max-w-3xl">
            Real-world examples demonstrating measurable impact in healthcare quality improvement and patient safety initiatives.
          </p>
        </ScrollAnimation>

        <div className="space-y-12">
          {caseStudies.map((study, index) => (
            <ScrollAnimation key={index} direction="up" delay={0.2 + index * 0.1}>
              <GlowCard>
                <a
                  href="https://northmemorial.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block relative p-5 sm:p-8 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-500 cursor-pointer overflow-hidden"
                >
                  {/* Animated corner accent */}
                  <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-primary/5 via-primary/2 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />
                  
                  {/* Header */}
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6 relative min-w-0">
                    <div className="min-w-0">
                      <h3 className="text-xl sm:text-2xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors duration-300 break-words">
                        {study.title}
                      </h3>
                      <p className="text-sm sm:text-base text-muted-foreground">
                        {study.organization} • {study.duration}
                      </p>
                    </div>
                    <div className="flex items-center gap-2 text-primary opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-0 translate-x-2 flex-shrink-0">
                      <span className="text-sm font-medium">Visit Organization</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Challenge & Approach */}
                  <div className="grid md:grid-cols-2 gap-6 mb-8">
                    <div className="group/card">
                      <h4 className="text-sm font-medium text-primary mb-2 uppercase tracking-wide flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                        Challenge
                      </h4>
                      <p className="text-muted-foreground leading-relaxed">
                        {study.challenge}
                      </p>
                    </div>
                    <div className="group/card">
                      <h4 className="text-sm font-medium text-primary mb-2 uppercase tracking-wide flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                        Approach
                      </h4>
                      <p className="text-muted-foreground leading-relaxed">
                        {study.approach}
                      </p>
                    </div>
                  </div>

                  {/* Results */}
                  <div className="grid grid-cols-3 gap-2 sm:gap-4 mb-6">
                    {study.results.map((result, resultIndex) => (
                      <div
                        key={resultIndex}
                        className="p-3 sm:p-4 rounded-xl bg-secondary/50 border border-border/50 group-hover:border-primary/20 transition-all duration-300 group-hover:bg-secondary/70 min-w-0"
                        style={{ transitionDelay: `${resultIndex * 50}ms` }}
                      >
                        <div className="flex items-center gap-1 sm:gap-2 mb-2">
                          <result.icon className="w-3 h-3 sm:w-4 sm:h-4 text-primary flex-shrink-0" />
                          <span className="text-[10px] sm:text-xs text-muted-foreground uppercase tracking-wide break-words">
                            {result.metric}
                          </span>
                        </div>
                        <p className="text-lg sm:text-2xl font-bold text-foreground break-words">{result.value}</p>
                      </div>
                    ))}
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {study.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 text-xs font-medium text-primary bg-primary/10 rounded-full group-hover:bg-primary/20 transition-colors duration-300"
                        style={{ transitionDelay: `${tagIndex * 30}ms` }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  {/* Bottom line animation */}
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center" />
                </a>
              </GlowCard>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  )
}
