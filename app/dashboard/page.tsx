'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function Dashboard() {
  const [text, setText] = useState('')
  const router = useRouter()

  async function submit() {
    await fetch('/api/analyze', {
  method: 'POST',
  body: JSON.stringify({ text }),
})


    router.push('/analysis')
  }

  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-6">
      <h2 className="text-2xl mb-6">Describe the decision you are facing</h2>

      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="w-full max-w-2xl h-40 bg-black border border-zinc-600 p-4 text-zinc-200"
      />

      <button
        onClick={submit}
        className="mt-6 px-6 py-3 border border-zinc-600 hover:border-white"
      >
        Analyze Decision
      </button>
    </main>
  )
}
