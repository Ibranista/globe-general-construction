import { useState } from 'react'
import styled from 'styled-components'
import { TelComponent, links } from '../Shared/Component/Navbar'
import { Link, List } from '../Shared/Common'

const Burger = () => {
  const [open, setOpen] = useState(false)

  return (
    <>
      <StyledBurger open={open} onClick={() => setOpen(!open)}>
        <div />
        <div />
        <div />
      </StyledBurger>
      <RightNav open={open} />
    </>
  )
}

export default Burger

const RightNav = ({ open }: { open: boolean }) => {
  return (
    <Ul open={open}>
      {links.map((link) => (
        <>
          <Link navLinks fontSize='16px' href={link.href} aria-current='page'>
            <List
              padding='10px'
              onHover='#EFFFFA'
              style={{ minWidth: '100px' }}
            >
              {link.name}
            </List>
          </Link>
        </>
      ))}
      <img
        src={`${import.meta.env.VITE_ASSETS_PATH}/crane-svg-icon.svg`}
        width={40}
      />
    </Ul>
  )
}

const Nav = styled.nav`
  width: 100%;
  height: 55px;
  /* border-bottom: 2px solid #f1f1f1; */
  padding: 0 20px;
  display: flex;
  /* justify-content: space-between; */
  justify-content: space-between;
  @media (max-width: 1160px) {
    justify-content: center;
    margin-left: 150px;
  }
  .logo {
    padding: 15px 0;
  }
`

export const Navbar = () => {
  const IMAGE_PATH = import.meta.env.VITE_ASSETS_PATH
  return (
    <Nav>
      <img
        src={`${IMAGE_PATH}/logo.png`}
        alt='logo'
        width={'200px'}
        style={{
          position: 'absolute',
          top: -10,
          left: '-1px',
        }}
      />
      <TelWrapper>
        <TelComponent />
      </TelWrapper>
      <div></div>
      <Burger />
    </Nav>
  )
}
// styles

const TelWrapper = styled.div`
  margin-left: 160px;
  min-width: 190px;
  padding-top: 10px;

  @media (max-width: 600px) {
    min-width: unset;
    margin-left: unset;
    margin-right: 55px;
  }

  @media (max-width: 450px) {
    font-size: 10px;
    width: 150px;
  }

  @media (max-width: 400px) {
    display: none;
    margin-right: 10px;
  }
`

type styledBurgerProps = {
  open: boolean
}

const StyledBurger = styled.div<styledBurgerProps>`
  width: 4rem;
  height: 2rem;
  position: fixed;
  top: 30px;
  right: 15px;
  z-index: 20;
  display: none;

  @media (max-width: 1065px) {
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
    &:hover {
      cursor: pointer;
    }
  }

  div {
    width: 2rem;
    height: 0.25rem;
    background-color: ${({ open }) => (open ? '#ccc' : '#333')};
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.3s linear;

    &:nth-child(1) {
      transform: ${({ open }) => (open ? 'rotate(45deg)' : 'rotate(0)')};
    }

    &:nth-child(2) {
      transform: ${({ open }) => (open ? 'translateX(100%)' : 'translateX(0)')};
      opacity: ${({ open }) => (open ? 0 : 1)};
    }

    &:nth-child(3) {
      transform: ${({ open }) => (open ? 'rotate(-45deg)' : 'rotate(0)')};
    }
  }
`
const Ul = styled.ul<styledBurgerProps>`
  list-style: none;
  display: flex;
  /* flex-flow: row nowrap; */
  justify-content: flex-end;
  li {
    padding: 18px 10px;
  }

  @media (max-width: 1065px) {
    flex-flow: column nowrap;
    justify-content: space-around;
    background-color: #0d2538;
    position: fixed;
    transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(100%)')};
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;

    li {
      color: #fff;
    }
  }
`
