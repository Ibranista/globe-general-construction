import styled, { keyframes } from 'styled-components'

const moveBackground = keyframes`
  0% {
    background-position: 0 0;
  }
  50% {
    background-position: 100% 0;
  }
  100% {
    background-position: 0 0;
  }
`
const zoomBackground = keyframes`
  0% {
    background-size: 100% 100%;
  }
  50% {
    background-size: 120% 120%;
  }
  100% {
    background-size: 100% 100%;
  }
`

export const ExperienceSectionWrapper = styled.section`
  position: relative;
  width: 100%;
  @media (max-width: 576px) {
  }
`
export const ExperienceFlexDiv = styled.div<{ direction?: string }>`
  display: flex;
  flex-direction: ${(props) => props.direction || 'unset'};
  @media (max-width: 576px) {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
`
export const ExperienceBackgroundDiv = styled.div<{
  image: string
}>`
  background: url(${(props) => props.image}) no-repeat fixed right;
  /* background-size: contain; */
  animation: ${zoomBackground} 55s linear infinite;
  height: 85vh;
  background-color: rgba(255, 255, 255, 0.295);
  background-blend-mode: overlay;
  backdrop-filter: blur(1px);
  -webkit-backdrop-filter: blur(2.1px);
  @media (max-width: 576px) {
    background: url(${(props) => props.image}) no-repeat fixed;
    background-size: 200% 100%;
    animation: ${moveBackground} 55s linear infinite;
    background-color: rgba(255, 255, 255, 0.295);
    background-blend-mode: overlay;
    -webkit-backdrop-filter: blur(2.1px);
    height: 100vh;
    position: relative;
    padding: 5px;
    border-radius: 16px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    border: 1px solid rgba(255, 255, 255, 0.26);
  }
`
export const InnerDiv = styled.div`
  @media (max-width: 576px) {
    padding: 5px;
    inset: 0;
  }
`
export const TextDiv = styled.div`
  width: 500px;
  @media (max-width: 576px) {
    padding-left: 15px;
    padding-top: 15px;
    width: unset;
  }
`
export const ExperienceStyledP = styled.p<{
  fontSize?: string
  lineHeight?: number | string
}>`
  color: ${(props) => props.color};
  font-size: ${(props) => props.fontSize || '2.5rem'};
  font-weight: 600;
  background: rgba(255, 255, 255, 0.21);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(4.2px);
  -webkit-backdrop-filter: blur(4.2px);
  border: 1px solid rgba(255, 255, 255, 0.4);
  width: fit-content;
  padding: 5px 10px;
  line-height: ${(props) => props.lineHeight || 'unset'};
  &.blackText {
    color: #000;
  }

  &.detail {
    width: 400px !important;
    background: #355070;
    color: #ffffff;
    padding: 20px;
  }

  @media (max-width: 576px) {
    &.blackText {
      /* color: #fff; */
    }
    &.detail {
      width: fit-content !important;
      background: unset;
      color: ${(props) => props.color};
    }
  }
`
export const ExpButtonDivWrapper = styled.div`
  @media (max-width: 576px) {
    width: 100%;
    justify-content: center;
    display: flex;
  }
`
export const StyledButtonDiv = styled.button`
  font-weight: 600;
  background: rgba(255, 255, 255, 0.21);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(4.2px);
  /* background: #ffc300; */
  position: absolute;
  bottom: 10% !important;
  /* left: -5px !important; */
  width: 18em;
  padding: 20px;
  border-radius: 12px;
  color: #ffc300;
  font-size: 1.5rem;
  @media (max-width: 576px) {
    background: #355070;
    position: absolute;
    bottom: 25px;
    padding: 20px;
    border-radius: 16px;
    margin: auto;
    width: 80%;
    color: #fff;
    font-size: 1.5rem;
  }
`
// topper

export const ExperienceHeroSectionStyle = styled.section<{
  padding?: string | number
}>`
  min-width: 300px;
  padding: (${({ padding }) => padding || '50px 0 0px 0'});
  margin-left: 200px;
  margin-right: 200px;
  /* width: 800px; */
  background: rgba(255, 255, 255, 0.103);
  display: flex;
  flex-direction: column;
  gap: 35px;
  /* overflow: hidden; */

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
  }
`
