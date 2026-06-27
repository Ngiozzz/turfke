import Navbar from './components/Navbar'
import Hero from './components/Hero'
import StatsBar from './components/StatsBar'
import FeaturedPitches from './components/FeaturedPitches'
import HowItWorks from './components/HowItWorks'
import Footer from './components/Footer'

export default function Home() {
  return (
    <main style={{ minHeight: '100vh', background: '#0a0a0a', color: 'white' }}>
      <Navbar />
      <Hero />
      <StatsBar />
      <FeaturedPitches />
      <HowItWorks />
      <Footer />
    </main>
  )
}
