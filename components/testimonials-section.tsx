"use client"

import { useState, useEffect } from "react"
import { ScrollAnimation } from "@/components/scroll-animation"
import { AnimatedLine } from "@/components/animated-line"
import { Quote, ChevronLeft, ChevronRight, Linkedin } from "lucide-react"

const testimonials = [
  {
    quote: "Julie brings energy and insight to every team she's part of. During her time in the quality department at North Memorial Health she consistently demonstrated a strong intuition for patient safety concerns and took proactive and reactive steps to address them. Julie's inquisitive nature and eagerness to learn make her a valuable contributor to any organization. She collaborates seamlessly across teams, fostering trust and partnering to drive results. Anyone looking for a dedicated, thoughtful, and collaborative team member would be fortunate to work with Julie.",
    author: "Linnea Huinker",
    role: "Director of Quality at North Memorial Health",
    date: "December 2025",
  },
  {
    quote: "Julie's excellent customer service skills aided in supporting our customers and assisting with efficiently fulfilling their needs. Julie was an asset to the team as a whole as she worked closely with the field technicians and customers to remedy an and all issues proficiently. I would gladly work with Julie again.",
    author: "Jim Coffey",
    role: "Senior Messaging\\Collaboration\\Security\\Active Directory Engineer",
    date: "August 2010",
  },
  {
    quote: "In working with Julie for a few years, I was able to rely on her ability to provide timely/concise information relevant to my work load. I was out of the office for most of our work together, and her phone presence to me (and our clients) was always reassuring, helpful, and kind. I enjoyed my time working with Julie.",
    author: "Michael Decker",
    role: "Assistant to the Registrar and Records Analyst",
    date: "August 2010",
  },
  {
    quote: "Julie has the ability to stay focused on the details and handle multiple projects at the same time. Her upbeat attitude never falters. She would be an asset to any company.",
    author: "Terry McIntire",
    role: "Former Colleague",
    date: "August 2008",
  },
]

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 6000)

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const goToNext = () => {
    setIsAutoPlaying(false)
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const goToPrev = () => {
    setIsAutoPlaying(false)
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section id="testimonials" className="py-32 relative overflow-hidden scroll-mt-20">
      {/* Background decorations */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-primary/3 rounded-full blur-3xl" />
      
      <div className="max-w-6xl mx-auto px-6 relative">
        <ScrollAnimation direction="up" delay={0.1}>
          <div className="flex items-center gap-4 mb-8">
            <AnimatedLine className="w-16" delay={0.2} />
            <h2 className="text-sm font-medium text-primary tracking-widest uppercase">Testimonials</h2>
          </div>
        </ScrollAnimation>

        <ScrollAnimation direction="up" delay={0.15}>
          <p className="text-xl text-muted-foreground mb-16 max-w-3xl">
            What colleagues and leaders say about working together on quality and safety initiatives.
          </p>
        </ScrollAnimation>

        <ScrollAnimation direction="up" delay={0.2}>
          <div className="relative max-w-4xl mx-auto">
            {/* Main testimonial card - render all cards stacked, show only active */}
            <div className="relative bg-card border border-border rounded-2xl p-8 md:p-12 overflow-hidden">
              {/* Decorative quote icon */}
              <div className="absolute top-6 right-6 opacity-10 z-0">
                <Quote className="w-24 h-24 text-primary" />
              </div>

              {/* Grid container - all cards stacked in same cell */}
              <div className="relative grid">
                {testimonials.map((testimonial, index) => (
                  <div
                    key={index}
                    className={`col-start-1 row-start-1 transition-opacity duration-500 ${
                      index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
                    }`}
                  >
                    {/* LinkedIn badge */}
                    <div className="flex items-center gap-2 mb-6 text-muted-foreground">
                      <Linkedin className="w-5 h-5 text-[#0A66C2]" />
                      <span className="text-sm">LinkedIn Recommendation</span>
                    </div>

                    {/* Quote */}
                    <blockquote className="text-xl md:text-2xl text-foreground leading-relaxed mb-8 font-light">
                      "{testimonial.quote}"
                    </blockquote>

                    {/* Author */}
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center flex-shrink-0">
                        <span className="text-lg font-semibold text-primary">
                          {testimonial.author.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                      <div>
                        <p className="font-semibold text-foreground">{testimonial.author}</p>
                        <p className="text-sm text-muted-foreground">
                          {testimonial.role}
                        </p>
                        <p className="text-xs text-muted-foreground/70">
                          {testimonial.date}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Progress bar */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-border">
                <div
                  className="h-full bg-primary transition-all duration-300"
                  style={{
                    width: `${((currentIndex + 1) / testimonials.length) * 100}%`,
                  }}
                />
              </div>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-between mt-8">
              {/* Dots */}
              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setIsAutoPlaying(false)
                      setCurrentIndex(index)
                    }}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentIndex
                        ? "bg-primary w-8"
                        : "bg-border hover:bg-muted-foreground"
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>

              {/* Arrows */}
              <div className="flex gap-2">
                <button
                  onClick={goToPrev}
                  className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:border-primary/50 hover:bg-primary/5 transition-all duration-300"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="w-5 h-5 text-muted-foreground" />
                </button>
                <button
                  onClick={goToNext}
                  className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:border-primary/50 hover:bg-primary/5 transition-all duration-300"
                  aria-label="Next testimonial"
                >
                  <ChevronRight className="w-5 h-5 text-muted-foreground" />
                </button>
              </div>
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  )
}

