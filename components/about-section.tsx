"use client"

import { ScrollAnimation } from "@/components/scroll-animation"

export function AboutSection() {
  return (
    <section className="py-32 bg-secondary/20">
      <div id="about" className="scroll-mt-20 max-w-6xl mx-auto px-6">
        <ScrollAnimation direction="up" delay={0.1}>
          <div className="flex items-center gap-4 mb-8">
            <div className="w-16 h-px bg-primary" />
            <h2 className="text-sm font-medium text-primary tracking-widest uppercase">About</h2>
          </div>
        </ScrollAnimation>

        <ScrollAnimation direction="up" delay={0.2}>
          <div className="space-y-6 text-lg leading-relaxed text-muted-foreground">
            <p>
              I'm a strategic and results-oriented Healthcare Quality and Patient Safety professional with over 15 years of 
              experience driving improvement initiatives in{" "}
              <span className="text-foreground font-medium">inpatient and outpatient settings</span>. My expertise spans{" "}
              <span className="text-foreground font-medium">quality management systems</span>,{" "}
              <span className="text-foreground font-medium">root cause analysis</span>, and{" "}
              <span className="text-foreground font-medium">regulatory readiness (CMS/DNV)</span>.
            </p>
            <p>
              I've built a career collaborating with clinical and operational leaders to strengthen safety culture, 
              reduce harm, and sustain compliance across complex healthcare environments. I'm adept at translating 
              safety and quality data into actionable insights that support high reliability and continuous improvement.
            </p>
            <p>
              My mission remains the same: to advance organizational excellence and patient outcomes through 
              evidence-based quality initiatives—making healthcare safer, one improvement at a time.
            </p>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  )
}
