'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function InternalAccess() {
  const [email, setEmail] = useState('')
  const [key, setKey] = useState('')
  const router = useRouter()

  async function submit() {
    const res = await fetch('/api/verify', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email,
        internalKey: key
      })
    })

    if (res.ok) {
      router.push('/dashboard')
    } else {
      alert('Acesso negado')
    }
  }

  return (
    <div style={center}>
      <h1>Executive Access</h1>
      <input placeholder="Email" onChange={e => setEmail(e.target.value)} />
      <input placeholder="Internal Key" onChange={e => setKey(e.target.value)} />
      <button onClick={submit}>Entrar</button>
    </div>
  )
}

const center = {
  height: '100vh',
  display: 'flex',
  flexDirection: 'column' as const,
  gap: '10px',
  justifyContent: 'center',
  alignItems: 'center'
}
