"use client"

import { Mail, Linkedin, Download } from "lucide-react"
import { ScrollAnimation } from "@/components/scroll-animation"

export function ContactSection() {
  return (
    <section className="py-32 bg-secondary/20">
      <div id="contact" className="scroll-mt-20 max-w-6xl mx-auto px-6">
        <ScrollAnimation direction="up" delay={0.1}>
          <div className="flex items-center gap-4 mb-8">
            <div className="w-16 h-px bg-primary" />
            <h2 className="text-sm font-medium text-primary tracking-widest uppercase">Contact</h2>
          </div>
        </ScrollAnimation>

        <ScrollAnimation direction="up" delay={0.2}>
          <p className="text-2xl md:text-3xl font-medium text-foreground leading-relaxed mb-8 text-balance">
            Interested in connecting? I'd love to discuss opportunities in healthcare quality and patient safety.
          </p>
        </ScrollAnimation>

        <ScrollAnimation direction="up" delay={0.3}>
          <div className="flex flex-col sm:flex-row gap-6">
            <a
              href="mailto:julieralph@comcast.net"
              className="inline-flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors group"
            >
              <div className="w-10 h-10 rounded-lg bg-card border border-border flex items-center justify-center group-hover:border-primary/50 transition-colors">
                <Mail className="w-5 h-5" />
              </div>
              <span>Email</span>
            </a>
            <a
              href="https://www.linkedin.com/in/jralph/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors group"
            >
              <div className="w-10 h-10 rounded-lg bg-card border border-border flex items-center justify-center group-hover:border-primary/50 transition-colors">
                <Linkedin className="w-5 h-5" />
              </div>
              <span>LinkedIn</span>
            </a>
            <a
              href="/2025 Julie Ralph General Resume.pdf"
              download
              className="inline-flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors group"
            >
              <div className="w-10 h-10 rounded-lg bg-card border border-border flex items-center justify-center group-hover:border-primary/50 transition-colors">
                <Download className="w-5 h-5" />
              </div>
              <span>Resume</span>
            </a>
          </div>
        </ScrollAnimation>

        <ScrollAnimation direction="up" delay={0.4}>
          <div className="mt-20 pt-8 border-t border-border">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Julie Ralph. Making healthcare safer, one step at a time.
            </p>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  )
}
