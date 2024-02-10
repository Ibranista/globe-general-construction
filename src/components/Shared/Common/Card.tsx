import { Divider, Flex } from '.'
import {
  CardContainer,
  CardContentStyle,
  CardHeader,
  CardHeaderStyle,
  ContentText,
  ContentWrapper,
  MissionVisionWrapperStyle,
  MobileCardContainer,
  Overlay,
} from '../../Styles/MissionVisionStyle'
import { missionVision } from '../../utils/content'

// Your main component
function Card({
  title,
  content,
  image,
}: {
  title: string
  content: string
  image: string
}) {
  const IMAGE_PATH = import.meta.env.VITE_ASSETS_PATH

  return (
    <>
      <CardContainer>
        <Overlay />
        <ContentWrapper>
          <Flex style={{ width: '100%', height: '100%', paddingRight: '20px' }}>
            <section
              className='image'
              style={{ width: '100%', height: '100%' }}
            >
              <img
                src={`${IMAGE_PATH}/${image}`}
                alt=''
                width='100%'
                height='100%'
              />
            </section>
            <article style={{ paddingBottom: '10px' }}>
              <section className='header'>
                <CardHeader>{title}</CardHeader>
              </section>
              <section className='content'>
                <ContentText>{content}</ContentText>
              </section>
            </article>
          </Flex>
        </ContentWrapper>
      </CardContainer>
      <MobileCardContainer image={image}>
        <CardHeaderStyle>{title}</CardHeaderStyle>
        <CardContentStyle>{content}</CardContentStyle>
      </MobileCardContainer>
    </>
  )
}

export default Card

export const MissionVisionCard = () => {
  return (
    <>
      <div style={{ marginBottom: '30px' }}>
        <Divider title='Mission & Vision' />
      </div>
      <MissionVisionWrapperStyle>
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
      </MissionVisionWrapperStyle>
    </>
  )
}
