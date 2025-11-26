"use client"

import { Mail, Linkedin } from "lucide-react"
import { ScrollAnimation } from "@/components/scroll-animation"
import { MagneticCard } from "@/components/magnetic-card"
import { AnimatedLine } from "@/components/animated-line"
import { ResumeButton } from "@/components/resume-button"

export function ContactSection() {
  return (
    <section id="contact" className="py-32 bg-secondary/20 relative overflow-hidden scroll-mt-20">
      {/* Decorative elements */}
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      
      <div className="max-w-6xl mx-auto px-6 relative">
        <ScrollAnimation direction="up" delay={0.1}>
          <div className="flex items-center gap-4 mb-8">
            <AnimatedLine className="w-16" delay={0.2} />
            <h2 className="text-sm font-medium text-primary tracking-widest uppercase">Contact</h2>
          </div>
        </ScrollAnimation>

        <ScrollAnimation direction="up" delay={0.2}>
          <p className="text-2xl md:text-3xl font-medium text-foreground leading-relaxed mb-8 text-balance">
            Interested in connecting? I'd love to discuss opportunities in healthcare quality and patient safety.
          </p>
        </ScrollAnimation>

        <ScrollAnimation direction="up" delay={0.3}>
          <div className="flex flex-col sm:flex-row items-start gap-6 mb-10">
            {[
              { href: "mailto:julieralph@comcast.net", icon: Mail, label: "Email" },
              { href: "https://www.linkedin.com/in/jralph/", icon: Linkedin, label: "LinkedIn", external: true },
            ].map((item, index) => (
              <MagneticCard key={index} intensity={0.3}>
                <a
                  href={item.href}
                  {...(item.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  className="inline-flex items-center gap-3 text-muted-foreground hover:text-primary transition-all duration-300 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-card border border-border flex items-center justify-center group-hover:border-primary/50 group-hover:bg-primary/5 group-hover:scale-110 transition-all duration-300">
                    <item.icon className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <span className="font-medium group-hover:translate-x-1 transition-transform duration-300">{item.label}</span>
                </a>
              </MagneticCard>
            ))}
          </div>
        </ScrollAnimation>

        {/* Enhanced Resume Download */}
        <ScrollAnimation direction="up" delay={0.4}>
          <ResumeButton />
        </ScrollAnimation>

        <ScrollAnimation direction="up" delay={0.5}>
          <div className="mt-20 pt-8 border-t border-border relative">
            <div className="absolute top-0 left-0 w-1/3 h-px bg-gradient-to-r from-primary/50 to-transparent" />
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Julie Ralph. Making healthcare safer, one step at a time.
            </p>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  )
}
