import { HeroSection, LandingContent, Navbar } from '../components/Shared'
import { Divider } from '../components/Shared/Common'
import { MissionVisionCard } from '../components/Shared/Common/Card'
import Experience from './Experience'

function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <LandingContent />
      <MissionVisionCard />
      <Divider title='' />
      <Experience />
    </>
  )
}

export default Home
