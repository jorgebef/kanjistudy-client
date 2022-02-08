import React, { useState, useEffect } from 'react'
import { Btn } from '../common/Button'
import * as S from './styles'

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
    <S.NavContainer isopen={isOpen} scrollpos={scrollPos}>
      <S.LogoContainer>
        <S.Logo to='/'>LOGO logo</S.Logo>
      </S.LogoContainer>
      <S.Menu isopen={isOpen} scrollpos={scrollPos}>
        {Object.entries(links).map(([name, path]) => {
          return (
            <S.MenuLink
              key={path}
              to={path}
              isopen={isOpen}
              scrollpos={scrollPos}
              onClick={toggleOpen}
              className={isActive => (isActive ? 'active' : '')}
            >
              <S.MenuLinkName key={name}>{name}</S.MenuLinkName>
            </S.MenuLink>
          )
        })}
        <Btn>Sign In</Btn>
      </S.Menu>
      <S.HamburguerContainer isopen={isOpen}>
        <S.Hamburguer isopen={isOpen} onClick={() => setIsOpen(!isOpen)}>
          <div></div>
          <div></div>
          <div></div>
        </S.Hamburguer>
      </S.HamburguerContainer>
      <S.Overlay isopen={isOpen}></S.Overlay>
    </S.NavContainer>
  )
}

export default NavBar
