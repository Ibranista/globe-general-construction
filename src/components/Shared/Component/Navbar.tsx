import { FaPhone } from 'react-icons/fa'
import { Flex, Link, List } from '../Common'
import { useTheme } from 'styled-components'
import { Navbar as Navs } from '../../Burger/BurgerLeft'
function Navbar() {
  // const IMAGE_PATH = import.meta.env.VITE_ASSETS_PATH
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
        // marginLeft: 110,
        fontWeight: 'bold',
      }}
    >
      <Link href='tel:+251-97-834-9917' color={theme.secondary.dark}>
        <FaPhone
          style={{
            marginRight: 10,
          }}
        />
        <span>+251 97 834 9917</span>
      </Link>
    </List>
  )
}

export const links = [
  { name: 'Home', href: '/' },
  { name: 'About Us', href: '/About' },
  // { name: 'Services', href: '#' },
  { name: 'Our Team', href: '/About#theTeam' },
  // { name: 'Insights', href: '#' },
  { name: 'Experience', href: '/#experience' },
  { name: 'Contact', href: '#' },
]
