"use client"

import Image from "next/image"
import { ScrollAnimation } from "@/components/scroll-animation"

export function HeroSection() {
  return (
    <section className="min-h-screen flex items-center relative overflow-hidden pt-20">
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/10" />
      
      {/* Floating geometric shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/8 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-accent/5 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

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
          <ScrollAnimation direction="right" delay={0.1} className="order-2 md:order-1">
            <div>
              {/* Eyebrow text */}
              <div className="flex items-center gap-3 mb-6">
                <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-primary/10 border border-primary/20 rounded-full text-primary text-sm font-medium">
                  <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                  Available for Opportunities
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                Julie Ralph
              </h1>
              
              <p className="text-primary text-xl md:text-2xl font-semibold mt-4 tracking-wide">
                Healthcare Quality & Patient Safety Professional
              </p>

              <p className="text-muted-foreground text-lg leading-relaxed mt-6 max-w-lg">
                Strategic and results-oriented professional with over 15 years of experience driving improvement initiatives. 
                Dedicated to advancing organizational excellence and patient outcomes through evidence-based quality initiatives.
              </p>

              {/* Key highlights */}
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="flex items-center gap-3 p-3 bg-card/50 rounded-lg border border-border/50 backdrop-blur-sm">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-foreground font-medium text-sm">Patient Safety</p>
                    <p className="text-muted-foreground text-xs">Zero Harm</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 p-3 bg-card/50 rounded-lg border border-border/50 backdrop-blur-sm">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-foreground font-medium text-sm">Quality Systems</p>
                    <p className="text-muted-foreground text-xs">CMS & DNV</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 p-3 bg-card/50 rounded-lg border border-border/50 backdrop-blur-sm">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-foreground font-medium text-sm">Data Analysis</p>
                    <p className="text-muted-foreground text-xs">Epic EMR</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 mt-10">
                <a
                  href="#contact"
                  className="group inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-primary text-primary-foreground rounded-xl font-semibold hover:bg-primary/90 transition-all duration-300 shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-0.5"
                >
                  Get in Touch
                  <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
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
            </div>
          </ScrollAnimation>

          {/* Profile Image */}
          <ScrollAnimation direction="left" delay={0.2} className="order-1 md:order-2 flex justify-center md:justify-end">
            <div className="relative">
              {/* Decorative rings */}
              <div className="absolute -inset-4 border-2 border-dashed border-primary/20 rounded-full animate-spin" style={{ animationDuration: '30s' }} />
              <div className="absolute -inset-8 border border-primary/10 rounded-full" />
              
              {/* Glow effect */}
              <div className="absolute -inset-2 bg-gradient-to-br from-primary/40 via-primary/20 to-accent/30 rounded-full blur-xl opacity-60" />
              
              {/* Main image container */}
              <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-primary/30 shadow-2xl shadow-primary/20">
                <Image
                  src="/images/mom.jpg"
                  alt="Julie Ralph, MHA - Healthcare Quality & Patient Safety Professional"
                  fill
                  className="object-cover object-center"
                  priority
                />
              </div>

              {/* Floating badge */}
              <div className="absolute -bottom-2 -right-2 md:bottom-4 md:right-0 bg-card border border-border rounded-xl px-4 py-2 shadow-lg backdrop-blur-sm">
                <p className="text-xs text-muted-foreground">Experience</p>
                <p className="text-lg font-bold text-primary">15+ Years</p>
              </div>
            </div>
          </ScrollAnimation>
        </div>

        {/* Bottom tagline */}
        <ScrollAnimation direction="up" delay={0.4} className="mt-16 md:mt-24">
          <div className="text-center border-t border-border/50 pt-8">
            <p className="text-muted-foreground text-sm md:text-base max-w-2xl mx-auto">
              Explore my professional journey in healthcare quality—from regulatory readiness and root cause analysis 
              to strengthening safety culture and sustaining compliance across complex healthcare environments.
            </p>
          </div>
        </ScrollAnimation>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <span className="text-muted-foreground text-xs tracking-widest uppercase">Scroll</span>
        <svg className="w-5 h-5 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  )
}
