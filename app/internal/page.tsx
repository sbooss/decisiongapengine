'use client'

import { useEffect, useState } from 'react'

const STATES = [
  {
    label: 'No decision registered',
    description: 'You are observing. The system has noted that.'
  },
  {
    label: 'Delay acknowledged',
    description: 'Most outcomes fail here — not by error, but by waiting.'
  },
  {
    label: 'Responsibility unclaimed',
    description: 'The absence of a decision is now influencing the result.'
  },
  {
    label: 'Outcome locked',
    description: 'At this point, intervention only changes who is blamed.'
  }
]


export default function Internal() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev < STATES.length - 1 ? prev + 1 : prev))
    }, 7000)

    return () => clearInterval(interval)
  }, [])

  const state = STATES[index]

  return (
    <main style={container}>
      <section style={top}>
   <h1 style={title}>Continuum</h1>
<p style={subtitle}>
  This system does not require interaction to form conclusions.
</p>
      </section>

      <section style={core}>
        <span style={statusLabel}>{state.label}</span>
        <p style={statusDesc}>{state.description}</p>
      </section>
<section style={gate}>
  <button style={button} onClick={() => window.location.href = '/transition'}>
    Assume responsibility
  </button>
</section>

      <section style={footer}>
       <span style={footerText}>
  Silence is still a choice.
</span>

      </section>
      
    </main>
  )
}
const container = {
  minHeight: '100vh',
  padding: '80px',
  background:
    'radial-gradient(circle at top, rgba(90,120,255,0.08), transparent 45%)',
  display: 'flex',
  flexDirection: 'column' as const,
  justifyContent: 'space-between'
}

const top = {
  maxWidth: 600
}

const title = {
  fontSize: 34,
  fontWeight: 300,
  letterSpacing: 3
}

const subtitle = {
  marginTop: 12,
  fontSize: 13,
  opacity: 0.45
}

const core = {
  marginTop: 120,
  maxWidth: 520
}

const statusLabel = {
  fontSize: 20,
  fontWeight: 300,
  letterSpacing: 1.5,
  color: 'rgba(180,200,255,0.9)'
}

const statusDesc = {
  marginTop: 18,
  fontSize: 15,
  lineHeight: 1.7,
  opacity: 0.7
}

const footer = {
  marginTop: 160,
  opacity: 0.25
}

const footerText = {
  fontSize: 12,
  letterSpacing: 1
}
const gate = {
  marginTop: 100
}

const button = {
  background: 'transparent',
  border: '1px solid rgba(180,200,255,0.25)',
  padding: '14px 28px',
  borderRadius: 40,
  color: 'rgba(200,220,255,0.9)',
  letterSpacing: 1,
  fontSize: 13,
  cursor: 'pointer',
  transition: 'all 0.4s ease'
}
