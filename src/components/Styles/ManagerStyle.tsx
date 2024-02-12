import styled from 'styled-components'

export const SectionSubTitle = styled.p`
  /* Add any additional styles for sectionSubTitle here */
`

export const OuterDiv = styled.div`
  /* mobile */
  padding: 15px;
  margin: auto 550px;
  @media (max-width: 768px) {
    padding: 15px;
    margin: unset;
  }
`

export const InnerDiv = styled.div`
  width: 80%;
  justify-content: center !important;
  padding: 2px;
  border: 2px solid #355070;
  /* display: flex; */
  justify-content: space-between;
  /* mobile */
  @media (max-width: 768px) {
    width: 100%;
  }
`

export const ImageDiv = styled.div`
  background: ${(props) => props.theme.primary.darker};
`

export const StyledP = styled.p`
  color: ${(props) => props.theme.primaryLight};
  font-size: 1.5rem;
  font-weight: bold;
  padding: 8px 0 5px 20px;
  text-align: left;
  margin: 0;
`

export const StyledInnerP = styled.p`
  color: ${(props) => props.theme.secondary.main};
  font-weight: normal;
  font-size: 1.2rem;
  text-align: left;
`
