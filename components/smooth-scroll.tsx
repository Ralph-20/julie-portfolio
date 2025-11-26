"use client"

import { useEffect } from "react"

export function SmoothScrollProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Add smooth scroll behavior to the document
    const style = document.createElement("style")
    style.textContent = `
      html {
        scroll-behavior: smooth;
      }
      
      @media (prefers-reduced-motion: reduce) {
        html {
          scroll-behavior: auto;
        }
        * {
          animation-duration: 0.01ms !important;
          animation-iteration-count: 1 !important;
          transition-duration: 0.01ms !important;
        }
      }
    `
    document.head.appendChild(style)

    // Enhanced smooth scroll for anchor links
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      const anchor = target.closest("a[href^='#']")
      
      if (anchor) {
        const href = anchor.getAttribute("href")
        if (href && href.startsWith("#")) {
          const targetId = href.substring(1)
          const targetElement = document.getElementById(targetId)
          
          if (targetElement) {
            e.preventDefault()
            const navHeight = 80 // Approximate navigation height
            const targetPosition = targetElement.offsetTop - navHeight
            
            window.scrollTo({
              top: targetPosition,
              behavior: "smooth",
            })
          }
        }
      }
    }

    document.addEventListener("click", handleClick)

    return () => {
      document.removeEventListener("click", handleClick)
      if (document.head.contains(style)) {
        document.head.removeChild(style)
      }
    }
  }, [])

  return <>{children}</>
}

