'use client'

import { motion } from 'framer-motion'

export default function Education() {
  const education = [
    'B.E. Electical & Electonics - BITS Pilani (2017-21)',
    'AWS Certified Solutions Architect (20XX)',
    'Advanced Machine Learning Specialization (20XX)',
  ]

  return (
    <section className="container mx-auto px-6 py-12 max-w-6xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <p className="text-terminal-green mb-10">$ ls ~/education</p>

        <ul className="md:ml-20 space-y-2 ml-8">
          {education.map((item, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-gray-300"
            >
              -{'>'} {item}
            </motion.li>
          ))}
        </ul>
      </motion.div>
    </section>
  )
}

