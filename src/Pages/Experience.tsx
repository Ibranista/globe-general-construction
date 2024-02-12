import { SectionWrapperStyle } from '../components/Styles/HeroSectionStyle'
import '../components/Styles/CarouselStyle.css'
import { useEffect, useMemo, useState } from 'react'
import { ExperienceCard, RenderCarousel } from '../components'
import { Experiences, GeneralExperiences } from '../components/utils/content'
import { Divider } from '../components/Shared/Common'
import { ExperienceHeroSectionStyle } from '../components/Styles/ExperienceStyle'
function Experience() {
  const [showComponent, setShowComponent] = useState(true)

  useEffect(() => {
    if (window.matchMedia('(max-width: 576px)').matches) {
      setShowComponent(false)
    } else {
      setShowComponent(true)
    }
  }, [])

  const generalExperienceCards = useMemo(
    () =>
      GeneralExperiences.map((experience, index) => (
        <ExperienceCard
          index={index}
          image={`generalExperience/${experience?.image}`}
          title1={'Design'}
          title2='Construct'
          title3={experience?.title}
          content={experience?.content}
          showComponent={showComponent}
        />
      )),
    [showComponent],
  )

  const japaneseGardenCards = useMemo(
    () =>
      Experiences.japaneseGarden.map((experience, index) => (
        <ExperienceCard
          direction='row-reverse'
          index={index}
          image={`JapaneseGarden/${experience?.image}`}
          title1={'Design'}
          title2='Construct'
          title3={experience?.title}
          content={experience?.content}
          showComponent={showComponent}
        />
      )),
    [showComponent],
  )

  return (
    <SectionWrapperStyle id='experience'>
      <ExperienceHeroSectionStyle>
        <p
          className='sectionTitle'
          style={{
            background: '#fff',
            color: '#355070',
            fontSize: '28px',
          }}
        >
          Some Showcase of Our Work
        </p>

        <Divider title='Palace Fence' />

        <RenderCarousel showComponent={showComponent}>
          {Experiences.palaceFence.map((experience, index) => {
            return (
              <ExperienceCard
                index={index}
                image={`Palace/${experience?.image}`}
                title1={'Design'}
                title2='Construct'
                title3={experience?.title}
                content={experience?.content}
                showComponent={showComponent}
              />
            )
          })}
        </RenderCarousel>
        <Divider title='Japanse Garden' />
        <RenderCarousel showComponent={showComponent}>
          {japaneseGardenCards}
        </RenderCarousel>
        <Divider title='Show Case' />
        <RenderCarousel showComponent={showComponent}>
          {generalExperienceCards}
        </RenderCarousel>
      </ExperienceHeroSectionStyle>
    </SectionWrapperStyle>
  )
}

export default Experience
