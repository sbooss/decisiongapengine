'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function UnlockPage() {
  const router = useRouter()
  const [scope, setScope] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)

  async function handleCheckout() {
    if (!scope) return

    setLoading(true)

    const res = await fetch('/api/checkout', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ scope }),
    })

    const data = await res.json()

    setLoading(false)

    // Redireciona para o Stripe
    router.push(data.url)
  }

  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-100 px-8 py-24">
      <div className="max-w-3xl mx-auto">

        <h1 className="text-4xl font-light">
          Unlock Full Diagnostic
        </h1>

        <p className="mt-6 text-neutral-400">
          Select the diagnostic scope to proceed.
        </p>

        {/* OPÇÕES */}
        <div className="mt-16 space-y-4">

          <button
            onClick={() => setScope('individual')}
            className={`w-full p-6 border rounded-xl text-left transition
              ${
                scope === 'individual'
                  ? 'border-white'
                  : 'border-neutral-800 hover:border-neutral-600'
              }`}
          >
            <p className="text-lg">Individual</p>
            <p className="text-sm text-neutral-400 mt-2">
              Personal execution clarity diagnostic
            </p>
          </button>

          <button
            onClick={() => setScope('organization')}
            className={`w-full p-6 border rounded-xl text-left transition
              ${
                scope === 'organization'
                  ? 'border-white'
                  : 'border-neutral-800 hover:border-neutral-600'
              }`}
          >
            <p className="text-lg">Organization</p>
            <p className="text-sm text-neutral-400 mt-2">
              Organizational decision intelligence diagnostic
            </p>
          </button>

        </div>

        {/* BOTÃO FINAL */}
        <div className="mt-16">
          <button
            disabled={!scope || loading}
            onClick={handleCheckout}
            className={`px-8 py-4 rounded-md text-sm font-medium transition
              ${
                scope && !loading
                  ? 'bg-white text-black hover:opacity-90'
                  : 'bg-neutral-800 text-neutral-500 cursor-not-allowed'
              }`}
          >
            {loading ? 'Redirecting...' : 'Proceed to Secure Checkout'}
          </button>
        </div>

      </div>
    </main>
  )
}
