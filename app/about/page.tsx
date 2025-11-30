import { Metadata } from 'next'
import AboutHero from '@/app/components/about/AboutHero'
import Specialties from '@/app/components/about/Specialties'
import TechStack from '@/app/components/about/TechStack'
import SkillsProficiency from '@/app/components/about/SkillsProficiency'
import Education from '@/app/components/about/Education'
import ResumeDownload from '@/app/components/about/ResumeDownload'

export const metadata: Metadata = {
  title: 'About | Arnab Mukherjee',
  description: 'Learn more about Arnab Mukherjee - Senior Software Engineer specializing in AI & Agents',
}

export default function AboutPage() {
  return (
    <div className="bg-black text-white">
      <AboutHero />
      <Specialties />
      <TechStack />
      <SkillsProficiency />
      <Education />
      <ResumeDownload />
    </div>
  )
}

