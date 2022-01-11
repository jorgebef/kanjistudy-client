import React, { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import styled from 'styled-components'

interface NavContainerProps {
  isOpen?: boolean
  scrollPos: number
}

const NavContainer = styled.nav<NavContainerProps>`
  display: flex;
  position: fixed;
  z-index: 99;
  /* height: ${p =>
    (p.scrollPos === 0 ? p.theme.navH : p.theme.navHS) + 'rem'}; */
  height: ${p => p.theme.navH + 'rem'};
  top: 0;
  width: 100%;
  justify-content: space-between;
  background-color: ${p => (p.scrollPos === 0 ? null : p.theme.bg)};
  box-shadow: ${p =>
    p.scrollPos === 0 ? null : 'rgb(10 10 10 / 15%) 0px 0.5rem 1rem 0px'};
  align-items: stretch;
  transition: all ease-in-out 0.25s;

  @media (max-width: ${p => p.theme.mediaSm}) {
    flex-direction: column;
    background-color: ${p =>
      p.scrollPos !== 0 || p.isOpen ? p.theme.bg : null};
  }
`

const LogoContainer = styled.div`
  display: flex;
  padding-left: 15vw;
  height: inherit;
  text-decoration: none;
  align-self: flex-start;
  white-space: nowrap;

  @media (max-width: ${p => p.theme.mediaSm}) {
    position: absolute;
    top: 0rem;
    left: 0rem;
  }
`

const Logo = styled(Link)`
  align-self: center;
  text-decoration: none;
  font-weight: 800;
  cursor: pointer;
  font-size: 1.4rem;
  color: ${p => p.theme.fg};
`

interface MenuProps {
  isOpen: boolean
  scrollPos?: number
}

const HamburguerContainer = styled.div<MenuProps>`
  --divH: 4px;

  display: none;
  height: inherit;
  color: ${p => p.theme.fg};
  justify-content: center;

  @media (max-width: ${p => p.theme.mediaSm}) {
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 0rem;
    right: 5rem;
  }
`

const Hamburguer = styled.div<MenuProps>`
  cursor: pointer;
  padding: 0;
  margin: 0;

  & > div {
    width: calc(var(--divH) * 9);
    height: var(--divH);
    border-radius: var(--divH);
    justify-self: center;
    background-color: ${p => p.theme.fg};
    margin: var(--divH) 0;
    transition: all ease-in-out;
    -webkit-transition: all ease-in-out;
    transition-duration: 250ms;
    -webkit-transition-duration: 250ms;
  }

  & > div:nth-child(1) {
    transform: ${p => (p.isOpen ? 'rotate(45deg)' : null)};
    -webkit-transform: ${p => (p.isOpen ? 'rotate(45deg)' : null)};
    margin: ${p => (p.isOpen ? '15px 0 calc(var(--divH)*-1) 0' : null)};
  }
  & > div:nth-child(2) {
    opacity: ${p => (p.isOpen ? 0 : 1)};
    height: ${p => (p.isOpen ? 0 : null)};
    margin: ${p => (p.isOpen ? 0 : null)};
  }
  & > div:nth-child(3) {
    transform: ${p => (p.isOpen ? 'rotate(-45deg)' : null)};
    -webkit-transform: ${p => (p.isOpen ? 'rotate(-45deg)' : null)};
    margin: ${p => (p.isOpen ? '0 0 15px 0' : null)};
  }
`

const Menu = styled.ul<MenuProps>`
  /* --navH: ${p =>
    (p.scrollPos === 0 ? p.theme.navH : p.theme.navHS) + 'rem'}; */
  --navH: ${p => p.theme.navH + 'rem'};
  display: flex;
  flex-grow: 1;
  padding: 0 15vw 0 0;
  justify-content: flex-end;
  transition: all ease-in-out 0.25s;

  @media (max-width: ${p => p.theme.mediaSm}) {
    flex-grow: 0;
    display: flex;
    padding: ${p => (p.isOpen ? '0.5rem 0 2rem 0' : '0')};
    background-color: ${p => p.theme.bg};
    flex-direction: column;
    margin-top: var(--navH);
    width: 100%;
    max-height: ${p => (p.isOpen ? '20rem' : '0')};
    box-shadow: rgb(10 10 10 / 15%) 0px 0.5rem 1rem 0px;
  }
`

const links = {
  Home: '/',
  Kanji: '/kanji',
  Kana: '/kana',
  About: '/about',
}

const MenuLink = styled(NavLink)<MenuProps>`
  display: flex;
  color: ${p => p.theme.fg};
  padding: 0 1rem;
  margin: 0 1vw;
  cursor: pointer;
  text-decoration: none;
  font-size: 1.2rem;
  font-weight: 600;
  text-align: center;
  align-self: stretch;
  transition: all ease-in-out 0.25s;
  opacity: 0.6;

  &:hover,
  &.active {
    opacity: 1;
  }

  &:hover,
  &.active {
    & span::after {
      width: 120%;
    }
  }

  @media (max-width: ${p => p.theme.mediaSm}) {
    display: flex;
    justify-content: center;
    visibility: ${p => (p.isOpen ? 'visible' : 'hidden')};
    opacity: ${p => (p.isOpen ? '0.6' : '0')};
    padding: 1.25rem 0;
    margin: 0;
  }
`

const MenuLinkName = styled.span`
  & {
    align-self: center;
  }

  &::after {
    --ulineH: 0.35rem;
    content: '';
    display: block;
    height: var(--ulineH);
    width: 0;
    margin-top: 0.1rem;
    margin-left: -10%;
    border-radius: var(--ulineH);
    background: linear-gradient(
      90deg,
      ${p => p.theme.pink} 0%,
      ${p => p.theme.violet} 100%
    );
    transition: all 0.15s ease-in-out;
  }
`

const Overlay = styled.div<MenuProps>`
  display: block;
  visibility: ${p => (p.isOpen ? 'visible' : 'hidden')};
  position: fixed;
  background-color: #000;
  opacity: ${p => (p.isOpen ? 0.35 : 0)};
  width: 100vh;
  height: 100vh;
  margin-top: ${p => p.theme.navH + 'rem'};
  z-index: -1;
  transition: all 0.25s ease-in-out;
`

const NavBar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [scrollPos, setScrollPos] = useState<number>(0)

  const handleScroll: () => void = () => {
    const position: number = window.pageYOffset
    setScrollPos(position)
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const toggleOpen = (e: React.MouseEvent<HTMLElement>) => {
    setIsOpen(!isOpen)
    e.currentTarget.classList.toggle('open')
  }

  return (
    <NavContainer isOpen={isOpen} scrollPos={scrollPos}>
      <LogoContainer>
        <Logo to='/'>LOGO logo</Logo>
      </LogoContainer>
      <Menu isOpen={isOpen} scrollPos={scrollPos}>
        {Object.entries(links).map(([name, path]) => {
          return (
            <MenuLink
              to={path}
              isOpen={isOpen}
              scrollPos={scrollPos}
              onClick={() => setIsOpen(false)}
              className={isActive => (isActive ? 'active' : '')}
            >
              <MenuLinkName>{name}</MenuLinkName>
            </MenuLink>
          )
        })}
      </Menu>
      <HamburguerContainer isOpen={isOpen}>
        <Hamburguer isOpen={isOpen} onClick={toggleOpen}>
          <div></div>
          <div></div>
          <div></div>
        </Hamburguer>
      </HamburguerContainer>
      <Overlay isOpen={isOpen}></Overlay>
    </NavContainer>
  )
}

export default NavBar
