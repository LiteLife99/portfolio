import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Loading...',
}

export default function Loading() {
  return (
    <div className="container mx-auto px-6 py-32 flex items-center justify-center">
      <div className="text-center">
        <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-terminal-green mb-4" />
        <p className="text-gray-400">Loading...</p>
      </div>
    </div>
  )
}

