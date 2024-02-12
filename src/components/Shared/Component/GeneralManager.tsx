import { useTheme } from 'styled-components'
import {
  ImageDiv,
  InnerDiv,
  OuterDiv,
  StyledInnerP,
  StyledP,
} from '../../Styles/ManagerStyle'

function GeneralManager() {
  const theme = useTheme()
  const IMAGE_PATH = import.meta.env.VITE_ASSETS_PATH
  return (
    <>
      <p
        className='sectionSubTitle'
        style={{
          fontWeight: 600,
          color: '#293241',
          fontSize: '2.5rem',
          margin: 0,
          marginTop: '0px',
          padding: '0px 20px',
          // width: '80rem',
        }}
      >
        "Tailored Construction Services for Your Success"
      </p>
      <OuterDiv>
        <InnerDiv>
          <img width={'100%'} src={`${IMAGE_PATH}/theTeam/frontCeo.jpeg`} />
          <ImageDiv theme={theme}>
            <StyledP theme={theme}>
              Engineer Kedir Hassan
              <StyledInnerP theme={theme}>General Manager</StyledInnerP>
            </StyledP>
          </ImageDiv>
        </InnerDiv>
      </OuterDiv>
    </>
  )
}

export default GeneralManager
