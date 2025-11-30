'use client'

import { motion } from 'framer-motion'

export default function TechStack() {
  const stacks = [
    {
      icon: '🧠',
      title: 'AI & Agents',
      technologies: 'Python, LangChain, OpenAI',
    },
    {
      icon: '📄',
      title: 'RAG Systems',
      technologies: 'Pinecone, Chroma, FAISS',
    },
    {
      icon: '💻',
      title: 'Frontend',
      technologies: 'React, Next.js, TypeScript',
    },
    {
      icon: '🛡️',
      title: 'Deployment',
      technologies: 'AWS, Docker, Kubernetes',
    },
  ]

  return (
    <section className="container mx-auto px-6 py-12 max-w-6xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <p className="text-terminal-green mb-12">$ cat /etc/tech-stack</p>

        <div className="md:ml-20 grid grid-cols-2 md:grid-cols-4 gap-6">
          {stacks.map((stack, index) => (
            <motion.div
              key={stack.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="border border-terminal-green/30 rounded-lg p-6 hover:border-terminal-green/60 transition-colors"
            >
              <div className="text-4xl mb-4">{stack.icon}</div>
              <h3 className="text-terminal-green font-semibold mb-2">
                {stack.title}
              </h3>
              <p className="text-gray-400 text-sm">{stack.technologies}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

