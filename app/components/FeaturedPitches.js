import PitchIllustration from './PitchIllustration'

const pitches = [
  { name: 'Kasarani Arena Turf', location: 'Kasarani, Nairobi', price: '3,500', rating: '4.9', reviews: 62, status: 'available', statusLabel: 'Available' },
  { name: 'Westlands Premier Pitch', location: 'Westlands, Nairobi', price: '4,200', rating: '4.7', reviews: 38, status: 'limited', statusLabel: '2 Slots Left' },
  { name: 'Thika Road Sports Hub', location: 'Roysambu, Nairobi', price: '2,800', rating: '4.6', reviews: 91, status: 'available', statusLabel: 'Available' },
]

function StatusBadge({ status, label }) {
  const dotColor = status === 'available' ? '#4ade80' : '#f97316'
  return (
    <div style={{
      display: 'inline-flex', alignItems: 'center', gap: '5px',
      background: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(6px)',
      border: '1px solid rgba(255,255,255,0.1)', borderRadius: '999px',
      padding: '4px 10px', fontSize: '11px', fontWeight: '500', color: 'white',
    }}>
      <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: dotColor, display: 'inline-block' }} />
      {label}
    </div>
  )
}

function PitchCard({ pitch }) {
  return (
    <div className="pitch-card">
      <div style={{ position: 'relative', background: '#1a2e1a' }}>
        <div style={{ padding: '12px', paddingBottom: '0' }}>
          <PitchIllustration size="sm" />
        </div>
        <div style={{ position: 'absolute', top: '10px', right: '10px' }}>
          <StatusBadge status={pitch.status} label={pitch.statusLabel} />
        </div>
      </div>
      <div style={{ padding: '16px' }}>
        <h3 style={{ margin: '0 0 4px', fontSize: '15px', fontWeight: '600', color: 'white' }}>{pitch.name}</h3>
        <p style={{ margin: '0 0 14px', fontSize: '12px', color: '#555', display: 'flex', alignItems: 'center', gap: '4px' }}>
          <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
            <circle cx="5" cy="4" r="2" stroke="#555" strokeWidth="1.2"/>
            <path d="M5 10 C5 10 1 6.5 1 4a4 4 0 0 1 8 0C9 6.5 5 10 5 10Z" stroke="#555" strokeWidth="1.2" fill="none"/>
          </svg>
          {pitch.location}
        </p>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div>
            <span style={{ color: '#c8903a', fontWeight: '700', fontSize: '15px' }}>KES {pitch.price}</span>
            <span style={{ color: '#444', fontSize: '11px' }}>/hr</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
            <span style={{ color: '#c8903a', fontSize: '12px' }}>★</span>
            <span style={{ fontSize: '12px', color: '#ccc', fontWeight: '500' }}>{pitch.rating}</span>
            <span style={{ fontSize: '11px', color: '#444' }}>({pitch.reviews})</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function FeaturedPitches() {
  return (
    <section style={{ padding: '80px 24px' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '32px' }}>
          <h2 style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: '36px', letterSpacing: '0.03em', margin: 0 }}>
            Featured Pitches
          </h2>
          <a href="#" className="btn-ghost">View all →</a>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' }}>
          {pitches.map((p, i) => <PitchCard key={i} pitch={p} />)}
        </div>
      </div>
    </section>
  )
}
