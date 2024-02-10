import {
  HeroSectionStyle,
  SectionWrapperStyle,
} from '../../Styles/HeroSectionStyle'

function HeroSection() {
  const ASSETS_PATH = import.meta.env.VITE_ASSETS_PATH
  return (
    <SectionWrapperStyle>
      <HeroSectionStyle>
        <p className='sectionTitle'>Global General Construction</p>
        <p className='sectionSubTitle'>
          "Tailored Construction Services for Your Success"
        </p>
        <p className='sectionContent'>
          Established in 2016, our commitment to excellence shines through as we
          bring a wealth of expertise to General Contracting, Building, and
          Water works. With a focus on both negotiated and competitive bids, we
          are a local company passionately dedicated to meeting the country's
          necessities for the benefit of all.
        </p>
      </HeroSectionStyle>
    </SectionWrapperStyle>
  )
}

export default HeroSection
