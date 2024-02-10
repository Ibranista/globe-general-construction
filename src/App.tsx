import { ThemeProvider } from 'styled-components'
import { GlobalStyles } from './global'
import { theme } from './theme'
import { Flex } from './components'
import {
  Footer,
  HeroSection,
  LandingContent,
  Navbar,
  ValuesCard,
} from './components/Shared'
import { Card, CarouselCard, Divider } from './components/Shared/Common'
import { missionVision } from './components/utils/content'
// import './Style.App.css'
import { Navbar as Navs } from './components/Burger/BurgerLeft'
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
          <Flex style={{ padding: '5rem 170px' }} flexWrap='wrap'>
            {missionVision?.map((item, index) => {
              return (
                <Card
                  key={index}
                  image={item?.image}
                  title={item?.title}
                  content={item?.content}
                />
              )
            })}
          </Flex>
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
