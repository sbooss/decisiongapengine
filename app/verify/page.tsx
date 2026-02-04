'use client'

import { useEffect, useState } from 'react'
import { useSearchParams } from 'next/navigation'

export default function VerifyPage() {
  const searchParams = useSearchParams()
  const sessionId = searchParams.get('session_id')

  const [status, setStatus] = useState<'loading' | 'success' | 'error'>('loading')

  useEffect(() => {
    if (!sessionId) {
      setStatus('error')
      return
    }

    fetch('/api/verify', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ sessionId })
    })
      .then(res => res.ok ? res.json() : Promise.reject())
      .then(() => setStatus('success'))
      .catch(() => setStatus('error'))
  }, [sessionId])

  if (status === 'loading') {
    return <div style={center}>Verificando acesso...</div>
  }

  if (status === 'error') {
    return <div style={center}>Acesso inválido ou expirado.</div>
  }

  return (
    <div style={center}>
      <h1>Acesso Liberado</h1>
      <p>Bem-vindo ao Decision Gap Engine™</p>
    </div>
  )
}

const center = {
  height: '100vh',
  display: 'flex',
  flexDirection: 'column' as const,
  justifyContent: 'center',
  alignItems: 'center',
  fontSize: '18px'
}
import Link from "next/link";

export default function VerifyPage() {
  return (
    <section style={wrap}>
      <div style={box}>
        <h2>Access Updated</h2>
        <p style={muted}>
          Your decision capacity has been upgraded successfully.
        </p>

        <Link href="/system" style={btn}>
          Enter Decision Environment
        </Link>
      </div>
    </section>
  );
}

const wrap: React.CSSProperties = {
  minHeight: "80vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

const box: React.CSSProperties = {
  background: "var(--panel)",
  border: "1px solid var(--border)",
  padding: 28,
  borderRadius: 14,
  textAlign: "center",
};

const muted: React.CSSProperties = {
  marginTop: 10,
  color: "var(--text-muted)",
};

const btn: React.CSSProperties = {
  display: "inline-block",
  marginTop: 18,
  background: "#fff",
  color: "#000",
  padding: "12px 18px",
  borderRadius: 10,
  fontWeight: 800,
};
