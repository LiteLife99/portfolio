'use client'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <div className="min-h-screen bg-terminal-bg text-terminal-green flex items-center justify-center p-6">
      <div className="text-center max-w-md">
        <h2 className="text-2xl mb-4">Something went wrong!</h2>
        <p className="text-gray-400 mb-6">{error.message}</p>
        <button
          onClick={reset}
          className="px-6 py-3 border border-terminal-green text-terminal-green rounded hover:bg-terminal-green/10 transition-colors"
        >
          Try again
        </button>
      </div>
    </div>
  )
}

