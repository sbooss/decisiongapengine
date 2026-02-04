'use client'

import { useRouter } from 'next/navigation'

export default function Select() {
  const router = useRouter()

  return (
    <main className="min-h-screen flex flex-col items-center justify-center gap-8">
      <h2 className="text-2xl text-zinc-300">Choose Access Mode</h2>

      <div className="flex gap-8">
        <button
          onClick={() => router.push('/auth?type=executive')}
          className="px-6 py-4 border border-zinc-600 hover:border-white"
        >
          Executive
          <p className="text-sm text-zinc-500 mt-2">
            Individual judgment access
          </p>
        </button>

        <button
          onClick={() => router.push('/auth?type=company')}
          className="px-6 py-4 border border-zinc-600 hover:border-white"
        >
          Company
          <p className="text-sm text-zinc-500 mt-2">
            Up to 3 users
          </p>
        </button>
      </div>
    </main>
  )
}
