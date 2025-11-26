"use client"

import { useEffect, useRef, useState } from "react"
import { AnimatedCounter } from "@/components/animated-counter"
import { Shield, FileCheck, Award, Clock } from "lucide-react"

const achievements = [
  { icon: Shield, value: 135, suffix: "+", label: "Adverse Event Reviews" },
  { icon: FileCheck, value: 100, suffix: "%", label: "CMS Compliance" },
  { icon: Award, value: "4.0", suffix: "", label: "GPA", isStatic: true },
  { icon: Clock, value: 15, suffix: "+", label: "Years Experience" },
]

export function AchievementsBanner() {
  const [isVisible, setIsVisible] = useState(false)
  const bannerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 }
    )

    if (bannerRef.current) {
      observer.observe(bannerRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section 
      ref={bannerRef}
      className="py-16 bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 border-y border-border relative overflow-hidden"
    >
      {/* Animated background pattern */}
      <div className="absolute inset-0 opacity-30">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)`,
            backgroundSize: '32px 32px',
          }}
        />
      </div>

      {/* Scrolling highlight effect */}
      <div 
        className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/10 to-transparent"
        style={{
          animation: 'shimmer 3s infinite',
          backgroundSize: '200% 100%',
        }}
      />

      <div className="max-w-6xl mx-auto px-6 relative">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className={`text-center group transition-all duration-500 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 mb-3 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                <achievement.icon className="w-6 h-6 text-primary" />
              </div>
              <div className="text-3xl md:text-4xl font-bold text-foreground mb-1">
                {achievement.isStatic ? (
                  <span>{achievement.value}{achievement.suffix}</span>
                ) : (
                  <AnimatedCounter 
                    end={achievement.value as number} 
                    suffix={achievement.suffix}
                    duration={2000}
                  />
                )}
              </div>
              <p className="text-sm text-muted-foreground">{achievement.label}</p>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
      `}</style>
    </section>
  )
}

