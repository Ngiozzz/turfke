import './globals.css'

export const metadata = {
  title: 'TurfKE — Book Your Pitch. Play Now.',
  description: 'Find and reserve football turfs across Kenya in seconds.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
