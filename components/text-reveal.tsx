"use client"

import { useEffect, useRef, useState, ReactNode } from "react"

interface TextRevealProps {
  children: ReactNode
  className?: string
  delay?: number
}

export function TextReveal({ children, className = "", delay = 0 }: TextRevealProps) {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <div ref={ref} className={`overflow-hidden ${className}`}>
      <div
        style={{
          transform: isVisible ? "translateY(0)" : "translateY(100%)",
          opacity: isVisible ? 1 : 0,
          transition: `transform 0.8s cubic-bezier(0.16, 1, 0.3, 1) ${delay}s, opacity 0.8s ease ${delay}s`,
        }}
      >
        {children}
      </div>
    </div>
  )
}

interface WordRevealProps {
  text: string
  className?: string
  wordClassName?: string
  delay?: number
  staggerDelay?: number
}

export function WordReveal({ 
  text, 
  className = "", 
  wordClassName = "",
  delay = 0,
  staggerDelay = 0.05 
}: WordRevealProps) {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  const words = text.split(" ")

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <div ref={ref} className={className}>
      {words.map((word, index) => (
        <span key={index} className="inline-block overflow-hidden">
          <span
            className={`inline-block ${wordClassName}`}
            style={{
              transform: isVisible ? "translateY(0)" : "translateY(100%)",
              opacity: isVisible ? 1 : 0,
              transition: `transform 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${delay + index * staggerDelay}s, opacity 0.6s ease ${delay + index * staggerDelay}s`,
            }}
          >
            {word}
          </span>
          {index < words.length - 1 && <span>&nbsp;</span>}
        </span>
      ))}
    </div>
  )
}

