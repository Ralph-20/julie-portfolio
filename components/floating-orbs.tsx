"use client"

import { useEffect, useRef } from "react"

interface Orb {
  x: number
  y: number
  vx: number
  vy: number
  radius: number
  opacity: number
  hue: number
}

export function FloatingOrbs() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const orbsRef = useRef<Orb[]>([])
  const mouseRef = useRef({ x: 0, y: 0 })
  const animationRef = useRef<number>(0)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener("resize", resize)

    // Initialize orbs
    const orbCount = 6
    orbsRef.current = Array.from({ length: orbCount }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
      radius: 150 + Math.random() * 200,
      opacity: 0.03 + Math.random() * 0.04,
      hue: 175 + Math.random() * 20, // Teal range
    }))

    // Track mouse for subtle interaction
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY }
    }
    window.addEventListener("mousemove", handleMouseMove)

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      orbsRef.current.forEach((orb) => {
        // Subtle mouse attraction
        const dx = mouseRef.current.x - orb.x
        const dy = mouseRef.current.y - orb.y
        const dist = Math.sqrt(dx * dx + dy * dy)
        
        if (dist < 400) {
          orb.vx += (dx / dist) * 0.01
          orb.vy += (dy / dist) * 0.01
        }

        // Apply velocity with damping
        orb.x += orb.vx
        orb.y += orb.vy
        orb.vx *= 0.99
        orb.vy *= 0.99

        // Bounce off edges with padding
        const padding = orb.radius
        if (orb.x < padding || orb.x > canvas.width - padding) orb.vx *= -1
        if (orb.y < padding || orb.y > canvas.height - padding) orb.vy *= -1

        // Draw orb with gradient
        const gradient = ctx.createRadialGradient(
          orb.x, orb.y, 0,
          orb.x, orb.y, orb.radius
        )
        gradient.addColorStop(0, `hsla(${orb.hue}, 60%, 50%, ${orb.opacity})`)
        gradient.addColorStop(0.5, `hsla(${orb.hue}, 60%, 40%, ${orb.opacity * 0.5})`)
        gradient.addColorStop(1, `hsla(${orb.hue}, 60%, 30%, 0)`)

        ctx.beginPath()
        ctx.arc(orb.x, orb.y, orb.radius, 0, Math.PI * 2)
        ctx.fillStyle = gradient
        ctx.fill()
      })

      animationRef.current = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", resize)
      window.removeEventListener("mousemove", handleMouseMove)
      cancelAnimationFrame(animationRef.current)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ filter: "blur(60px)" }}
    />
  )
}

