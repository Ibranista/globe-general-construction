import { useState } from 'react'
import {
  LandingSectionStyle,
  LandingTextStyle,
} from '../../Styles/LandingContentStyle'
// import { Divider } from '../Common'

function LandingContent() {
  const [expanded, setExpanded] = useState(false)

  const toggleExpand = () => {
    setExpanded(!expanded)
  }

  const textContent = (
    <LandingTextStyle>
      <span
        style={{
          fontSize: 30,
        }}
      >
        "
      </span>{' '}
      Welcome to GLOBAL General Construction, a distinguished Grade TWO (2)
      General Contractor and Grade ONE (1) Contractor in Water Works
      Construction, established in the year 2009 E.C. Since our inauguration in
      the construction sector, we have embarked on a diverse range of civil
      engineering projects, including the construction of roads and bridges,
      water and irrigation facilities, high-rise buildings, and complex
      educational establishments. Drawing upon extensive experience in civil
      engineering construction, we take immense pride in delivering superior
      services that set industry benchmarks. Our meticulously designed
      organizational structure ensures efficiency and excellence in project
      management. This qualification document serves as a comprehensive source
      of information, covering our institutional capacity, experience, equipment
      potential, and other vital details reflecting our organizational prowess
      for your careful consideration. Committed to providing full-service
      solutions, we operate as a General Contractor for various Building and
      Water Works projects, engaging in both negotiated and competitive bid
      bases.
    </LandingTextStyle>
  )

  const truncatedContent = (
    <p style={{ fontSize: '16px', lineHeight: '1.6', color: '#002838' }}>
      {textContent?.props?.children?.slice(0, 701)}
      <span onClick={toggleExpand} style={{ cursor: 'pointer', color: 'blue' }}>
        {expanded ? ' Read Less' : ' Read More'}
      </span>
    </p>
  )

  return (
    <LandingSectionStyle>
      <p
        style={{
          fontWeight: '500',
          fontSize: '3rem',
          color: '#355070',
          margin: 0,
          padding: '15px 0',
        }}
      >
        <div
          style={{
            width: '230px',
            background: 'orange',
            height: '3px',
            marginBottom: 5,
          }}
        ></div>
        Who We Are
      </p>
      <LandingTextStyle>
        {expanded ? textContent : truncatedContent}
      </LandingTextStyle>
    </LandingSectionStyle>
  )
}

export default LandingContent
