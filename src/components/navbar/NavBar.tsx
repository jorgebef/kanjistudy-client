import React, { useState, useEffect } from 'react'
import {
  Hamburguer,
  HamburguerContainer,
  Logo,
  LogoContainer,
  Menu,
  MenuLink,
  MenuLinkName,
  NavContainer,
  Overlay,
} from './styled'

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
    setIsOpen(false)
    window.scrollTo(0, 0)
    // e.currentTarget.classList.toggle('open')
  }

  const links = {
    Home: '/',
    Quiz: '/quiz',
    Kanji: '/kanji',
    Kana: '/kana',
    About: '/about',
  }

  return (
    <NavContainer isopen={isOpen} scrollpos={scrollPos}>
      <LogoContainer>
        <Logo to='/'>LOGO logo</Logo>
      </LogoContainer>
      <Menu isopen={isOpen} scrollpos={scrollPos}>
        {Object.entries(links).map(([name, path]) => {
          return (
            <MenuLink
              key={path}
              to={path}
              isopen={isOpen}
              scrollpos={scrollPos}
              onClick={toggleOpen}
              className={isActive => (isActive ? 'active' : '')}
            >
              <MenuLinkName key={name}>{name}</MenuLinkName>
            </MenuLink>
          )
        })}
      </Menu>
      <HamburguerContainer isopen={isOpen}>
        <Hamburguer isopen={isOpen} onClick={() => setIsOpen(!isOpen)}>
          <div></div>
          <div></div>
          <div></div>
        </Hamburguer>
      </HamburguerContainer>
      <Overlay isopen={isOpen}></Overlay>
    </NavContainer>
  )
}

export default NavBar
