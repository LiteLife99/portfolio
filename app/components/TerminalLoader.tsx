'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

interface TerminalLoaderProps {
  messages?: string[]
  onComplete?: () => void
}

export default function TerminalLoader({ 
  messages = [
    'Loading Page...'
  ],
  onComplete
}: TerminalLoaderProps) {
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0)
  const [displayedText, setDisplayedText] = useState('')
  const [isTyping, setIsTyping] = useState(true)
  const [showCursor, setShowCursor] = useState(true)

  useEffect(() => {
    if (currentMessageIndex >= messages.length) {
      setIsTyping(false)
      if (onComplete) {
        setTimeout(onComplete, 500)
      }
      return
    }

    const currentMessage = messages[currentMessageIndex]
    let charIndex = 0

    const typingInterval = setInterval(() => {
      if (charIndex < currentMessage.length) {
        setDisplayedText(currentMessage.slice(0, charIndex + 1))
        charIndex++
      } else {
        clearInterval(typingInterval)
        setIsTyping(false)
        
        // Wait a bit before moving to next message
        setTimeout(() => {
          setCurrentMessageIndex(prev => prev + 1)
          setDisplayedText('')
          setIsTyping(true)
        }, 1000)
      }
    }, 50) // Typing speed

    return () => clearInterval(typingInterval)
  }, [currentMessageIndex, messages, onComplete])

  // Blinking cursor
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev)
    }, 530)

    return () => clearInterval(cursorInterval)
  }, [])

  if (currentMessageIndex >= messages.length) {
    return null
  }

  return (
    <div className="fixed inset-0 bg-terminal-bg z-50 flex items-center justify-center">
      <div className="max-w-2xl w-full px-6">
        {/* Terminal Header */}
        <div className="mb-4">
          <div className="flex items-center gap-2 mb-2">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-terminal-green"></div>
            </div>
            <span className="text-gray-500 text-sm ml-2">Terminal</span>
          </div>
          <div className="h-px bg-terminal-green/30"></div>
        </div>

        {/* Terminal Content */}
        <div className="font-mono text-terminal-green">
          <div className="mb-2">
            <span className="text-gray-500">&gt;.</span>{' '}
            <span className="text-gray-300">arnab.mukherjee</span>
            <span className="text-gray-500">@portfolio</span>
            <span className="text-terminal-green">:~$</span>
          </div>

          {/* Typing Animation */}
          <div className="min-h-[24px]">
            {displayedText}
            {showCursor && isTyping && (
              <motion.span
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 0.8, repeat: Infinity }}
                className="inline-block w-2 h-5 bg-terminal-green ml-1"
              />
            )}
          </div>

          {/* Completed Messages */}
          {currentMessageIndex > 0 && (
            <div className="space-y-1 mt-4 opacity-70">
              {messages.slice(0, currentMessageIndex).map((msg, idx) => (
                <div key={idx} className="text-gray-400">
                  {msg}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

