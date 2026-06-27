'use client'
import { useState } from 'react'

export default function Navbar() {
  const [active, setActive] = useState('players')

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50,
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      padding: '16px 24px',
      background: 'rgba(10,10,10,0.85)',
      backdropFilter: 'blur(12px)',
      borderBottom: '1px solid #1f1f1f',
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <div style={{
            background: '#c8903a', borderRadius: '4px',
            width: '32px', height: '32px',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <rect x="2" y="2" width="14" height="14" rx="1" stroke="white" strokeWidth="1.5" fill="none"/>
              <circle cx="9" cy="9" r="3" stroke="white" strokeWidth="1.5" fill="none"/>
            </svg>
          </div>
          <span style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: '22px', letterSpacing: '0.05em', color: 'white' }}>
            TURFKE
          </span>
        </div>

        <div style={{
          display: 'flex', alignItems: 'center', gap: '4px',
          background: '#1a1a1a', borderRadius: '999px',
          padding: '4px', border: '1px solid #2a2a2a',
        }}>
          {['players', 'owners'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActive(tab)}
              className={`nav-tab${active === tab ? ' active' : ''}`}
            >
              For {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        <button style={{ background: 'none', border: 'none', color: '#ccc', fontSize: '14px', cursor: 'pointer', fontFamily: 'Inter, sans-serif' }}>
          Log in
        </button>
        <button className="btn-signup">Sign up free</button>
      </div>
    </nav>
  )
}
