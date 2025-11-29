'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

interface ComingSoonProps {
  title: string
  description: string
}

const ComingSoon = ({ title, description }: ComingSoonProps) => {
  return (
    <div className="container mx-auto px-6 py-32 max-w-4xl">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center"
      >
        <motion.div
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-8xl mb-8"
        >
          🚧
        </motion.div>

        <h1 className="text-4xl md:text-5xl text-gray-200 mb-4">
          {title}
        </h1>

        <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
          {description}
        </p>

        <div className="terminal-border p-8 bg-terminal-bg/50 inline-block">
          <div className="flex items-center space-x-2 text-terminal-green font-mono">
            <span className="text-gray-500">&gt;</span>
            <span>Status:</span>
            <motion.span
              animate={{ opacity: [1, 0.5, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              Under Construction
            </motion.span>
          </div>
        </div>

        <div className="mt-12">
          <Link
            href="/"
            className="inline-flex items-center space-x-2 text-terminal-green hover:text-terminal-green/80 transition-colors"
          >
            <span>←</span>
            <span>Back to Home</span>
          </Link>
        </div>
      </motion.div>
    </div>
  )
}

export default ComingSoon
