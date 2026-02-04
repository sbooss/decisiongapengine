'use client'

import { useRouter } from 'next/navigation'

export default function Analysis() {
  const router = useRouter()

  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-6 text-center">
      <h2 className="text-3xl mb-4">Initial Assessment</h2>

      <p className="max-w-2xl text-zinc-400">
        This decision is operating under latent pressure.
        The visible issue is not the core risk.
      </p>

      <p className="mt-6 max-w-2xl text-zinc-500">
        The highest cost is delayed and compounds silently.
      </p>

      <div className="mt-10 flex gap-6">
        <button
          onClick={() => router.push('/api/checkout')}
          className="px-6 py-3 border border-zinc-600 hover:border-white"
        >
          Unlock Full Report
        </button>

        <button
          onClick={() => router.push('/api/checkout')}
          className="px-6 py-3 border border-zinc-600 hover:border-white"
        >
          Download Strategic PDF
        </button>
      </div>
    </main>
  )
}
