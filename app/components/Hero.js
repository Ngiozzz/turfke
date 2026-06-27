import PitchIllustration from './PitchIllustration'

export default function Hero() {
  return (
    <section style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', paddingTop: '80px', paddingBottom: '60px', position: 'relative', overflow: 'hidden' }}>
      <div style={{
        position: 'absolute', top: '20%', left: '30%',
        width: '600px', height: '400px',
        background: 'radial-gradient(ellipse, rgba(30,58,30,0.25) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 24px', width: '100%' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '48px', alignItems: 'center' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '24px' }}>
              <div style={{ width: '32px', height: '2px', background: '#c8903a' }} />
              <span style={{ fontSize: '11px', letterSpacing: '0.15em', color: '#c8903a', fontWeight: '500', textTransform: 'uppercase' }}>
                Nairobi's #1 Pitch Booking
              </span>
            </div>
            <h1 style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: 'clamp(72px, 9vw, 108px)', lineHeight: '0.92', margin: '0 0 32px', letterSpacing: '0.01em' }}>
              <span style={{ color: 'white', display: 'block' }}>BOOK</span>
              <span style={{ color: 'white', display: 'block' }}>YOUR</span>
              <span style={{ color: '#c8903a', display: 'block' }}>PITCH.</span>
              <span style={{ color: 'white', display: 'block' }}>PLAY</span>
              <span style={{ color: 'white', display: 'block' }}>NOW.</span>
            </h1>
            <p style={{ fontSize: '15px', lineHeight: '1.7', color: '#888', maxWidth: '340px', margin: '0 0 36px' }}>
              Find and reserve football turfs across Kenya in seconds. Premium pitches in Nairobi, Mombasa, Kisumu and beyond — no calls, no hassle.
            </p>
            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
              <a href="#" className="btn-outline">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <circle cx="6" cy="6" r="4.5" stroke="currentColor" strokeWidth="1.5"/>
                  <line x1="9.5" y1="9.5" x2="13" y2="13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
                Find a pitch
              </a>
              <a href="#" className="btn-gold">List your venue</a>
            </div>
          </div>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <div style={{
              borderRadius: '8px', overflow: 'hidden',
              border: '1px solid rgba(255,255,255,0.08)',
              boxShadow: '0 0 80px rgba(30,58,30,0.4), 0 0 160px rgba(30,58,30,0.15)',
              width: '100%', maxWidth: '420px',
            }}>
              <PitchIllustration />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
