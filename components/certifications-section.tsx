"use client"

import { Award, CheckCircle2, ExternalLink } from "lucide-react"
import { ScrollAnimation } from "@/components/scroll-animation"

const certifications = [
  {
    name: "Lean Six Sigma Green Belt",
    issuer: "American Society for Quality (ASQ)",
    date: "2023",
    credentialId: "LSSGB-2023-48291",
    description:
      "Demonstrated proficiency in Lean Six Sigma methodology, including DMAIC process improvement, statistical analysis, and waste reduction techniques in healthcare settings.",
    skills: ["Process Improvement", "Statistical Analysis", "DMAIC", "Root Cause Analysis"],
  },
  {
    name: "Certified Professional in Healthcare Quality (CPHQ)",
    issuer: "National Association for Healthcare Quality",
    date: "2022",
    credentialId: "CPHQ-2022-15847",
    description:
      "Comprehensive certification covering healthcare quality management, patient safety, risk management, and regulatory compliance across healthcare organizations.",
    skills: ["Quality Management", "Patient Safety", "Risk Management", "Regulatory Compliance"],
  },
  {
    name: "Certified Quality Auditor (CQA)",
    issuer: "American Society for Quality (ASQ)",
    date: "2023",
    credentialId: "CQA-2023-72634",
    description:
      "Expertise in auditing quality systems, evaluating compliance with standards, and identifying opportunities for improvement in healthcare quality programs.",
    skills: ["Quality Auditing", "Compliance Assessment", "Standards Evaluation", "Documentation"],
  },
  {
    name: "Healthcare Failure Mode and Effects Analysis (HFMEA)",
    issuer: "Institute for Healthcare Improvement",
    date: "2022",
    credentialId: "HFMEA-2022-38475",
    description:
      "Specialized training in proactive risk assessment methodology to identify and prevent potential failures in healthcare processes before they occur.",
    skills: ["Risk Assessment", "Failure Prevention", "Process Analysis", "Safety Planning"],
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
            Professional credentials demonstrating expertise in healthcare quality, patient safety, and process improvement methodologies.
          </p>
        </ScrollAnimation>

        <div className="grid md:grid-cols-2 gap-6">
          {certifications.map((cert, index) => (
            <ScrollAnimation key={index} direction="up" delay={0.2 + index * 0.1}>
              <div className="group h-full p-6 rounded-xl bg-card border border-border hover:border-primary/30 transition-all duration-300">
                {/* Header */}
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                    <Award className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">
                      {cert.name}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {cert.issuer} • {cert.date}
                    </p>
                  </div>
                </div>

                {/* Description */}
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {cert.description}
                </p>

                {/* Skills */}
                <div className="flex flex-wrap gap-2 mb-4">
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

                {/* Credential ID */}
                <div className="flex items-center justify-between pt-4 border-t border-border/50">
                  <span className="text-xs text-muted-foreground">
                    Credential ID: {cert.credentialId}
                  </span>
                  <button className="inline-flex items-center gap-1 text-xs text-primary hover:underline opacity-0 group-hover:opacity-100 transition-opacity">
                    Verify <ExternalLink className="w-3 h-3" />
                  </button>
                </div>
              </div>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  )
}
