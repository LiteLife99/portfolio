'use client'

import { motion } from 'framer-motion'

export default function SkillsProficiency() {
  const skillCategories = [
    {
      icon: '📜',
      title: 'AI & Agents',
      skills: [
        { name: 'Python', level: 5 },
        { name: 'LangChain', level: 5 },
        { name: 'OpenAI APIs', level: 5 },
      ],
    },
    {
      icon: '🌐',
      title: 'Frontend Development',
      skills: [
        { name: 'React.js', level: 5 },
        { name: 'Next.js', level: 5 },
        { name: 'TypeScript', level: 4 },
      ],
    },
    {
      icon: '⚡',
      title: 'Backend & DevOps',
      skills: [
        { name: 'FastAPI', level: 5 },
        { name: 'Docker', level: 5 },
        { name: 'AWS', level: 4 },
      ],
    },
  ]

  const renderStars = (level: number) => {
    return (
      <div className="flex gap-1">
        {[...Array(5)].map((_, i) => (
          <span
            key={i}
            className={i < level ? 'text-yellow-400' : 'text-gray-600'}
          >
            ●
          </span>
        ))}
      </div>
    )
  }

  return (
    <section className="container mx-auto px-6 py-12 max-w-6xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <p className="text-terminal-green mb-12">$ cat /etc/skills-proficiency</p>

        <div className="md:ml-20 grid md:grid-cols-3 gap-6">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: catIndex * 0.1 }}
              className="border border-terminal-green/30 rounded-lg p-6"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl">{category.icon}</span>
                <h3 className="text-terminal-green font-semibold">
                  {category.title}
                </h3>
              </div>

              <div className="space-y-3">
                {category.skills.map((skill) => (
                  <div key={skill.name} className="flex items-center justify-between">
                    <span className="text-gray-300 text-sm">{skill.name}</span>
                    {renderStars(skill.level)}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

