import { FaPhone } from "react-icons/fa"
import { Flex, Link, List, NavWrapper } from "../Common"
import { useTheme } from "styled-components"

function Navbar() {
    const IMAGE_PATH = import.meta.env.VITE_ASSETS_PATH;
    return (
        <Flex justifyContent="space-between"
            style={{ fontSize: '.8rem' }}
            padding='10px 10em'
            flexWrap='wrap'
        >
            <Flex>
                <img 
                src={`${IMAGE_PATH}/logo.png`} 
                alt="logo" width={"200px"}
                    style={{
                        position: 'absolute',
                        top: -23,
                        left: '-2%',
                    }}
                />
                <TelComponent />
            </Flex>
            <NavLinks />
        </Flex>
    )
}

export default Navbar

const TelComponent = () => {
    const theme = useTheme()
    return (
        <li
            style={{
                textDecoration: "none",
                listStyleType: "none",
                marginLeft: 60
            }}
        >
            <Link href="tel:123-456-7890"
                color={theme.secondary.dark}
            >
                <FaPhone style={{
                    marginRight: 10
                }} />
                <span>123-456-7890</span>
            </Link>
        </li >
    )
}

const NavLinks = () => {
    return (
        <NavWrapper
            flexWrap='wrap'
            justifyContent='space-around'
        >
            <List
                style={{ minWidth: '100px' }}
            >
                <Link href="#" aria-current="page">
                    Home
                </Link>
            </List>
            <List
                style={{ minWidth: '100px' }}
            >
                <Link href="#" aria-current="page">
                    Services
                </Link>
            </List>
            <List
                style={{ minWidth: '100px' }}
            >
                <Link href="#" aria-current="page">
                    Our Team
                </Link>
            </List>
            <List
                style={{ minWidth: '100px' }}
            >
                <Link href="#" aria-current="page">
                    Market Insights
                </Link>
            </List>
            <List
                style={{ minWidth: '100px' }}
            >
                <Link href="#" aria-current="page">
                    Experience
                </Link>
            </List>
            <List
                style={{ minWidth: '100px' }}
            >
                <Link href="#" aria-current="page">
                    Contact Us
                </Link>
            </List>
            <List
                style={{ minWidth: '100px' }}
            >
                <Link href="#" aria-current="page">
                    About Us
                </Link>
            </List>
            <img 
            src = {`${import.meta.env.VITE_ASSETS_PATH}/crane-svg-icon.svg`}
            width={40} />
        </NavWrapper >
    )
}