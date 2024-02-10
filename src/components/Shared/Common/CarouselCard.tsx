import Carousel from 'react-elastic-carousel'
import { Values, theTeam } from '../../utils/content'
import { ValuesCard } from '..'
import { ValuesCarouselWrapper } from '../../Styles/ValuesCarouselStyle'

const breakPoints = [
  { width: 576, itemsToShow: 1 },
  { width: 768, itemsToShow: 2 },
  { width: 1200, itemsToShow: 3 },
  { width: 1500, itemsToShow: 4 },
]

function CarouselCard({ type }: { type?: string }) {
  const values = type !== 'theTeam' ? Values : theTeam
  return (
    <>
      <ValuesCarouselWrapper className='grid'>
        {/* @ts-expect-error carousel children prop*/}
        <Carousel
          breakPoints={breakPoints}
          enableSwipe
          enableMouseSwipe
          pagination={false}
          showArrows={false}
          enableAutoPlay
          initialActiveIndex={0}
        >
          {values?.map((item, index) => (
            <>
              <ValuesCard
                key={index}
                title={item?.title}
                content={item?.content}
                image={item?.image}
              />
            </>
          ))}
        </Carousel>
      </ValuesCarouselWrapper>
    </>
  )
}

export default CarouselCard
