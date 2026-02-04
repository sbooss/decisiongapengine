'use client'

import { useSearchParams, useRouter } from 'next/navigation'

export default function ResultPage() {
  const searchParams = useSearchParams()
  const router = useRouter()

  const unlocked = searchParams.get('unlocked') === 'true'

  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-100 px-8 py-24">
      <div className="max-w-4xl mx-auto">

        <h1 className="text-4xl font-light">
          Decision Gap Analysis
        </h1>

        <p className="mt-6 text-neutral-400">
          Strategic diagnostic based on execution and decision signals.
        </p>

        {/* BLOCO 1 — VISÍVEL PARA TODOS */}
        <section className="mt-16 border border-neutral-800 rounded-xl p-8">
          <h2 className="text-xl">Primary Signal</h2>
          <p className="mt-4">
            Strategic intent exists, but execution velocity is inconsistent.
          </p>
        </section>

        {/* BLOCO 2 — CONDICIONAL */}
        <section className="mt-8 border border-neutral-800 rounded-xl p-8">
          <h2 className="text-xl">Hidden Constraint</h2>

          {unlocked ? (
            <p className="mt-4">
              Decision latency inside middle leadership layers is the
              dominant execution inhibitor.
            </p>
          ) : (
            <div className="mt-4 text-neutral-500">
              This insight is locked.
            </div>
          )}
        </section>

        {unlocked && (
          <div className="mt-16">
            <a
              href="/api/pdf"
              className="inline-block px-8 py-4 bg-white text-black rounded-md text-sm font-medium"
            >
              Download Executive PDF
            </a>
          </div>
        )}

        {/* BLOQUEIO */}
        {!unlocked && (
          <div className="mt-16 border border-neutral-800 rounded-xl p-8 text-center">
            <p className="text-neutral-400">
              Full diagnostic access is restricted.
            </p>

            <button
              onClick={() => router.push('/unlock')}
              className="mt-6 px-8 py-3 bg-white text-black rounded-md text-sm font-medium"
            >
              Unlock Full Diagnostic
            </button>
          </div>
        )}

      </div>
    </main>
  )
}
