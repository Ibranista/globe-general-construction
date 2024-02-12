import { LuConstruction } from 'react-icons/lu'
import {
  ExpButtonDivWrapper,
  ExperienceBackgroundDiv,
  ExperienceFlexDiv,
  ExperienceSectionWrapper,
  ExperienceStyledP,
  InnerDiv,
  StyledButtonDiv,
  TextDiv,
} from '../Styles/ExperienceStyle'
import { BsHouseGear } from 'react-icons/bs'
import { FaSketch } from 'react-icons/fa'
import { useTheme } from 'styled-components'
import { expCardProps } from '../types'
import { BiPhone } from 'react-icons/bi'
import '../../components/Styles/CarouselStyle.css'
import { Link } from '../Shared/Common'

function ExperienceCard({
  index,
  image,
  title1,
  title2,
  title3,
  content,
  showComponent,
  direction,
}: expCardProps) {
  const theme = useTheme()
  const IMAGE_PATH = import.meta.env.VITE_ASSETS_PATH
  console.log({ direction })
  return (
    <ExperienceSectionWrapper className='expSectionWrapper' key={index}>
      <ExperienceFlexDiv direction={direction}>
        <ExperienceBackgroundDiv
          image={showComponent ? `unset` : `${IMAGE_PATH}/experience/${image}`}
        >
          <InnerDiv>
            <TextDiv>
              <ExperienceStyledP color={theme.primary.main}>
                {title1}.
                <FaSketch />
              </ExperienceStyledP>
              <ExperienceStyledP color={theme.secondary.main}>
                {title2}.
                <LuConstruction />
              </ExperienceStyledP>
              <ExperienceStyledP color='#fff' className='blackText'>
                {title3}.
                <BsHouseGear />
              </ExperienceStyledP>
              <ExperienceStyledP
                color='#fff'
                fontSize='1rem'
                lineHeight={1.7}
                className='blackText detail'
              >
                {content}
              </ExperienceStyledP>
            </TextDiv>
          </InnerDiv>
        </ExperienceBackgroundDiv>
        {showComponent && (
          <ExperienceBackgroundDiv
            image={`${IMAGE_PATH}/experience/${image}`}
            style={{ width: '100%' }}
          />
        )}
      </ExperienceFlexDiv>
      {/* Button */}
      <ExpButtonDivWrapper>
        <StyledButtonDiv className='contactUsButton'>
          <Link href='tel:123-456-7890' color={theme.secondary.light}>
            Contact Us
          </Link>
          <BiPhone className='phoneIcon' />
        </StyledButtonDiv>
      </ExpButtonDivWrapper>
    </ExperienceSectionWrapper>
  )
}

export default ExperienceCard
