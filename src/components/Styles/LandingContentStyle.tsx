import styled from 'styled-components'
const ASSETS_PATH = import.meta.env.VITE_ASSETS_PATH

export const LandingSectionStyle = styled.section`
  padding: 10px 370px 10px 170px;
  background: url(${ASSETS_PATH}/hero-construction.jpg) no-repeat fixed;
  width: 100%;
  background-color: rgba(255, 255, 255, 0.9);
  background-blend-mode: overlay;
  background-size: cover;
  display: flex;
  flex-direction: column;

  /* tablet */
  @media (max-width: 1024px) and (min-width: 767px) {
    padding: 10px;
    margin: auto;
    padding: 19px !important;
    p {
      line-height: 1.9 !important;
      padding: unset !important;
    }
  }
  /* mobile */
  @media (max-width: 768px) {
    padding: 10px 20px;
  }
`

export const LandingTextStyle = styled.p`
  font-size: 16px;
  line-height: 1.6;
  color: #002838;
  font-family: IBM Plex Serif;
  p {
    line-height: 2 !important;
    font-size: 18px !important;
  }
  /* tablet */
  /* @media (max-width: 1024px) {
    background: skyblue !important;
    width: 100% !important;
    p {
      line-height: 1.9 !important;
      padding: unset !important;
    }
  } */
  /* mobile */
  @media (max-width: 768px) {
    p {
      line-height: 1.9 !important;
      text-align: calc(50% - 50px) !important;
    }
  }
`

/* padding: '10px 370px 10px 170px',
        background: ' url(./src/assets/hero-construction.jpg) no-repeat fixed',
        width: '100%',
        backgroundColor: 'rgba(255, 255, 255, 0)',
        backgroundBlendMode: 'overlay',
        backgroundSize: 'cover', */
