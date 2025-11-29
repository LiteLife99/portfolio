'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

const FeaturedProject = () => {
  const stats = [
    { label: 'TVL', value: '$2.3M' },
    { label: 'APY', value: '15.6%' },
    { label: 'Users', value: '1,252' },
    { label: 'Exploits', value: '0' },
  ]

  return (
    <section className="py-16">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="border-2 border-terminal-green rounded-lg p-8"
      >
        <h2 className="text-cyan-400 text-lg mb-6">
          Featured Project:
        </h2>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left: Project Info */}
          <div>
            <h3 className="text-3xl text-terminal-green mb-4">
              AI Agent Platform
            </h3>

            <div className="flex gap-2 mb-6">
              <span className="px-3 py-1 text-xs bg-terminal-green/20 text-terminal-green border border-terminal-green rounded">
                AI
              </span>
              <span className="px-3 py-1 text-xs bg-yellow-600/20 text-yellow-400 border border-yellow-600 rounded">
                Agents
              </span>
            </div>

            <p className="text-gray-300 text-sm leading-relaxed mb-8">
              Explore my journey as a Senior Software Engineer specializing in 
              AI and Agents. Building intelligent systems that can reason, plan, 
              and execute complex tasks autonomously with cutting-edge LLMs.
            </p>

            <div className="flex gap-4">
              <Link
                href="#"
                className="flex items-center gap-2 px-8 py-3 bg-terminal-green text-black text-sm font-medium rounded hover:bg-terminal-green/90 transition-colors"
              >
                <span>🎬</span>
                <span>Live Demo</span>
              </Link>
              <Link
                href="#"
                className="flex items-center gap-2 px-8 py-3 border-2 border-terminal-green text-terminal-green text-sm font-medium rounded hover:bg-terminal-green/10 transition-colors"
              >
                <span>&lt;/&gt;</span>
                <span>Code</span>
              </Link>
            </div>
          </div>

          {/* Right: Stats Grid */}
          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-900/50 p-6 rounded flex flex-col items-center justify-center text-center border border-gray-800"
              >
                <div className="text-2xl font-bold text-cyan-400 mb-2">
                  {stat.value}
                </div>
                <div className="text-xs text-gray-400 uppercase tracking-wider">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default FeaturedProject
