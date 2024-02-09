import { FaPhone } from 'react-icons/fa'
import { Flex, Link, List, NavWrapper } from '../Common'
import { useTheme } from 'styled-components'
import { Navbar as Navs } from '../../Burger/BurgerLeft'
function Navbar() {
  const IMAGE_PATH = import.meta.env.VITE_ASSETS_PATH
  return (
    <Flex
      justifyContent='space-between'
      style={{ fontSize: '.8rem' }}
      padding='20px 10em'
      flexWrap='wrap'
      background='#fff'
      navbar
    >
      {/* <Flex navbar><TelComponent /></Flex> */}
      {/* <NavLinks /> */}
      <Navs />
    </Flex>
  )
}

export default Navbar

export const TelComponent = () => {
  const theme = useTheme()
  return (
    <List
      style={{
        textDecoration: 'none',
        listStyleType: 'none',
        marginLeft: 110,
        fontWeight: 'bold',
      }}
    >
      <Link href='tel:123-456-7890' color={theme.secondary.dark}>
        <FaPhone
          style={{
            marginRight: 10,
          }}
        />
        <span>123-456-7890</span>
      </Link>
    </List>
  )
}

export const links = [
  { name: 'Home', href: '#' },
  { name: 'Services', href: '#' },
  { name: 'Our Team', href: '#' },
  { name: 'Insights', href: '#' },
  { name: 'Experience', href: '#' },
  { name: 'Contact', href: '#' },
  { name: 'About Us', href: '#' },
]
const NavLinks = () => {
  return (
    <NavWrapper flexWrap='wrap' justifyContent='space-around'>
      {links.map((link) => (
        <Link navLinks fontSize='16px' href={link.href} aria-current='page'>
          <List padding='10px' onHover='#EFFFFA' style={{ minWidth: '100px' }}>
            {link.name}
          </List>
        </Link>
      ))}
      <img
        src={`${import.meta.env.VITE_ASSETS_PATH}/crane-svg-icon.svg`}
        width={40}
      />
    </NavWrapper>
  )
}
