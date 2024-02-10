import styled from 'styled-components'
const IMAGE_PATH = import.meta.env.VITE_ASSETS_PATH

export const CardContainer = styled.div`
  min-width: 48%;
  height: 200px;
  background: #355070;
  position: relative;
  border-radius: 5px;
  overflow: hidden;

  /* tablet large*/
  @media (max-width: 1500px) {
    display: none;
  }

  @media (max-width: 768px) {
    all: unset;
    display: none;
  }
`

export const Overlay = styled.div`
  background: #fce27d;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 50%;

  @media (max-width: 768px) {
    all: unset;
  }
`

export const ContentWrapper = styled.div`
  background: #ffffff;
  position: absolute;
  box-sizing: border-box;
  top: 4px;
  right: 4px;
  bottom: 4px;
  left: 4px;
  // Uncomment the following lines if you want to use them
  // border-radius:  8px;
  // padding:  15px;

  @media (max-width: 768px) {
    all: unset;
  }
`

export const CardHeader = styled.p`
  font-weight: 500;
  font-size: 3rem;
  color: #355070;
  margin: 0;
  padding-top: 20px;

  @media (max-width: 768px) {
    all: unset;
  }
`

export const ContentText = styled.p`
  font-size: 16px;
  line-height: 1.6;
  color: #002838;

  @media (max-width: 768px) {
    all: unset;
  }
`
export const MobileCardContainer = styled.div<{ image: string }>`
  display: flex;
  gap: 10px;
  flex-direction: column;
  width: 100%;
  margin-bottom: 20px;
  padding: 10px;
  border: 2px solid #355070;
  background: ${({ image }) => `url(${IMAGE_PATH}/${image}) no-repeat`};
  background-size: cover;
  background-blend-mode: overlay;
  background-color: #eceff3d1;

  /* tablet large*/
  @media (min-width: 1499px) {
    display: none;
  }
`
export const CardHeaderStyle = styled.div`
  font-size: 2rem;
  color: #355070;
`
export const CardContentStyle = styled.div`
  line-height: 1.6;
`

export const MissionVisionWrapperStyle = styled.div`
  padding: 5rem 170px;
  display: flex;
  flex-wrap: wrap;
  @media (max-width: 768px) {
    padding: 20px 20px 0;
  }
`
