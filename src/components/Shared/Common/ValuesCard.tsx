import { Flex } from '.'
import {
  CapabilitiesContainer,
  CapabilitiesFlexWrapper,
  CapabilitiesWrapper,
} from '../../Styles/CapabilitiesStyle'
// import '../../../Style.App.css'
function ValuesCard({
  title,
  content,
  image,
  type,
}: {
  title?: string
  content?: string
  image?: string
  type?: string
}) {
  const IMAGE_PATH = import.meta.env.VITE_ASSETS_PATH
  return (
    (type !== 'capabilities' && (
      <div
        className='grid__item'
        style={{
          marginRight: 10,
        }}
      >
        <div className='card'>
          <img
            className='card__img'
            src={`${IMAGE_PATH}/${image}`}
            alt='building'
          />
          <div className='card__content'>
            <h1 className='card__header'>{title}</h1>
            <p className='card__text'>{content}</p>
          </div>
        </div>
      </div>
    )) || (
      <CapabilitiesWrapper>
        <CapabilitiesContainer>
          <CapabilitiesFlexWrapper>
            <div>
              <h1
                style={{
                  color: '#355070',
                  fontSize: '28px',
                  padding: '10px 0',
                }}
              >
                General
              </h1>
              <p className='card__text'>
                <li style={{ width: '300px' }}>Building Construction</li>
                <li style={{ width: '300px' }}>Road Construction</li>
                <li style={{ width: '300px' }}>Renovation Works</li>
                <li style={{ width: '300px' }}>Water Works</li>
                <li style={{ width: '300px' }}>Maintenance Services</li>
              </p>
            </div>
            <div>
              <h1
                style={{
                  color: '#355070',
                  fontSize: '28px',
                  padding: '10px 0',
                }}
              >
                Design
              </h1>
              <p className='card__text'>
                Our Design division is dedicated to turning visions into
                reality. We approach each project with innovation, creativity,
                and attention to detail. Our team of skilled designers
                collaborates with clients to deliver aesthetically pleasing and
                functional designs that exceed expectations.
              </p>
            </div>
            <div>
              <h1
                style={{
                  color: '#355070',
                  fontSize: '28px',
                  padding: '10px 0',
                }}
              >
                Construction Management
              </h1>
              <p className='card__text'>
                With a focus on efficiency and excellence, our Construction
                Management services ensure seamless execution from project
                initiation to completion. We prioritize effective planning,
                resource optimization, and meticulous oversight to deliver
                projects on time and within budget.
              </p>
            </div>
          </CapabilitiesFlexWrapper>
        </CapabilitiesContainer>
      </CapabilitiesWrapper>
    )
  )
}

export default ValuesCard
