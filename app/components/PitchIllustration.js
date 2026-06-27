export default function PitchIllustration({ size = 'lg' }) {
  const w = size === 'lg' ? 340 : 180
  const h = size === 'lg' ? 240 : 120

  return (
    <svg viewBox="0 0 340 240" width={w} height={h} style={{ display: 'block' }} xmlns="http://www.w3.org/2000/svg">
      <rect width="340" height="240" fill="#1e3a1e" rx="4"/>
      {[0,1,2,3,4,5,6].map(i => (
        <rect key={i} x={i * 48} y="0" width="24" height="240" fill="rgba(255,255,255,0.02)"/>
      ))}
      <rect x="12" y="12" width="316" height="216" fill="none" stroke="rgba(255,255,255,0.35)" strokeWidth="1.5" rx="2"/>
      <line x1="170" y1="12" x2="170" y2="228" stroke="rgba(255,255,255,0.35)" strokeWidth="1.5"/>
      <circle cx="170" cy="120" r="36" fill="none" stroke="rgba(255,255,255,0.35)" strokeWidth="1.5"/>
      <circle cx="170" cy="120" r="2.5" fill="rgba(255,255,255,0.6)"/>
      <rect x="12" y="72" width="52" height="96" fill="none" stroke="rgba(255,255,255,0.35)" strokeWidth="1.5"/>
      <rect x="12" y="96" width="22" height="48" fill="none" stroke="rgba(255,255,255,0.35)" strokeWidth="1.5"/>
      <circle cx="50" cy="120" r="2" fill="rgba(255,255,255,0.4)"/>
      <rect x="276" y="72" width="52" height="96" fill="none" stroke="rgba(255,255,255,0.35)" strokeWidth="1.5"/>
      <rect x="306" y="96" width="22" height="48" fill="none" stroke="rgba(255,255,255,0.35)" strokeWidth="1.5"/>
      <circle cx="290" cy="120" r="2" fill="rgba(255,255,255,0.4)"/>
      <path d="M12 22 A10 10 0 0 1 22 12" fill="none" stroke="rgba(255,255,255,0.25)" strokeWidth="1.5"/>
      <path d="M318 12 A10 10 0 0 1 328 22" fill="none" stroke="rgba(255,255,255,0.25)" strokeWidth="1.5"/>
      <path d="M12 218 A10 10 0 0 0 22 228" fill="none" stroke="rgba(255,255,255,0.25)" strokeWidth="1.5"/>
      <path d="M318 228 A10 10 0 0 0 328 218" fill="none" stroke="rgba(255,255,255,0.25)" strokeWidth="1.5"/>
      <rect x="4" y="104" width="8" height="32" fill="none" stroke="rgba(255,255,255,0.5)" strokeWidth="1.2"/>
      <rect x="328" y="104" width="8" height="32" fill="none" stroke="rgba(255,255,255,0.5)" strokeWidth="1.2"/>
      <circle cx="170" cy="120" r="1.5" fill="white" opacity="0.7"/>
    </svg>
  )
}
