"use client"

import { useEffect, useRef } from "react"

export function HeroBackground() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    // Create floating particles with CSS animations only
    const particleCount = 20
    
    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement("div")
      particle.className = "hero-particle"
      
      // Random positioning
      particle.style.left = `${Math.random() * 100}%`
      particle.style.top = `${Math.random() * 100}%`
      
      // Random size
      const size = 2 + Math.random() * 4
      particle.style.width = `${size}px`
      particle.style.height = `${size}px`
      
      // Random animation duration and delay
      particle.style.animationDuration = `${15 + Math.random() * 20}s`
      particle.style.animationDelay = `${Math.random() * 10}s`
      
      // Random opacity
      particle.style.opacity = `${0.1 + Math.random() * 0.3}`
      
      container.appendChild(particle)
    }

    return () => {
      // Cleanup particles
      const particles = container.querySelectorAll(".hero-particle")
      particles.forEach((p) => p.remove())
    }
  }, [])

  return (
    <>
      <div 
        ref={containerRef}
        className="absolute inset-0 overflow-hidden pointer-events-none"
      >
        {/* Gradient orbs - static but with subtle CSS animation */}
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '8s' }} />
        <div className="absolute bottom-1/4 -right-32 w-80 h-80 bg-primary/5 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '10s', animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/3 rounded-full blur-3xl" />
        
        {/* Connection lines SVG */}
        <svg className="absolute inset-0 w-full h-full opacity-20" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="currentColor" stopOpacity="0" />
              <stop offset="50%" stopColor="currentColor" stopOpacity="0.5" />
              <stop offset="100%" stopColor="currentColor" stopOpacity="0" />
            </linearGradient>
          </defs>
          
          {/* Animated connection lines */}
          <line 
            x1="10%" y1="20%" x2="30%" y2="40%" 
            stroke="url(#lineGradient)" 
            strokeWidth="1"
            className="text-primary animate-pulse"
            style={{ animationDuration: '4s' }}
          />
          <line 
            x1="70%" y1="15%" x2="85%" y2="35%" 
            stroke="url(#lineGradient)" 
            strokeWidth="1"
            className="text-primary animate-pulse"
            style={{ animationDuration: '5s', animationDelay: '1s' }}
          />
          <line 
            x1="20%" y1="70%" x2="40%" y2="85%" 
            stroke="url(#lineGradient)" 
            strokeWidth="1"
            className="text-primary animate-pulse"
            style={{ animationDuration: '6s', animationDelay: '2s' }}
          />
          <line 
            x1="60%" y1="60%" x2="80%" y2="75%" 
            stroke="url(#lineGradient)" 
            strokeWidth="1"
            className="text-primary animate-pulse"
            style={{ animationDuration: '4.5s', animationDelay: '0.5s' }}
          />
        </svg>
      </div>

      <style jsx global>{`
        .hero-particle {
          position: absolute;
          background: currentColor;
          border-radius: 50%;
          color: var(--primary);
          animation: float-particle linear infinite;
        }

        @keyframes float-particle {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          25% {
            transform: translate(20px, -30px) scale(1.1);
          }
          50% {
            transform: translate(-10px, -50px) scale(0.9);
          }
          75% {
            transform: translate(30px, -20px) scale(1.05);
          }
        }
      `}</style>
    </>
  )
}

