import { Metadata } from 'next'
import ComingSoon from '@/app/components/ComingSoon'

export const metadata: Metadata = {
  title: 'Contact | Arnab Mukherjee',
  description: 'Get in touch with me',
}

export default function ContactPage() {
  return (
    <ComingSoon
      title="Contact"
      description="This page is currently under construction. I'm setting up various ways to connect. For now, feel free to reach out via LinkedIn!"
    />
  )
}
