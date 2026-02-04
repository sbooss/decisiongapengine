'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function DiagnosisPage() {
  const router = useRouter()

  const [scope, setScope] = useState('')
  const [q1, setQ1] = useState('')
  const [q2, setQ2] = useState('')
  const [q3, setQ3] = useState('')

  const canContinue = scope && q1 && q2 && q3

  function handleContinue() {
    if (!canContinue) return
    router.push('/result')
  }

  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-100 px-8 py-24">
      <div className="max-w-3xl mx-auto">

        {/* TITLE */}
        <h1 className="text-4xl font-light leading-tight">
          Decision Pattern Scan™
        </h1>

        <p className="mt-6 text-neutral-400">
          This diagnostic identifies how decisions propagate, degrade or fail
          inside complex systems.
        </p>

        {/* FORM */}
        <div className="mt-16 space-y-12">

          {/* SCOPE */}
          <div>
            <p className="text-sm mb-3 text-neutral-300">
              This diagnosis is being performed as:
            </p>
            <select
              value={scope}
              onChange={(e) => setScope(e.target.value)}
              className="w-full bg-neutral-900 border border-neutral-700 p-3 rounded-md"
            >
              <option value="">Select scope</option>
              <option value="individual">An individual leader</option>
              <option value="organization">An organization / leadership team</option>
            </select>
          </div>

          {/* QUESTION 1 */}
          <div>
            <p className="text-sm mb-3 text-neutral-300">
              When a critical decision fails, where does accountability usually stop?
            </p>
            <select
              value={q1}
              onChange={(e) => setQ1(e.target.value)}
              className="w-full bg-neutral-900 border border-neutral-700 p-3 rounded-md"
            >
              <option value="">Select</option>
              <option>At leadership level</option>
              <option>Between departments</option>
              <option>During execution</option>
              <option>Accountability dissolves</option>
            </select>
          </div>

          {/* QUESTION 2 */}
          <div>
            <p className="text-sm mb-3 text-neutral-300">
              How often are strategic decisions revisited after being approved?
            </p>
            <select
              value={q2}
              onChange={(e) => setQ2(e.target.value)}
              className="w-full bg-neutral-900 border border-neutral-700 p-3 rounded-md"
            >
              <option value="">Select</option>
              <option>Rarely</option>
              <option>Occasionally</option>
              <option>Frequently</option>
              <option>Constantly</option>
            </select>
          </div>

          {/* QUESTION 3 */}
          <div>
            <p className="text-sm mb-3 text-neutral-300">
              What most commonly delays execution after a decision is made?
            </p>
            <select
              value={q3}
              onChange={(e) => setQ3(e.target.value)}
              className="w-full bg-neutral-900 border border-neutral-700 p-3 rounded-md"
            >
              <option value="">Select</option>
              <option>Unclear ownership</option>
              <option>Conflicting priorities</option>
              <option>Lack of resources</option>
              <option>Hidden resistance</option>
            </select>
          </div>

          {/* BUTTON */}
          <button
            onClick={handleContinue}
            disabled={!canContinue}
            className={`mt-12 px-7 py-3 rounded-md text-sm font-medium transition
              ${canContinue
                ? 'bg-white text-black hover:opacity-90'
                : 'bg-neutral-800 text-neutral-500 cursor-not-allowed'
              }`}
          >
            Generate Diagnostic
          </button>

        </div>
      </div>
    </main>
  )
}
