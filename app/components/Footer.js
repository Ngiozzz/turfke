export default function Footer() {
  return (
    <footer style={{ borderTop: '1px solid #1a1a1a', padding: '28px 24px' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <p style={{ fontSize: '12px', color: '#3a3a3a', margin: 0 }}>
          © 2026 TurfKE · Nairobi, Kenya
        </p>
        <div style={{ display: 'flex', gap: '28px' }}>
          {['Pricing', 'For Owners', 'Support', 'Terms'].map(link => (
            <a key={link} href="#" className="footer-link">
              {link.toUpperCase()}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
