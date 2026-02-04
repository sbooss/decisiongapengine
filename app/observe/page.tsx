import Link from "next/link"

export default function Observe() {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-6">
      <div className="max-w-3xl border border-white/10 rounded-xl p-10 bg-neutral-950">

        <h2 className="text-2xl font-semibold">
          Preliminary Decision Signal
        </h2>

        <p className="mt-6 text-gray-400">
          Based on initial parameters, your situation indicates a
          **strategic misalignment** with measurable financial and
          operational risk.
        </p>

        <p className="mt-4 text-gray-500">
          What you see now is only a fragment.  
          The full report includes:
        </p>

        <ul className="mt-6 space-y-2 text-gray-400 list-disc list-inside">
          <li>Projected loss over 3–12 months</li>
          <li>Decision impact scenarios</li>
          <li>Legal / operational exposure signals</li>
          <li>Recommended action window</li>
        </ul>

        <div className="mt-10 flex gap-4">
          <Link
            href="/pricing"
            className="px-6 py-3 bg-white text-black rounded hover:bg-gray-200 transition"
          >
            Unlock Full Analysis
          </Link>

          <Link
            href="/"
            className="px-6 py-3 border border-white/20 rounded hover:border-white transition"
          >
            Return
          </Link>
        </div>

      </div>
    </div>
  )
}
