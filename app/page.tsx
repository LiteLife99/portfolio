import { Metadata } from 'next'
import Hero from '@/app/components/sections/Hero'
import FeaturedProject from '@/app/components/sections/FeaturedProject'
import LatestBlogPosts from '@/app/components/sections/LatestBlogPosts'

export const metadata: Metadata = {
  title: 'Arnab Mukherjee | Senior Software Engineer',
  description: 'Portfolio of Arnab Mukherjee - Senior Software Engineer specializing in AI and Agents',
}

export default function HomePage() {
  return (
    <div className="container mx-auto px-6 py-12 max-w-7xl">
      <Hero />
      <FeaturedProject />
      <LatestBlogPosts />
    </div>
  )
}
