'use client'

import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import TerminalLoader from '@/app/components/TerminalLoader'

export default function StartupLoader() {
  const [showLoader, setShowLoader] = useState(true)
  const [mounted, setMounted] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    setMounted(true)
    
    // Check if we're on a 404 page and skip loader
    const check404 = () => {
      if (typeof window !== 'undefined') {
        const notFoundElement = document.querySelector('[data-not-found]')
        if (notFoundElement) {
          setShowLoader(false)
        }
      }
    }
    
    // Check immediately and also after a short delay
    check404()
    const timeout = setTimeout(check404, 100)
    
    return () => clearTimeout(timeout)
  }, [])

  const handleLoaderComplete = () => {
    setShowLoader(false)
  }

  // Only show loader on home page
  const isHomePage = pathname === '/'

  // Prevent hydration mismatch by only showing loader after mount
  if (!mounted || !showLoader || !isHomePage) {
    return null
  }

  return (
    <TerminalLoader 
      messages={[
        'Initializing portfolio...',
        'Loading AI systems...',
        'Connecting to servers...',
        'Welcome to Arnab\'s Portfolio',
      ]}
      onComplete={handleLoaderComplete}
    />
  )
}

