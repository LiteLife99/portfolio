'use client'

import { motion } from 'framer-motion'

export default function AboutHero() {
  return (
    <section className="container mx-auto px-6 py-24 max-w-6xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="space-y-16"
      >
        {/* Command */}
        <p className="text-terminal-green">
          arnab.mukherjee@portfolio:~$ About
        </p>

        {/* Content Grid */}
        <div className="grid md:grid-cols-4 gap-10">
          {/* Left: Heading and Description */}
          <div className="md:col-span-3">
            <h1 className="text-lg text-cyan-400 font-normal mb-12">
              About Arnab Mukherjee
              <motion.span
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
                className="inline-block ml-1"
              >
                |
              </motion.span>
            </h1>

            <div>
              <p className="text-terminal-green mb-12">$whoami</p>
              
              {/* Description - shifted right on desktop */}
              <div className="md:ml-20 md:mt-6 md:max-w-2xl space-y-6">
                <p className="text-gray-300 leading-relaxed">
                  Senior Software Engineer with extensive experience in AI, agents, and modern software development. 
                  Passionate about building intelligent systems that can reason, plan, and execute complex tasks 
                  autonomously using cutting-edge LLMs and multi-agent architectures.
                </p>

                <p className="text-gray-300 leading-relaxed">
                  Expert in deploying scalable AI solutions, from development to production, with deep knowledge 
                  of cloud infrastructure, containerization, and CI/CD pipelines. Building the future of AI-powered 
                  applications, one agent at a time.
                </p>
              </div>
            </div>
          </div>

          {/* Right: Profile Image */}
          <div className="md:col-span-1 flex flex-col md:items-end items-center">
            <div className="w-48 h-48 rounded-lg overflow-hidden border border-terminal-green/30 mb-2">
              <div className="w-full h-full bg-gradient-to-br from-terminal-green/20 to-transparent flex items-center justify-center text-6xl">
                👨‍💻
              </div>
            </div>
            <p className="text-xs text-terminal-green">
              profile.jpg (73KB)
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

