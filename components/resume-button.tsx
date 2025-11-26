"use client"

import { useState } from "react"
import { Download, FileText, Eye } from "lucide-react"

export function ResumeButton() {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div 
      className="relative inline-block"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Preview popup */}
      <div 
        className={`absolute bottom-full left-1/2 -translate-x-1/2 mb-4 transition-all duration-300 pointer-events-none ${
          isHovered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
        }`}
      >
        <div className="bg-card border border-border rounded-xl p-4 shadow-2xl shadow-black/20 w-64">
          {/* Mini resume preview */}
          <div className="bg-white rounded-lg p-3 mb-3">
            <div className="space-y-2">
              <div className="h-3 bg-gray-800 rounded w-3/4" />
              <div className="h-2 bg-gray-300 rounded w-full" />
              <div className="h-2 bg-gray-300 rounded w-5/6" />
              <div className="h-2 bg-gray-200 rounded w-full mt-3" />
              <div className="h-2 bg-gray-200 rounded w-4/5" />
              <div className="h-2 bg-gray-200 rounded w-full" />
              <div className="h-2 bg-gray-200 rounded w-3/4" />
            </div>
          </div>
          
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <FileText className="w-3 h-3" />
            <span>Julie Ralph Resume 2025</span>
          </div>
          <p className="text-xs text-primary mt-1 flex items-center gap-1">
            <Eye className="w-3 h-3" />
            Click to download PDF
          </p>
        </div>
        
        {/* Arrow */}
        <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-1">
          <div className="w-3 h-3 bg-card border-r border-b border-border rotate-45" />
        </div>
      </div>

      {/* Main button */}
      <a
        href="/2025 Julie Ralph General Resume.pdf"
        download
        className="group relative inline-flex items-center gap-3 px-6 py-4 bg-gradient-to-r from-primary to-primary/80 text-primary-foreground rounded-xl font-semibold hover:from-primary/90 hover:to-primary/70 transition-all duration-300 shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-0.5 overflow-hidden"
      >
        {/* Animated background */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
        
        {/* Icon with animation */}
        <div className="relative w-10 h-10 rounded-lg bg-white/20 flex items-center justify-center group-hover:bg-white/30 transition-colors duration-300">
          <Download className="w-5 h-5 group-hover:animate-bounce" />
        </div>
        
        {/* Text */}
        <div className="relative text-left">
          <span className="block text-sm opacity-80">Download</span>
          <span className="block font-bold">Resume PDF</span>
        </div>

        {/* Corner accent */}
        <div className="absolute top-0 right-0 w-16 h-16 bg-white/10 rounded-bl-full" />
      </a>
    </div>
  )
}

