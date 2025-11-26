"use client"

import { ArrowUpRight, TrendingDown, Clock, Users } from "lucide-react"
import { ScrollAnimation } from "@/components/scroll-animation"

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
    <section className="py-32">
      <div id="case-studies" className="scroll-mt-20 max-w-6xl mx-auto px-6">
        <ScrollAnimation direction="up" delay={0.1}>
          <div className="flex items-center gap-4 mb-12">
            <div className="w-16 h-px bg-primary" />
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
              <div className="group relative p-8 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-500">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                  <div>
                    <h3 className="text-2xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {study.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {study.organization} • {study.duration}
                    </p>
                  </div>
                  <div className="flex items-center gap-2 text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="text-sm font-medium">View Details</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>

                {/* Challenge & Approach */}
                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div>
                    <h4 className="text-sm font-medium text-primary mb-2 uppercase tracking-wide">
                      Challenge
                    </h4>
                    <p className="text-muted-foreground leading-relaxed">
                      {study.challenge}
                    </p>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-primary mb-2 uppercase tracking-wide">
                      Approach
                    </h4>
                    <p className="text-muted-foreground leading-relaxed">
                      {study.approach}
                    </p>
                  </div>
                </div>

                {/* Results */}
                <div className="grid grid-cols-3 gap-4 mb-6">
                  {study.results.map((result, resultIndex) => (
                    <div
                      key={resultIndex}
                      className="p-4 rounded-xl bg-secondary/50 border border-border/50"
                    >
                      <div className="flex items-center gap-2 mb-2">
                        <result.icon className="w-4 h-4 text-primary" />
                        <span className="text-xs text-muted-foreground uppercase tracking-wide">
                          {result.metric}
                        </span>
                      </div>
                      <p className="text-2xl font-bold text-foreground">{result.value}</p>
                    </div>
                  ))}
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {study.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 text-xs font-medium text-primary bg-primary/10 rounded-full"
                    >
                      {tag}
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
