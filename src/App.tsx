import { ThemeProvider } from 'styled-components'
import { GlobalStyles } from './global'
import { theme } from './theme'
import {
  Footer,
  HeroSection,
  LandingContent,
  Navbar,
  ValuesCard,
} from './components/Shared'
import { CarouselCard, Divider } from './components/Shared/Common'
import './Style.App.css'
import { MissionVisionCard } from './components/Shared/Common/Card'
function App() {
  return (
    <ThemeProvider theme={theme}>
      <div style={{ paddingBottom: '90px' }}>
        <GlobalStyles />
        {/* <div ref={node}> */}
        {/* <FocusLock disabled={!open}> */}
        {/* <Burger open={open} setOpen={setOpen} aria-controls={menuId} /> */}
        {/* <Menu open={open} setOpen={setOpen} id={menuId} /> */}
        {/* </FocusLock> */}
        {/* </div> */}
        {/* <Navs /> */}
        <Navbar />
        <HeroSection />
        <LandingContent />
        <>
          <MissionVisionCard />
          <Divider title='Our Values' />
          <CarouselCard />
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
          <Divider title='The Team' />
          <CarouselCard type='theTeam' />
        </>
      </div>
      <Footer />
    </ThemeProvider>
  )
}

export default App
