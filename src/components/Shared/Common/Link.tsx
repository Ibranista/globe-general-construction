import styled, { css } from 'styled-components'

type LinkProps = {
  color?: string
  fontSize?: string | number
  navLinks?: boolean
}

const Link = styled.a<LinkProps>`
  color: ${({ color }) => color || '#000'};
  text-decoration: none;
  font-size: ${({ fontSize }) => fontSize || '1.5rem'};
  /* text-align: center; */
  /* padding: 2rem; */
  /* display: block; */
  &:hover {
    color: #ae8507 !important;
  }
  @media (max-width: 1499px) {
    ${(props) =>
      props.navLinks &&
      css`
        width: 100%;
      `}
  }
  @media (max-width: 600px) {
    font-size: 1.2em !important;
  }
`

export default Link
