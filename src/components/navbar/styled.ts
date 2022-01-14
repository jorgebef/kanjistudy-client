import { Link, NavLink } from 'react-router-dom'
import styled from 'styled-components'

interface NavContainerProps {
  isopen?: boolean
  scrollpos: number
}

export const NavContainer = styled.nav<NavContainerProps>`
  display: flex;
  position: fixed;
  z-index: 99;
  /* height: ${p =>
    (p.scrollpos === 0 ? p.theme.navH : p.theme.navHS) + 'rem'}; */
  height: ${p => p.theme.navH + 'rem'};
  top: 0;
  width: 100%;
  justify-content: space-between;
  background-color: ${p => (p.scrollpos === 0 ? null : p.theme.bg)};
  box-shadow: ${p =>
    p.scrollpos === 0 ? null : 'rgb(10 10 10 / 15%) 0px 0.5rem 1rem 0px'};
  align-items: stretch;
  transition: all ease-in-out 0.25s;

  @media (max-width: ${p => p.theme.mediaSm}) {
    flex-direction: column;
    background-color: ${p =>
      p.scrollpos !== 0 || p.isopen ? p.theme.bg : null};
  }
`

export const LogoContainer = styled.div`
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

export const Logo = styled(Link)`
  align-self: center;
  text-decoration: none;
  font-weight: 800;
  cursor: pointer;
  font-size: 1.4rem;
  color: ${p => p.theme.fg};
`

interface MenuProps {
  isopen: boolean
  scrollpos?: number
}

export const HamburguerContainer = styled.div<MenuProps>`
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

export const Hamburguer = styled.div<MenuProps>`
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

export const Menu = styled.ul<MenuProps>`
  /* --navH: ${p =>
    (p.scrollpos === 0 ? p.theme.navH : p.theme.navHS) + 'rem'}; */
  --navH: ${p => p.theme.navH + 'rem'};
  display: flex;
  flex-grow: 1;
  padding: 0 15vw 0 0;
  justify-content: flex-end;
  transition: all ease-in-out 0.25s;

  @media (max-width: ${p => p.theme.mediaSm}) {
    display: flex;
    background-color: ${p => p.theme.bg};
    flex-direction: column;
    margin-top: var(--navH);
    width: 100%;
    height: ${p => (p.isopen ? '20rem' : '0')};
    /* box-shadow: rgb(10 10 10 / 15%) 0px 0.5rem 1rem 0px; */
  }
`

export const MenuLink = styled(NavLink)<MenuProps>`
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
    visibility: ${p => (p.isopen ? 'visible' : 'hidden')};
    opacity: ${p => (p.isopen ? '0.6' : '0')};
    padding: 1.25rem 0;
    margin: 0;
  }
`

export const MenuLinkName = styled.span`
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

export const Overlay = styled.div<MenuProps>`
  visibility: hidden;

  @media (max-width: ${p => p.theme.mediaSm}) {
    display: block;
    visibility: ${p => (p.isopen ? 'visible' : 'hidden')};
    position: fixed;
    background-color: #000;
    opacity: ${p => (p.isopen ? 0.35 : 0)};
    width: 100vh;
    height: 100vh;
    margin-top: ${p => p.theme.navH + 'rem'};
    z-index: -1;
    transition: all 0.25s ease-in-out;
  }
`
