import { bool } from 'prop-types'
import { StyledMenu } from './Menu.styled'

const Menu = ({ open, ...props }: { open: boolean }) => {
  const isHidden = open ? true : false
  const tabIndex = isHidden ? 0 : -1

  return (
    <StyledMenu aria-hidden={!isHidden} {...props}>
      <a href='/' tabIndex={tabIndex}>
        <span aria-hidden='true'>💁🏻‍♂️</span>
        About us
      </a>
      <a href='/' tabIndex={tabIndex}>
        <span aria-hidden='true'>💸</span>
        Pricing
      </a>
      <a href='/' tabIndex={tabIndex}>
        <span aria-hidden='true'>📩</span>
        Contact
      </a>
    </StyledMenu>
  )
}

Menu.propTypes = {
  open: bool.isRequired,
}

export default Menu
