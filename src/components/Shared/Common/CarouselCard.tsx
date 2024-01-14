import Carousel from 'react-elastic-carousel';
import { Values, theTeam } from '../../utils/content';
import { ValuesCard } from '..';

function CarouselCard({ type }: { type?: string }) {
    const values = type !== 'theTeam' ? Values : theTeam;
    return (
        <>
            <div className="grid"
                style={{ padding: '0 170px', marginTop: '5rem' }}
            >
                {/* @ts-expect-error carousel children prop*/}
                <Carousel itemsToShow={3} itemWidth={200}
                    enableSwipe
                    enableMouseSwipe
                    pagination={false}
                    showArrows={false}
                    enableAutoPlay
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
            </div>
        </>
    )
}

export default CarouselCard