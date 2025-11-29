'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { name: 'GitHub', href: 'https://github.com', icon: 'GitHub' },
    { name: 'LinkedIn', href: 'https://linkedin.com', icon: 'LinkedIn' },
    { name: 'Twitter', href: 'https://twitter.com', icon: 'Twitter' },
  ]

  return (
    <footer className="sticky bottom-0 border-t border-terminal-green/20 bg-terminal-bg">
      <div className="container mx-auto px-6 py-4 max-w-7xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Left: Copyright */}
          <div className="text-sm text-gray-500">
            © {currentYear} Arnab Mukherjee | Senior Software Engineer
          </div>

          {/* Center: Social Links */}
          <div className="flex items-center space-x-6">
            {socialLinks.map((social) => (
              <Link
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-gray-400 hover:text-terminal-green transition-colors"
              >
                {social.icon}
              </Link>
            ))}
          </div>

          {/* Right: Version */}
          <div className="text-sm text-gray-600">
            v2.0.2025
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer