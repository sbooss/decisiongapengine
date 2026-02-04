'use client'
import { useState } from 'react'

export default function Core() {
  const [echo] = useState<string | null>(() => {
    if (typeof window === 'undefined') {
      return null
    }

    const lastVisit = localStorage.getItem('decision_timestamp')
    const now = Date.now()

    if (!lastVisit) {
      localStorage.setItem('decision_timestamp', String(now))
      return null
    }

    const diff = now - Number(lastVisit)

    if (diff > 1000 * 60 * 60 * 24) {
      return 'Long-term effects detected.\nReversibility is no longer guaranteed.'
    }

    if (diff > 1000 * 60 * 60 * 6) {
      return 'The system recalculated secondary outcomes.\nYour decision is no longer isolated.'
    }

    return null
  })

  return (
    <main style={container}>
      <section style={header}>
        <h1 style={title}>Decision Registered</h1>
        <p style={subtitle}>
          The system has adjusted to your presence.
        </p>
      </section>

      <section style={residue}>
        <span style={residueLabel}>Decision Residue</span>
        <p style={residueText}>
          Your action altered the system’s trajectory.
          <br />
          Secondary effects are unfolding.
        </p>
      </section>

      {echo && (
        <section style={echoBox}>
          <span style={echoLabel}>Decision Echo</span>
          <p style={echoText}>{echo}</p>
        </section>
      )}

      <section style={silence}>
        <span style={silenceText}>No further input required.</span>
      </section>
    </main>
  )
}
const echoBox = {
  marginTop: 120,
  maxWidth: 520,
  opacity: 0.85,
  transition: 'all 1.2s ease'
}

const echoLabel = {
  fontSize: 11,
  letterSpacing: 2,
  textTransform: 'uppercase' as const,
  opacity: 0.4
}

const echoText = {
  marginTop: 18,
  fontSize: 15,
  lineHeight: 1.9,
  whiteSpace: 'pre-line' as const,
  color: '#d7dcff'
}
const container = {
  minHeight: '100vh',
  background: 'radial-gradient(circle at top, #0a0d18 0%, #05060a 60%)',
  color: '#e4e7ff',
  display: 'flex',
  flexDirection: 'column' as const,
  alignItems: 'center',
  paddingTop: 140,
  fontFamily: 'Inter, system-ui, sans-serif',
}

const header = {
  textAlign: 'center' as const,
  maxWidth: 520,
}

const title = {
  fontSize: 34,
  fontWeight: 500,
  letterSpacing: 1,
  marginBottom: 18,
}

const subtitle = {
  fontSize: 14,
  opacity: 0.55,
  lineHeight: 1.6,
}

const residue = {
  marginTop: 120,
  maxWidth: 480,
  textAlign: 'left' as const,
}

const residueLabel = {
  fontSize: 11,
  letterSpacing: 2,
  textTransform: 'uppercase' as const,
  opacity: 0.4,
}

const residueText = {
  marginTop: 16,
  fontSize: 15,
  lineHeight: 1.9,
  opacity: 0.85,
}

const silence = {
  marginTop: 140,
  opacity: 0.25,
}

const silenceText = {
  fontSize: 12,
  letterSpacing: 1,
}
