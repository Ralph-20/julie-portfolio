"use client"

import { ScrollAnimation } from "@/components/scroll-animation"
import { AnimatedLine } from "@/components/animated-line"

export function AboutSection() {
  return (
    <section id="about" className="py-32 bg-secondary/20 relative overflow-hidden scroll-mt-20">
      {/* Decorative background element */}
      <div className="absolute top-1/2 -right-32 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
      
      <div className="max-w-6xl mx-auto px-6 relative">
        <ScrollAnimation direction="up" delay={0.1}>
          <div className="flex items-center gap-4 mb-8">
            <AnimatedLine className="w-16" delay={0.2} />
            <h2 className="text-sm font-medium text-primary tracking-widest uppercase">About</h2>
          </div>
        </ScrollAnimation>

        <ScrollAnimation direction="up" delay={0.2}>
          <div className="space-y-6 text-lg leading-relaxed text-muted-foreground">
            <p className="relative">
              <span className="absolute -left-4 top-0 text-4xl text-primary/20 font-serif">"</span>
              I'm a strategic and results-oriented Healthcare Quality and Patient Safety professional with extensive 
              experience driving improvement initiatives in{" "}
              <span className="text-foreground font-medium relative group cursor-default">
                inpatient and outpatient settings
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary/30 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </span>. My expertise spans{" "}
              <span className="text-foreground font-medium relative group cursor-default">
                quality management systems
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary/30 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </span>,{" "}
              <span className="text-foreground font-medium relative group cursor-default">
                root cause analysis
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary/30 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </span>, and{" "}
              <span className="text-foreground font-medium relative group cursor-default">
                regulatory readiness (CMS/DNV)
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary/30 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </span>.
            </p>
            <p>
              I've built a career collaborating with clinical and operational leaders to strengthen safety culture, 
              reduce harm, and sustain compliance across complex healthcare environments. I'm adept at translating 
              safety and quality data into actionable insights that support high reliability and continuous improvement.
            </p>
            <p className="relative">
              My mission remains the same: to advance organizational excellence and patient outcomes through 
              evidence-based quality initiatives—making healthcare safer, one improvement at a time.
              <span className="absolute -right-4 bottom-0 text-4xl text-primary/20 font-serif">"</span>
            </p>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  )
}
