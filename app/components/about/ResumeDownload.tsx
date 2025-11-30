'use client'

import { motion } from 'framer-motion'

export default function ResumeDownload() {
  return (
    <section className="container mx-auto px-6 py-12 max-w-6xl mb-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <p className="text-terminal-green mb-10">$ ls ~/resume</p>

        <div className="md:ml-20 ml-8">
          <p className="text-gray-300 mb-4">
            Download Resume (Updated 2 months ago)
          </p>

          <a
            href="#"
            className="inline-flex items-center gap-2 px-6 py-3 border-2 border-terminal-green text-terminal-green rounded-lg hover:bg-terminal-green/10 transition-colors"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
            Download Resume PDF
          </a>
        </div>
      </motion.div>
    </section>
  )
}

