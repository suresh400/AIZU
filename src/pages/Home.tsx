import React from 'react'
import HeroSection from '../components/sections/HeroSection'
import CoinSection from '../components/sections/CoinSection'
import ProgramsSection from '../components/sections/ProgramsSection'
import TrustSection from '../components/sections/TrustSection'
import EcosystemSection from '../components/sections/EcosystemSection'
import GallerySection from '../components/sections/GallerySection'
import StatsSection from '../components/sections/StatsSection'
import WhoWeAreSection from '../components/sections/WhoWeAreSection'
import PartnersSection from '../components/sections/PartnersSection'
import CountriesSection from '../components/sections/CountriesSection'
import CTASection from '../components/sections/CTASection'

const Home: React.FC = () => {
  return (
    <main>
      <HeroSection />
      <CoinSection />
      <ProgramsSection />
      <TrustSection />
      <EcosystemSection />
      <GallerySection />
      <StatsSection />
      <WhoWeAreSection />
      <PartnersSection />
      <CountriesSection />
      <CTASection />
    </main>
  )
}

export default Home
