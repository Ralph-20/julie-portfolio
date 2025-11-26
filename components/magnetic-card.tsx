"use client"

import { useRef, useState, ReactNode } from "react"

interface MagneticCardProps {
  children: ReactNode
  className?: string
  intensity?: number
}

export function MagneticCard({ 
  children, 
  className = "", 
  intensity = 0.1 
}: MagneticCardProps) {
  const cardRef = useRef<HTMLDivElement>(null)
  const [transform, setTransform] = useState({ x: 0, y: 0, rotateX: 0, rotateY: 0 })
  const [isHovering, setIsHovering] = useState(false)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return

    const rect = cardRef.current.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    
    const mouseX = e.clientX - centerX
    const mouseY = e.clientY - centerY
    
    // Calculate rotation based on mouse position
    const rotateX = (mouseY / (rect.height / 2)) * -8 * intensity
    const rotateY = (mouseX / (rect.width / 2)) * 8 * intensity
    
    // Subtle translation
    const x = mouseX * 0.05 * intensity
    const y = mouseY * 0.05 * intensity

    setTransform({ x, y, rotateX, rotateY })
  }

  const handleMouseLeave = () => {
    setIsHovering(false)
    setTransform({ x: 0, y: 0, rotateX: 0, rotateY: 0 })
  }

  const handleMouseEnter = () => {
    setIsHovering(true)
  }

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={handleMouseEnter}
      className={className}
      style={{
        transform: `perspective(1000px) translateX(${transform.x}px) translateY(${transform.y}px) rotateX(${transform.rotateX}deg) rotateY(${transform.rotateY}deg)`,
        transition: isHovering ? "transform 0.1s ease-out" : "transform 0.5s ease-out",
        transformStyle: "preserve-3d",
      }}
    >
      {children}
    </div>
  )
}

