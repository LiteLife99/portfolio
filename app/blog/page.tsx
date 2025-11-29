import { Metadata } from 'next'
import ComingSoon from '@/app/components/ComingSoon'

export const metadata: Metadata = {
  title: 'Blog | Arnab Mukherjee',
  description: 'Read my thoughts on AI, software engineering, and technology',
}

export default function BlogPage() {
  return (
    <ComingSoon
      title="Blog"
      description="This page is currently under construction. I'm preparing articles on AI, agents, and modern software engineering practices. Coming soon!"
    />
  )
}
