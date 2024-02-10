import styled from 'styled-components'

export const CapabilitiesWrapper = styled.div``

export const CapabilitiesContainer = styled.div``

export const CapabilitiesFlexWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  gap: calc((100vw - 100%) / 2);

  /* tablet and mobile */
  @media (max-width: 768px) {
    gap: 0;
    flex-direction: column;
  }
`

export const CapabilitiesHeader = styled.h1``

export const CapabilitiesText = styled.p``

// style={{
//     padding: '10px 370px 10px 170px',
//     background: `url(${IMAGE_PATH}/${image}) no-repeat fixed`,
//     width: '100%',
//     backgroundColor: 'rgba(255, 255, 255, 0.925)',
//     backgroundBlendMode: 'overlay',
//     backgroundSize: 'cover',
//   }}
