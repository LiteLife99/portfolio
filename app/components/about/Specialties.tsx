'use client'

import { motion } from 'framer-motion'

export default function Specialties() {
  const specialties = [
    'AI Agent Development (LangChain, AutoGPT)',
    'Multi-Agent Systems Architecture',
    'LLM Integration & Fine-tuning',
    'Full-Stack Development (Python, React, Node.js)',
    'Cloud Deployment & DevOps (AWS, Docker, Kubernetes)',
  ]

  return (
    <section className="container mx-auto px-6 max-w-6xl md:mb-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <p className="text-terminal-green mb-6">$ cat /etc/specialties</p>

        <ul className="space-y-3 ml-20 mt-14">
          {specialties.map((specialty, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-gray-300"
            >
              • {specialty}
            </motion.li>
          ))}
        </ul>
      </motion.div>
    </section>
  )
}

