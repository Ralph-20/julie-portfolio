"use client"

import Image from "next/image"
import { ScrollAnimation } from "@/components/scroll-animation"
import { TextReveal, WordReveal } from "@/components/text-reveal"
import { MagneticCard } from "@/components/magnetic-card"
import { HeroBackground } from "@/components/hero-background"

export function HeroSection() {
  return (
    <section className="min-h-screen flex items-center relative overflow-hidden pt-20">
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/10" />
      
      {/* Enhanced background effects */}
      <HeroBackground />
      
      {/* Subtle grid pattern overlay */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}
      />

      <div className="max-w-6xl mx-auto px-6 py-20 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text Content */}
          <div className="order-2 md:order-1">
            <div>
              {/* Eyebrow text */}
              <ScrollAnimation direction="right" delay={0.1}>
                <div className="flex items-center gap-3 mb-6">
                  <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-primary/10 border border-primary/20 rounded-full text-primary text-sm font-medium">
                    <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                    Available for Opportunities
                  </span>
                </div>
              </ScrollAnimation>

              <TextReveal delay={0.2}>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                  Julie Ralph
                </h1>
              </TextReveal>
              
              <WordReveal 
                text="Healthcare Quality & Patient Safety Professional"
                className="text-primary text-xl md:text-2xl font-semibold mt-4 tracking-wide"
                delay={0.4}
                staggerDelay={0.03}
              />

              <ScrollAnimation direction="up" delay={0.6}>
                <p className="text-muted-foreground text-lg leading-relaxed mt-6 max-w-lg">
                  Strategic and results-oriented professional with over 15 years of experience driving improvement initiatives. 
                  Dedicated to advancing organizational excellence and patient outcomes through evidence-based quality initiatives.
                </p>
              </ScrollAnimation>

              {/* Key highlights */}
              <ScrollAnimation direction="up" delay={0.7}>
                <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {[
                    { icon: "shield", title: "Patient Safety", subtitle: "Zero Harm" },
                    { icon: "clipboard", title: "Quality Systems", subtitle: "CMS & DNV" },
                    { icon: "chart", title: "Data Analysis", subtitle: "Epic EMR" },
                  ].map((item, index) => (
                    <MagneticCard key={index} intensity={0.3}>
                      <div className="flex items-center gap-3 p-3 bg-card/50 rounded-lg border border-border/50 backdrop-blur-sm hover:border-primary/30 transition-colors duration-300">
                        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                          {item.icon === "shield" && (
                            <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                            </svg>
                          )}
                          {item.icon === "clipboard" && (
                            <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                            </svg>
                          )}
                          {item.icon === "chart" && (
                            <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                            </svg>
                          )}
                        </div>
                        <div>
                          <p className="text-foreground font-medium text-sm">{item.title}</p>
                          <p className="text-muted-foreground text-xs">{item.subtitle}</p>
                        </div>
                      </div>
                    </MagneticCard>
                  ))}
                </div>
              </ScrollAnimation>

              <ScrollAnimation direction="up" delay={0.8}>
                <div className="flex flex-col sm:flex-row gap-4 mt-10">
                  <a
                    href="#contact"
                    className="group inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-primary text-primary-foreground rounded-xl font-semibold hover:bg-primary/90 transition-all duration-300 shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-0.5 relative overflow-hidden"
                  >
                    <span className="relative z-10">Get in Touch</span>
                    <svg className="w-4 h-4 transition-transform group-hover:translate-x-1 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                    {/* Shine effect */}
                    <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                  </a>
                  <a
                    href="#about"
                    className="group inline-flex items-center justify-center gap-2 px-7 py-3.5 border-2 border-border text-foreground rounded-xl font-semibold hover:bg-secondary hover:border-secondary transition-all duration-300"
                  >
                    Learn More
                    <svg className="w-4 h-4 transition-transform group-hover:translate-y-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                  </a>
                </div>
              </ScrollAnimation>
            </div>
          </div>

          {/* Profile Image */}
          <ScrollAnimation direction="left" delay={0.2} className="order-1 md:order-2 flex justify-center md:justify-end">
            <div className="relative group">
              {/* Decorative rings */}
              <div className="absolute -inset-4 border-2 border-dashed border-primary/20 rounded-full animate-spin" style={{ animationDuration: '30s' }} />
              <div className="absolute -inset-8 border border-primary/10 rounded-full group-hover:border-primary/20 transition-colors duration-500" />
              
              {/* Glow effect */}
              <div className="absolute -inset-2 bg-gradient-to-br from-primary/40 via-primary/20 to-accent/30 rounded-full blur-xl opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
              
              {/* Main image container */}
              <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-primary/30 shadow-2xl shadow-primary/20 group-hover:border-primary/50 transition-all duration-500">
                <Image
                  src="/images/mom.jpg"
                  alt="Julie Ralph, MHA - Healthcare Quality & Patient Safety Professional"
                  fill
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  priority
                />
              </div>

              {/* Floating badge */}
              <MagneticCard intensity={0.5} className="absolute -bottom-2 -right-2 md:bottom-4 md:right-0">
                <div className="bg-card border border-border rounded-xl px-4 py-2 shadow-lg backdrop-blur-sm hover:border-primary/30 transition-colors duration-300">
                  <p className="text-xs text-muted-foreground">Experience</p>
                  <p className="text-lg font-bold text-primary">15+ Years</p>
                </div>
              </MagneticCard>
            </div>
          </ScrollAnimation>
        </div>

        {/* Bottom tagline */}
        <ScrollAnimation direction="up" delay={0.9} className="mt-16 md:mt-24">
          <div className="text-center border-t border-border/50 pt-8">
            <p className="text-muted-foreground text-sm md:text-base max-w-2xl mx-auto">
              Explore my professional journey in healthcare quality—from regulatory readiness and root cause analysis 
              to strengthening safety culture and sustaining compliance across complex healthcare environments.
            </p>
          </div>
        </ScrollAnimation>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-muted-foreground text-xs tracking-widest uppercase animate-pulse">Scroll</span>
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-1">
          <div className="w-1.5 h-3 bg-primary rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  )
}
