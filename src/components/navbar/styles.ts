import { Link, NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { Btn } from '../common/Button.styles'

interface NavContainerProps {
  isopen?: boolean
  scrollpos: number
}

export const NavContainer = styled.nav<NavContainerProps>`
  display: flex;
  position: fixed;
  z-index: 99;
  height: ${p => p.theme.navH + 'rem'};
  top: 0;
  width: 100%;
  padding: 0 8rem;
  box-sizing: border-box;
  justify-content: space-between;
  background-color: ${p => p.theme.white};
  /* background-color: ${p =>
    p.scrollpos === 0 ? (p.isopen ? p.theme.white : null) : p.theme.white}; */
  /* box-shadow: ${p =>
    p.scrollpos === 0 ? null : 'rgb(10 10 10 / 15%) 0px 0.5rem 1rem 0px'}; */
  align-items: stretch;
  transition: all ease-in-out 0.25s;

  @media (max-width: ${p => p.theme.mediaMd}) {
    padding: 0 3rem;
  }
`

export const LogoContainer = styled.div`
  display: flex;
  height: inherit;
  text-decoration: none;
  align-self: flex-start;
  align-items: center;
  /* justify-content:center; */
  white-space: nowrap;

  @media (max-width: ${p => p.theme.mediaMd}) {
    /* align-self:center; */
    /* position: absolute; */
    /* top: 0rem; */
    /* left: 0rem; */
    /* padding-left: 4rem; */
  }
`

export const Logo = styled(Link)`
  text-decoration: none;
  font-weight: 800;
  cursor: pointer;
  font-size: 1.4rem;
  color: ${p => p.theme.black};
`

interface MenuProps {
  isopen: boolean
  scrollpos?: number
}

export const Menu = styled.ul<MenuProps>`
  --navH: ${p => p.theme.navH + 'rem'};
  display: flex;
  gap: 3rem;
  padding: 0 2rem;
  transition: all ${p => p.theme.transition};
  overflow: hidden;

  @media (max-width: ${p => p.theme.mediaMd}) {
    /* display: flex; */
    visibility: ${p => (p.isopen ? 'visible' : 'hidden')};
    position: absolute;
    gap: 3rem;
    left: 0;
    box-sizing: content-box;
    flex-direction: column;
    margin-top: var(--navH);
    width: 100%;
    padding: 2rem 0;
    background-color: ${p => p.theme.white};
    max-height: ${p => (p.isopen ? '30rem' : 0)};
    /* box-shadow: rgb(10 10 10 / 15%) 0px 0.5rem 1rem 0px; */
  }
`

export const MenuLink = styled(NavLink)<MenuProps>`
  display: flex;
  color: ${p => p.theme.black};
  cursor: pointer;
  text-decoration: none;
  font-size: 1.2rem;
  font-weight: 600;
  text-align: center;
  align-self: stretch;
  transition: all ${p => p.theme.transition};
  opacity: 0.8;

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

  @media (max-width: ${p => p.theme.mediaMd}) {
    display: flex;
    justify-content: center;
    visibility: ${p => (p.isopen ? 'visible' : 'hidden')};
    opacity: ${p => (p.isopen ? '0.6' : '0')};
    margin: 0;

    & span::after {
      visibility: ${p => (p.isopen ? 'visible' : 'hidden')};
    }
  }
`

export const MenuLinkName = styled.span`
  & {
    align-self: center;
  }

  &::after {
    --ulineH: 0.2rem;
    content: '';
    display: block;
    height: var(--ulineH);
    left: -10px;
    width: 0;
    margin-left: -10%;
    /* border-radius: var(--ulineH); */
    background-color: ${p => p.theme.red};
    transition: all ${p => p.theme.transitionS};
  }
`

export const SignInBtn = styled(Btn)``

export const Overlay = styled.div<MenuProps>`
  display: none;
  visibility: hidden;

  @media (max-width: ${p => p.theme.mediaMd}) {
    display: block;
    position: fixed;
    visibility: ${p => (p.isopen ? 'visible' : 'hidden')};
    left: 0;
    background-color: #000;
    opacity: ${p => (p.isopen ? 0.35 : 0)};
    width: 100%;
    height: 100vh;
    margin-top: ${p => p.theme.navH + 'rem'};
    z-index: -1;
    transition: all ${p => p.theme.transitionL};
  }
`

export const HamburguerContainer = styled.div<MenuProps>`
  --divH: 4px;

  display: none;
  height: inherit;
  color: ${p => p.theme.black};
  justify-content: center;

  @media (max-width: ${p => p.theme.mediaMd}) {
    display: flex;
    flex-direction: column;
  }
`

export const Hamburguer = styled.div<MenuProps>`
  cursor: pointer;
  padding: 0;
  margin: 0;

  & > div {
    width: calc(var(--divH) * 9);
    height: var(--divH);
    border-radius: var(--divH);
    justify-self: center;
    background-color: ${p => p.theme.black};
    margin: var(--divH) 0;
    transition: all ease-in-out;
    -webkit-transition: all ease-in-out;
    transition-duration: 250ms;
    -webkit-transition-duration: 250ms;
  }

  & > div:nth-child(1) {
    transform: ${p => (p.isopen ? 'rotate(45deg)' : null)};
    -webkit-transform: ${p => (p.isopen ? 'rotate(45deg)' : null)};
    margin: ${p => (p.isopen ? '15px 0 calc(var(--divH)*-1) 0' : null)};
  }
  & > div:nth-child(2) {
    opacity: ${p => (p.isopen ? 0 : 1)};
    height: ${p => (p.isopen ? 0 : null)};
    margin: ${p => (p.isopen ? 0 : null)};
  }
  & > div:nth-child(3) {
    transform: ${p => (p.isopen ? 'rotate(-45deg)' : null)};
    -webkit-transform: ${p => (p.isopen ? 'rotate(-45deg)' : null)};
    margin: ${p => (p.isopen ? '0 0 15px 0' : null)};
  }
`
