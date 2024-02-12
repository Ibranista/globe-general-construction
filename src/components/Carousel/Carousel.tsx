import React, { ReactNode, useRef } from 'react'
import { default as ElasticCarousel } from 'react-elastic-carousel'

interface CarouselProps {
  showComponent: boolean
  children: ReactNode
}
const breakPoints = [
  { width: 576, itemsToShow: 1 },
  { width: 768, itemsToShow: 1 },
  { width: 1200, itemsToShow: 1 },
  { width: 1500, itemsToShow: 1 },
]
function Carousel({ showComponent, children }: CarouselProps) {
  const carouselRef = useRef(null)

  const goto = (value: number) => {
    // @ts-expect-error goTo can't be null
    carouselRef.current.goTo(value, true)
  }

  return (
    // @ts-expect-error carousel children prop}
    <ElasticCarousel
      ref={carouselRef}
      breakPoints={breakPoints}
      enableSwipe
      enableMouseSwipe
      // pagination={showComponent}
      pagination={false}
      showArrows={showComponent}
      enableAutoPlay
      transitionMs={3000}
      autoPlaySpeed={30000}
      initialActiveIndex={0}
      // isRTL={true}
      onNextEnd={(current, index) => index === 2 && goto(0)}
    >
      {children}
    </ElasticCarousel>
  )
}

export default Carousel
