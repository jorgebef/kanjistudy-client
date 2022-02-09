import styled from 'styled-components'
import { Link, LinkProps } from 'react-router-dom'
import { Btn } from '../common/Button'

export const CardWrapper = styled.div`
  display: grid;
  gap: 4rem;
  width: 100%;
  padding: 0 ${p => p.theme.compPadLg};
  grid-template-columns: repeat(3, 1fr);
  max-width: ${p => p.theme.mediaMd};
  transition: all ${p => p.theme.transition};

  @media (max-width: ${p => p.theme.mediaMd}) {
    grid-template-columns: repeat(1, 1fr);
    padding: ${p => p.theme.compPadMd};
    place-items: center;
    /* gap: 2rem; */
  }
`

export const Pop = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  text-align: center;
  font-weight: 500;
  max-height: 0;
  opacity: 0;
  transition: inherit;
`

export const Scrolling = styled.div`
  z-index: 0;
  max-width: 100%;
  position: absolute;
  bottom: -1rem;
  opacity: 0;
  white-space: nowrap;
  transform: rotate(-3deg);
  transition: all ${p => p.theme.transitionL};

  & > p {
    font-size: 5rem;
    opacity: 0.2;
    font-weight: 900;
    color: ${p => p.theme.grey};
    display: inline-block;
    animation: marquee 10s linear infinite;
  }

  @keyframes marquee {
    0% {
      transform: translate(0, 0);
    }
    100% {
      transform: translate(-100%, 0);
    }
  }
`

export const HomeCard = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  padding: 3rem ${p => p.theme.compPadMd};
  align-items: center;
  justify-content: space-between;
  border-radius: ${p => p.theme.borderR};
  min-height: 15rem;
  text-decoration: none;
  overflow: hidden;
  color: ${p => p.theme.black};
  background-color: ${p => p.theme.white};
  transition: inherit;

  &:hover {
    /* width: 30rem; */
    /* box-shadow: rgb(10 10 10 / 15%) 0px 0.5rem 1rem 0px; */

    & ${Scrolling} {
      opacity: 1;
    }
  }

  & > h1 {
    font-size: 2rem;
    font-weight: 900;
    transition: inherit;
  }

  & > p {
    text-align: center;
    font-size: 1rem;
  }

  @media (max-width: ${p => p.theme.mediaMd}) {
    min-width: 16rem;
  }
`

export const Button = styled(Btn).attrs(() => ({
  as: Link,
}))<LinkProps>`
  position: relative;
  z-index: 1;
  margin-top: 1rem;
`
