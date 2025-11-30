import type { Metadata } from 'next'
import './globals.css'
import Header from '@/app/components/layout/Header'
import Footer from '@/app/components/layout/Footer'
import StartupLoader from '@/app/components/StartupLoader'

export const metadata: Metadata = {
  title: 'Arnab Mukherjee | Senior Software Engineer',
  description: 'Portfolio of Arnab Mukherjee - Senior Software Engineer specializing in AI and Agents',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="min-h-screen flex flex-col">
        <StartupLoader />
        <Header />
        <main className="flex-1 pt-14">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}

