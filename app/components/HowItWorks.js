const steps = [
  {
    number: '01',
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <circle cx="9" cy="9" r="6" stroke="#c8903a" strokeWidth="1.5"/>
        <line x1="13.5" y1="13.5" x2="18" y2="18" stroke="#c8903a" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    title: 'Find a pitch',
    desc: 'Search by location, size, or surface type across Kenya.',
  },
  {
    number: '02',
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <rect x="2" y="3" width="16" height="15" rx="2" stroke="#c8903a" strokeWidth="1.5"/>
        <line x1="6" y1="1" x2="6" y2="5" stroke="#c8903a" strokeWidth="1.5" strokeLinecap="round"/>
        <line x1="14" y1="1" x2="14" y2="5" stroke="#c8903a" strokeWidth="1.5" strokeLinecap="round"/>
        <line x1="2" y1="8" x2="18" y2="8" stroke="#c8903a" strokeWidth="1.5"/>
      </svg>
    ),
    title: 'Pick a slot',
    desc: 'Real-time availability — book in seconds, any time of day.',
  },
  {
    number: '03',
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <circle cx="10" cy="10" r="7.5" stroke="#c8903a" strokeWidth="1.5"/>
        <text x="10" y="14" textAnchor="middle" fontSize="9" fill="#c8903a" fontWeight="bold">M</text>
      </svg>
    ),
    title: 'Pay via M-Pesa',
    desc: 'Instant payment with M-Pesa STK push. No cash, no queues.',
  },
  {
    number: '04',
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <rect x="3" y="3" width="14" height="14" rx="1" stroke="#c8903a" strokeWidth="1.5"/>
        <rect x="6" y="6" width="3" height="3" fill="#c8903a"/>
        <rect x="11" y="6" width="3" height="3" fill="#c8903a"/>
        <rect x="6" y="11" width="3" height="3" fill="#c8903a"/>
        <rect x="11" y="11" width="3" height="3" fill="#c8903a" opacity="0.3"/>
      </svg>
    ),
    title: 'Show up and play',
    desc: 'Show your booking QR code at the gate. Matambo sawa!',
  },
]

export default function HowItWorks() {
  return (
    <section style={{ padding: '80px 24px', borderTop: '1px solid #1a1a1a' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <h2 style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: '48px', letterSpacing: '0.02em', margin: '0 0 60px', lineHeight: '1' }}>
          HOW IT<br />WORKS
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '32px' }}>
          {steps.map((step, i) => (
            <div key={i} style={{ position: 'relative' }}>
              <div style={{
                fontFamily: 'Bebas Neue, sans-serif', fontSize: '80px',
                color: 'rgba(255,255,255,0.04)', lineHeight: '1',
                position: 'absolute', top: '-8px', right: '0',
                pointerEvents: 'none', userSelect: 'none',
              }}>
                {step.number}
              </div>
              <div style={{
                width: '40px', height: '40px', borderRadius: '8px',
                background: 'rgba(200,144,58,0.1)',
                border: '1px solid rgba(200,144,58,0.2)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                marginBottom: '20px',
              }}>
                {step.icon}
              </div>
              <h3 style={{ fontSize: '16px', fontWeight: '600', color: 'white', margin: '0 0 8px' }}>{step.title}</h3>
              <p style={{ fontSize: '13px', color: '#555', lineHeight: '1.7', margin: 0 }}>{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
