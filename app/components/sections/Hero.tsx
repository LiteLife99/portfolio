'use client'

import { motion } from 'framer-motion'

const Hero = () => {
  const asciiArt = `
   ▄▀█ █▀█ █▄░█ ▄▀█ █▄▄   █▀▄▀█ █░█ █▄▀ █░█ █▀▀ █▀█ ░░█ █▀▀ █▀▀
   █▀█ █▀▄ █░▀█ █▀█ █▄█   █░▀░█ █▄█ █░█ █▀█ ██▄ █▀▄ █▄█ ██▄ ██▄
  `

  return (
    <section className="py-12">
      {/* ASCII Art Name in bordered box */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="border-2 border-terminal-green rounded p-8 mb-16 max-w-4xl"
      >
        <pre className="text-terminal-green text-[10px] sm:text-xs md:text-sm overflow-x-auto whitespace-pre font-bold leading-tight text-center">
          {asciiArt}
        </pre>
        <p className="text-terminal-green text-center mt-6 text-base">
          Senior Software Engineer&apos;s Portfolio
        </p>
      </motion.div>

      {/* Portfolio Information and Profile Photo */}
      <div className="grid md:grid-cols-2 gap-12 items-start mb-16">
        {/* Left: Portfolio Information */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2 className="text-cyan-400 text-lg mb-6">
            Portfolio Information:
            <motion.span
              animate={{ opacity: [1, 0, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
              className="inline-block ml-1"
            >
              █
            </motion.span>
          </h2>
          
          <div className="space-y-3 text-sm">
            <p className="text-gray-300">
              <span className="text-gray-500">Name:</span> Arnab Mukherjee
            </p>
            <p className="text-gray-300">
              <span className="text-gray-500">Based in:</span> India
            </p>
            <p className="text-gray-300">
              <span className="text-gray-500">Profession:</span> Senior Software Engineer - AI
            </p>
            <p className="text-gray-300">
              <span className="text-gray-500">Currently working at:</span> Raft.ai
            </p>
          </div>
        </motion.div>

        {/* Right: Profile Photo */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex justify-center md:justify-end"
        >
          <div className="relative w-64 h-64 rounded-full overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-terminal-green/30 via-terminal-green/10 to-transparent" />
            <div className="w-full h-full flex items-center justify-center text-8xl bg-gradient-to-br from-terminal-green/20 to-transparent">
              👨‍💻
            </div>
          </div>
        </motion.div>
      </div>

      {/* Welcome Message */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="max-w-4xl"
      >
        <h3 className="text-terminal-green text-xl md:text-2xl mb-4">
          Welcome to Arnab Mukherjee&apos;s Developer Portfolio!
        </h3>
        <p className="text-gray-300 text-sm md:text-base leading-relaxed">
          Explore my journey as a Senior Software Engineer specializing in AI and Agents, 
          building intelligent systems and innovative solutions with cutting-edge technologies.
        </p>
      </motion.div>
    </section>
  )
}

export default Hero