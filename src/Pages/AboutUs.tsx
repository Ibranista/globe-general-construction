import {
  GeneralManager,
  LandingContent,
  Navbar,
  ValuesCard,
} from '../components/Shared'
import { CarouselCard, Divider } from '../components/Shared/Common'

function AboutUs() {
  return (
    <>
      <Navbar />
      <LandingContent />
      <GeneralManager />
      <Divider title='The Team' />
      <CarouselCard type='theTeam' />
      <Divider title='Capabilities' />
      <section
        style={{
          width: '80%',
          margin: '50px auto',
        }}
      >
        <ValuesCard
          title='title'
          content='content'
          image='capabilities.png'
          type='capabilities'
        />
      </section>
      <Divider title='Our Values' />
      <CarouselCard />
    </>
  )
}

export default AboutUs
