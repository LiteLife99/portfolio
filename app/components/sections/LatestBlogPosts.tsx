'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

interface BlogPost {
  title: string
  description: string
  category: string
  categoryColor: 'blue' | 'yellow' | 'purple'
  readTime: string
}

const LatestBlogPosts = () => {
  const blogPosts: BlogPost[] = [
    {
      title: 'Building MEV-Resistant AMM Protocols',
      description:
        'Exploring techniques to protect users from sandwich attacks and front-running in decentralized exchanges through commit-reveal schemes and time delays.',
      category: 'Analysis',
      categoryColor: 'blue',
      readTime: '5 Minute Read',
    },
    {
      title: 'Common Smart Contract Vulnerabilities in 2025',
      description:
        'Updated analysis of the latest attack vectors, including flash loan exploits, governance attacks, and oracle manipulation techniques with prevention strategies.',
      category: 'Security',
      categoryColor: 'yellow',
      readTime: '3 Minute Read',
    },
    {
      title: 'Building Your First Cross-Chain dApp',
      description:
        'Step-by-step guide to creating applications that work across multiple blockchains using LayerZero, Axelar, and other interoperability protocols.',
      category: 'Tutorial',
      categoryColor: 'purple',
      readTime: '8 Minute Read',
    },
  ]

  const getCategoryStyles = (color: 'blue' | 'yellow' | 'purple') => {
    switch (color) {
      case 'blue':
        return 'bg-blue-600/20 text-blue-400 border-blue-600/50'
      case 'yellow':
        return 'bg-yellow-600/20 text-yellow-400 border-yellow-600/50'
      case 'purple':
        return 'bg-purple-600/20 text-purple-400 border-purple-600/50'
    }
  }

  return (
    <section className="py-16">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-2xl text-terminal-green mb-6">
          Latest Blog Posts
        </h2>
        <p className="text-gray-400 text-sm leading-relaxed mb-12 max-w-4xl">
          Insights and updates on Web3, blockchain innovations, and modern web development trends. Exploring decentralized technologies, coding best practices, and the future of the internet through hands-on experience.
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="border border-terminal-green rounded p-6 bg-terminal-bg hover:border-terminal-green/80 transition-all group"
            >
              <div className="flex items-center justify-between mb-6">
                <span className={`px-3 py-1 text-xs border rounded ${getCategoryStyles(post.categoryColor)}`}>
                  {post.category}
                </span>
                <span className="text-xs text-gray-500">{post.readTime}</span>
              </div>

              <h3 className="text-xl text-terminal-green mb-4 leading-snug">
                {post.title}
              </h3>

              <p className="text-sm text-gray-300 leading-relaxed mb-6">
                {post.description}
              </p>

              <Link
                href="#"
                className="inline-block px-6 py-2.5 border border-terminal-green rounded text-sm text-terminal-green hover:bg-terminal-green/10 transition-colors"
              >
                Read the blog
              </Link>
            </motion.article>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

export default LatestBlogPosts