import { Metadata } from 'next'
import ComingSoon from '@/app/components/ComingSoon'

export const metadata: Metadata = {
  title: 'Projects | Arnab Mukherjee',
  description: 'Explore my projects and work in AI, agents, and software engineering',
}

export default function ProjectsPage() {
  return (
    <ComingSoon
      title="Projects"
      description="This page is currently under construction. I'm working on showcasing my latest projects in AI, agents, and software engineering. Check back soon!"
    />
  )
}
