'use client'

import { useRouter } from 'next/navigation'

export default function SuccessPage() {
  const router = useRouter()

  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-100 px-8 py-24">
      <div className="max-w-3xl mx-auto">

        <h1 className="text-4xl font-light">
          Payment Confirmed
        </h1>

        <p className="mt-6 text-neutral-400">
          Your diagnostic access has been successfully unlocked.
        </p>

        <button
          onClick={() => router.push('/result?unlocked=true')}
          className="mt-12 px-8 py-4 bg-white text-black rounded-md text-sm font-medium"
        >
          Access Full Diagnostic
        </button>

      </div>
    </main>
  )
}
