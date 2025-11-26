"use client"

import { useEffect, useRef, useState } from "react"

interface AnimatedLineProps {
  className?: string
  direction?: "horizontal" | "vertical"
  delay?: number
}

export function AnimatedLine({ 
  className = "", 
  direction = "horizontal",
  delay = 0 
}: AnimatedLineProps) {
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

  const isHorizontal = direction === "horizontal"

  return (
    <div
      ref={ref}
      className={`overflow-hidden ${className}`}
      style={{
        height: isHorizontal ? "1px" : "100%",
      }}
    >
      <div
        className="bg-gradient-to-r from-primary via-primary to-transparent"
        style={{
          width: "100%",
          height: "100%",
          transform: isVisible 
            ? "translateX(0)" 
            : isHorizontal 
              ? "translateX(-100%)" 
              : "translateY(-100%)",
          transition: `transform 1s cubic-bezier(0.16, 1, 0.3, 1) ${delay}s`,
        }}
      />
    </div>
  )
}

