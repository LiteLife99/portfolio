'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { usePathname } from 'next/navigation'
import { usePortfolioStore } from '@/store/portfolioStore'
import { User, Folder, Briefcase, BookOpen, Mail } from 'lucide-react'
import MobileMenu from './MobileMenu'

const Header = () => {
  const pathname = usePathname()
  const isAvailable = usePortfolioStore((state) => state.isAvailable)

  const navItems = [
    { name: 'About', href: '/', icon: User },
    { name: 'Projects', href: '/projects', icon: Folder },
    { name: 'Experience', href: '/experience', icon: Briefcase },
    { name: 'Blog', href: '/blog', icon: BookOpen },
    { name: 'Contact', href: '/contact', icon: Mail },
  ]

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 bg-terminal-bg border-b border-terminal-green/30"
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-14">
          {/* Terminal Prompt */}
          <Link href="/" className="text-terminal-green hover:text-cyan-400 text-base font-mono font-bold transition-colors">
            &gt;. arnab.mukherjee@portfolio:~$
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-12">
            {navItems.map((item) => {
              const Icon = item.icon
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className="flex items-center space-x-2 text-sm text-terminal-green hover:text-cyan-400 transition-colors"
                >
                  <Icon size={16} />
                  <span>{item.name}</span>
                </Link>
              )
            })}
          </nav>

          {/* Availability Status */}
          <div className="hidden md:flex items-center space-x-2 text-cyan-400">
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
              className="w-2 h-2 rounded-full bg-cyan-400"
            />
            <span className="text-sm">
              Available
            </span>
          </div>

          {/* Mobile Menu */}
          <MobileMenu />
        </div>
      </div>
    </motion.header>
  )
}

export default Header

