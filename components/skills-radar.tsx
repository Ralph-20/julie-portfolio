"use client"

import { useEffect, useRef, useState } from "react"
import { ScrollAnimation } from "@/components/scroll-animation"
import { AnimatedLine } from "@/components/animated-line"

const skills = [
  { name: "Patient Safety", level: 95, description: "Zero harm initiatives, adverse event reviews, root cause analysis" },
  { name: "Quality Systems", level: 90, description: "QMS development, process improvement, performance metrics" },
  { name: "Regulatory Compliance", level: 92, description: "CMS, DNV, government quality reporting" },
  { name: "Data Analysis", level: 88, description: "Epic EMR, chart abstraction, trend analysis" },
  { name: "Leadership", level: 85, description: "Cross-functional collaboration, change management" },
  { name: "Process Improvement", level: 90, description: "Lean Six Sigma, evidence-based initiatives" },
]

export function SkillsRadar() {
  const [isVisible, setIsVisible] = useState(false)
  const [hoveredSkill, setHoveredSkill] = useState<number | null>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 }
    )

    if (containerRef.current) {
      observer.observe(containerRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const centerX = 150
  const centerY = 150
  const maxRadius = 120

  // Calculate points for the radar
  const getPoint = (index: number, level: number) => {
    const angle = (Math.PI * 2 * index) / skills.length - Math.PI / 2
    const radius = (level / 100) * maxRadius
    return {
      x: centerX + radius * Math.cos(angle),
      y: centerY + radius * Math.sin(angle),
    }
  }

  // Generate the skill polygon path
  const skillPath = skills
    .map((skill, i) => {
      const point = getPoint(i, isVisible ? skill.level : 0)
      return `${i === 0 ? "M" : "L"} ${point.x} ${point.y}`
    })
    .join(" ") + " Z"

  // Generate grid circles
  const gridLevels = [25, 50, 75, 100]

  return (
    <section id="skills" className="py-32 bg-secondary/20 relative overflow-hidden scroll-mt-20">
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      
      <div className="max-w-6xl mx-auto px-6 relative">
        <ScrollAnimation direction="up" delay={0.1}>
          <div className="flex items-center gap-4 mb-8">
            <AnimatedLine className="w-16" delay={0.2} />
            <h2 className="text-sm font-medium text-primary tracking-widest uppercase">Core Competencies</h2>
          </div>
        </ScrollAnimation>

        <ScrollAnimation direction="up" delay={0.15}>
          <p className="text-xl text-muted-foreground mb-16 max-w-3xl">
            A comprehensive skill set built over 15+ years in healthcare quality and patient safety.
          </p>
        </ScrollAnimation>

        <div ref={containerRef} className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Radar Chart */}
          <ScrollAnimation direction="left" delay={0.2}>
            <div className="relative flex justify-center">
              <svg viewBox="0 0 300 300" className="w-full max-w-md">
                {/* Grid circles */}
                {gridLevels.map((level) => (
                  <circle
                    key={level}
                    cx={centerX}
                    cy={centerY}
                    r={(level / 100) * maxRadius}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1"
                    className="text-border"
                    strokeDasharray="4 4"
                  />
                ))}

                {/* Axis lines */}
                {skills.map((_, i) => {
                  const point = getPoint(i, 100)
                  return (
                    <line
                      key={i}
                      x1={centerX}
                      y1={centerY}
                      x2={point.x}
                      y2={point.y}
                      stroke="currentColor"
                      strokeWidth="1"
                      className="text-border"
                    />
                  )
                })}

                {/* Skill area */}
                <path
                  d={skillPath}
                  fill="currentColor"
                  className="text-primary/20"
                  stroke="currentColor"
                  strokeWidth="2"
                  style={{
                    transition: "d 1s ease-out",
                  }}
                />
                <path
                  d={skillPath}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="text-primary"
                  style={{
                    transition: "d 1s ease-out",
                  }}
                />

                {/* Skill points */}
                {skills.map((skill, i) => {
                  const point = getPoint(i, isVisible ? skill.level : 0)
                  return (
                    <g key={i}>
                      <circle
                        cx={point.x}
                        cy={point.y}
                        r={hoveredSkill === i ? 8 : 5}
                        fill="currentColor"
                        className="text-primary transition-all duration-300 cursor-pointer"
                        onMouseEnter={() => setHoveredSkill(i)}
                        onMouseLeave={() => setHoveredSkill(null)}
                        style={{
                          transition: "cx 1s ease-out, cy 1s ease-out, r 0.2s ease-out",
                        }}
                      />
                      {hoveredSkill === i && (
                        <circle
                          cx={point.x}
                          cy={point.y}
                          r="12"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          className="text-primary/50 animate-ping"
                        />
                      )}
                    </g>
                  )
                })}

                {/* Labels */}
                {skills.map((skill, i) => {
                  const point = getPoint(i, 115)
                  const isLeft = point.x < centerX
                  const isTop = point.y < centerY
                  return (
                    <text
                      key={i}
                      x={point.x}
                      y={point.y}
                      textAnchor={Math.abs(point.x - centerX) < 10 ? "middle" : isLeft ? "end" : "start"}
                      dominantBaseline={Math.abs(point.y - centerY) < 10 ? "middle" : isTop ? "auto" : "hanging"}
                      className={`text-xs fill-current transition-colors duration-300 ${
                        hoveredSkill === i ? "text-primary font-medium" : "text-muted-foreground"
                      }`}
                      style={{ fontSize: "11px" }}
                    >
                      {skill.name}
                    </text>
                  )
                })}
              </svg>
            </div>
          </ScrollAnimation>

          {/* Skills List */}
          <ScrollAnimation direction="right" delay={0.3}>
            <div className="space-y-4">
              {skills.map((skill, index) => (
                <div
                  key={index}
                  className={`group p-4 rounded-xl bg-card border border-border hover:border-primary/30 transition-all duration-300 cursor-pointer ${
                    hoveredSkill === index ? "border-primary/50 bg-card/80" : ""
                  }`}
                  onMouseEnter={() => setHoveredSkill(index)}
                  onMouseLeave={() => setHoveredSkill(null)}
                >
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-medium text-foreground group-hover:text-primary transition-colors duration-300">
                      {skill.name}
                    </h3>
                    <span className="text-sm font-bold text-primary">{skill.level}%</span>
                  </div>
                  
                  {/* Progress bar */}
                  <div className="h-2 bg-secondary rounded-full overflow-hidden mb-2">
                    <div
                      className="h-full bg-gradient-to-r from-primary to-primary/70 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: isVisible ? `${skill.level}%` : "0%" }}
                    />
                  </div>
                  
                  <p className="text-xs text-muted-foreground">{skill.description}</p>
                </div>
              ))}
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  )
}

