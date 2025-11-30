import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-terminal-bg text-terminal-green flex items-center justify-center p-6" data-not-found>
      <div className="text-center max-w-md">
        <div className="mb-8">
          <pre className="text-terminal-green text-2xl sm:text-4xl font-bold mb-4">
            {'404'}
          </pre>
          <p className="text-gray-500 mb-2">$ cat /error/not-found</p>
        </div>
        
        <h1 className="text-2xl sm:text-3xl text-cyan-400 mb-4">
          Page Not Found
        </h1>
        
        <p className="text-gray-300 mb-8 leading-relaxed">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        
        <div className="space-y-4">
          <Link
            href="/"
            className="inline-block px-6 py-3 border border-terminal-green text-terminal-green rounded hover:bg-terminal-green/10 transition-colors"
          >
            Return Home
          </Link>
          
          <div className="text-sm text-gray-500 mt-6">
            <p>$ ls ~/pages</p>
            <ul className="mt-2 space-y-1 text-left ml-8">
              <li>• <Link href="/" className="text-terminal-green hover:underline">/</Link> - Home</li>
              <li>• <Link href="/about" className="text-terminal-green hover:underline">/about</Link> - About</li>
              <li>• <Link href="/projects" className="text-terminal-green hover:underline">/projects</Link> - Projects</li>
              <li>• <Link href="/experience" className="text-terminal-green hover:underline">/experience</Link> - Experience</li>
              <li>• <Link href="/blog" className="text-terminal-green hover:underline">/blog</Link> - Blog</li>
              <li>• <Link href="/contact" className="text-terminal-green hover:underline">/contact</Link> - Contact</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

