const stats = [
  { value: '48', suffix: '+', label: 'Venues Listed' },
  { value: '12', suffix: 'K', label: 'Bookings Made' },
  { value: '6', suffix: '', label: 'Counties Covered' },
  { value: '4.8', suffix: '★', label: 'Avg Venue Rating' },
]

export default function StatsBar() {
  return (
    <section style={{ borderTop: '1px solid #1f1f1f', borderBottom: '1px solid #1f1f1f' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)' }}>
        {stats.map((s, i) => (
          <div key={i} style={{
            padding: '40px 24px', textAlign: 'center',
            borderRight: i < 3 ? '1px solid #1f1f1f' : 'none',
          }}>
            <div style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: '42px', lineHeight: '1', marginBottom: '6px' }}>
              <span style={{ color: 'white' }}>{s.value}</span>
              <span style={{ color: '#c8903a' }}>{s.suffix}</span>
            </div>
            <div style={{ fontSize: '11px', letterSpacing: '0.12em', color: '#555', textTransform: 'uppercase', fontWeight: '500' }}>
              {s.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
