'use client'

import { useEffect, useState } from 'react'

export default function Transition() {
  const [particles] = useState(() =>
    Array.from({ length: 300 }).map(() => ({
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      animationDelay: `${Math.random() * 1.5}s`
    }))
  )

  useEffect(() => {
    const timer = setTimeout(() => {
      window.location.href = '/core'
    }, 7000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="hyperspace">
      <div className="tunnel">
        {Array.from({ length: 40 }).map((_, i) => (
          <span key={i} className="ring" />
        ))}
      </div>

      <div className="particles">
        {particles.map((style, i) => (
          <span key={i} className="particle" style={style} />
        ))}
      </div>


      <div className="center-text">
        Reconfiguring temporal state
      </div>
    </div>
  )
}
