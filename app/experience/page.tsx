import { Metadata } from 'next'
import ComingSoon from '@/app/components/ComingSoon'

export const metadata: Metadata = {
  title: 'Experience | Arnab Mukherjee',
  description: 'My professional experience as a Senior Software Engineer',
}

export default function ExperiencePage() {
  return (
    <ComingSoon
      title="Experience"
      description="This page is currently under construction. I'm compiling my professional journey and experiences. Stay tuned for updates!"
    />
  )
}
