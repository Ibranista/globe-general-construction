import styled, { keyframes } from 'styled-components'
const ASSETS_PATH = import.meta.env.VITE_ASSETS_PATH

const zoom = keyframes`
  0% { background-size: 2000px; }
  50% { background-size: 2200px; }
  100% { background-size: 2000px; }
`

export const SectionWrapperStyle = styled.div`
  background: url(${ASSETS_PATH}/hero-bulldozor1.jpg) no-repeat fixed;
  background-size: 2000px;
  /* background-position-y: -0px; */
  animation: ${zoom} 100s infinite;
`

export const HeroSectionStyle = styled.section`
  min-width: 300px;
  padding: 50px 0 0px 0;
  margin-left: 200px;
  margin-right: 200px;
  width: 800px;
  background: rgba(255, 255, 255, 0.103);
  display: flex;
  flex-direction: column;
  /* overflow: hidden; */

  p.sectionTitle {
    margin: 0;
    font-size: 4rem;
    font-family:
      IBM Plex Serif,
      serif;
    font-weight: 700;
    color: #355070;
    /* width: 80rem; */
  }
  p.sectionSubTitle {
    font-weight: 600;
    color: #293241;
    font-size: 3.5rem;
    margin: 0;
    margin-top: 30px;
    padding: 5px;
    /* width: 80rem; */
  }
  p.sectionContent {
    line-height: 1.7;
    font-size: 1.2rem;
    /* width: 80rem; */
    background: rgba(68, 66, 66, 0.192);
    padding-left: 20px;
    color: #e9e9e9;
    padding: 20px;
    text-align: justify;
  }

  /* tablet */
  @media (max-width: 1024px) {
    min-width: 300px;
    padding: 50px 0 0px 0;
    /* margin-left: 50px; */
    /* margin-right: 200px; */
    width: 600px;
    background: rgba(7, 10, 6, 0.158);
    display: flex;
    margin: auto;
    flex-direction: column;
    p.sectionTitle {
      font-size: 3rem;
      width: 100%;
      text-align: center;
    }
    p.sectionSubTitle {
      font-size: 2rem;
      width: 100%;
      text-align: center;
    }
    p.sectionContent {
      width: 100%;
      text-align: justify;
      color: #000000;
      background: #ffffff7c;
    }
  }
  /* mobile */
  @media (max-width: 768px) {
    min-width: unset;
    padding: unset;
    margin-left: unset;
    margin-right: unset;
    width: unset;
    background: rgb(255, 255, 255);
    display: flex;
    flex-direction: column;
    p.sectionTitle {
      font-size: 2.5rem;
      width: 100%;
      text-align: center;
    }
    p.sectionSubTitle {
      font-size: 2rem;
      width: 100%;
      text-align: center;
    }
    p.sectionContent {
      width: 100%;
      text-align: justify;
      color: #000000;
      background: #ffffff7c;
    }
  }
`
