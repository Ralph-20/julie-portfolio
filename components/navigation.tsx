"use client"

import { useState, useEffect, useCallback, useRef } from "react"
import { Menu, X } from "lucide-react"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("")
  const [menuHeight, setMenuHeight] = useState(0)
  const isScrollingRef = useRef(false)
  const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null)
  const menuRef = useRef<HTMLDivElement>(null)

  const navItems = [
    { label: "About", href: "#about" },
    { label: "Journey", href: "#timeline" },
    { label: "Case Studies", href: "#case-studies" },
    { label: "Contact", href: "#contact" },
  ]

  // Calculate menu height for smooth animation
  useEffect(() => {
    if (menuRef.current) {
      const scrollHeight = menuRef.current.scrollHeight
      setMenuHeight(scrollHeight)
    }
  }, [navItems])

  // Scroll to a section and update the URL hash
  const scrollToSection = useCallback((sectionId: string) => {
    const targetElement = document.getElementById(sectionId)
    
    if (targetElement) {
      // Set scrolling flag to prevent scroll handler from overriding
      isScrollingRef.current = true
      
      // scrollIntoView respects scroll-margin-top CSS property automatically
      targetElement.scrollIntoView({ behavior: "smooth" })
      
      // Update URL hash without triggering a scroll
      window.history.pushState(null, "", `#${sectionId}`)
      setActiveSection(sectionId)
      
      // Clear scrolling flag after animation completes
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current)
      }
      scrollTimeoutRef.current = setTimeout(() => {
        isScrollingRef.current = false
      }, 1000)
    }
  }, [])

  // Handle hash changes (browser back/forward, direct URL access)
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.substring(1)
      if (hash) {
        setActiveSection(hash)
        // Small delay to ensure DOM is ready
        setTimeout(() => {
          const targetElement = document.getElementById(hash)
          if (targetElement) {
            isScrollingRef.current = true
            // scrollIntoView respects scroll-margin-top CSS property automatically
            targetElement.scrollIntoView({ behavior: "smooth" })
            setTimeout(() => {
              isScrollingRef.current = false
            }, 1000)
          }
        }, 100)
      }
    }

    // Check initial hash on mount
    const initialHash = window.location.hash.substring(1)
    if (initialHash) {
      setActiveSection(initialHash)
      // Scroll to section after page load
      setTimeout(() => {
        const targetElement = document.getElementById(initialHash)
        if (targetElement) {
          isScrollingRef.current = true
          // scrollIntoView respects scroll-margin-top CSS property automatically
          targetElement.scrollIntoView({ behavior: "smooth" })
          setTimeout(() => {
            isScrollingRef.current = false
          }, 1000)
        }
      }, 100)
    }

    window.addEventListener("hashchange", handleHashChange)
    return () => {
      window.removeEventListener("hashchange", handleHashChange)
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current)
      }
    }
  }, [])

  // Update active section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      // Don't update during programmatic scrolling
      if (isScrollingRef.current) return
      
      const sections = navItems.map((item) => item.href.substring(1))
      
      // If at the very top, clear active section
      if (window.scrollY < 100) {
        setActiveSection("")
        window.history.replaceState(null, "", window.location.pathname)
        return
      }

      // Check if we're at the bottom of the page (for Contact section)
      const isAtBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 100
      if (isAtBottom) {
        const lastSection = sections[sections.length - 1]
        if (activeSection !== lastSection) {
          setActiveSection(lastSection)
          window.history.replaceState(null, "", `#${lastSection}`)
        }
        return
      }

      // Find the section that's currently most in view
      const viewportMiddle = window.scrollY + window.innerHeight / 3
      
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i])
        if (section && section.offsetTop <= viewportMiddle) {
          if (activeSection !== sections[i]) {
            setActiveSection(sections[i])
            // Update URL hash silently during scroll
            window.history.replaceState(null, "", `#${sections[i]}`)
          }
          return
        }
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [activeSection])

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    setIsOpen(false)
    const sectionId = href.substring(1)
    scrollToSection(sectionId)
  }

  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    isScrollingRef.current = true
    window.scrollTo({ top: 0, behavior: "smooth" })
    window.history.pushState(null, "", window.location.pathname)
    setActiveSection("")
    setTimeout(() => {
      isScrollingRef.current = false
    }, 1000)
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border transition-all duration-300">
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <a 
            href="#" 
            onClick={handleLogoClick}
            className="text-lg font-semibold text-foreground hover:text-primary transition-colors"
          >
            Julie Ralph
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => {
              const sectionId = item.href.substring(1)
              const isActive = activeSection === sectionId
              
              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`text-sm tracking-wide transition-all duration-300 relative ${
                    isActive
                      ? "text-primary font-medium"
                      : "text-muted-foreground hover:text-primary"
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary animate-in fade-in duration-300" />
                  )}
                </a>
              )
            })}
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="md:hidden text-foreground p-2 hover:text-primary transition-colors" 
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          ref={menuRef}
          className="md:hidden overflow-hidden transition-all duration-500 ease-in-out"
          style={{
            maxHeight: isOpen ? `${menuHeight}px` : '0px',
            opacity: isOpen ? 1 : 0,
            transform: isOpen ? 'translateY(0)' : 'translateY(-8px)',
          }}
        >
          <div className="pt-4 pb-2 flex flex-col gap-4">
            {navItems.map((item, index) => {
              const sectionId = item.href.substring(1)
              const isActive = activeSection === sectionId
              
              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`text-sm tracking-wide transition-all duration-300 ${
                    isActive
                      ? "text-primary font-medium"
                      : "text-muted-foreground hover:text-primary"
                  }`}
                  style={{
                    transitionDelay: isOpen ? `${index * 50}ms` : '0ms',
                    opacity: isOpen ? 1 : 0,
                    transform: isOpen ? 'translateX(0)' : 'translateX(-10px)',
                  }}
                >
                  {item.label}
                </a>
              )
            })}
          </div>
        </div>
      </div>
    </nav>
  )
}
