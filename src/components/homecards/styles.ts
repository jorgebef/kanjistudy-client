import styled from 'styled-components'
import { Link, LinkProps } from 'react-router-dom'
import { Btn } from '../common/Button'

export const RowClipPath = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  width: 100%;
  box-sizing: content-box;
  padding: 2rem 0;
  justify-self: center;
  align-self: center;
  background-color: ${p => p.theme.red};

  @media (min-width: ${p => p.theme.mediaMd}) {
    /* clip-path: polygon(0 0%, 100% 10%, 100% 100%, 0 90%); */
  }
  @media (min-width: ${p => p.theme.mediaLg}) {
    /* clip-path: polygon(0 0%, 100% 15%, 100% 100%, 0 85%); */
  }
`

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
  overflow: hidden;
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
  /* justify-self: stretch; */
  align-items: center;
  justify-content: space-between;
  border-radius: ${p => p.theme.borderR};
  min-height: 15rem;
  /* width: 20rem; */
  text-decoration: none;
  overflow: hidden;
  color: ${p => p.theme.black};
  background-color: ${p => p.theme.white};
  /* background-color: ${p => p.theme.red}; */
  transition: inherit;

  &:hover {
    /* width: 30rem; */
    /* box-shadow: rgb(10 10 10 / 15%) 0px 0.5rem 1rem 0px; */

    & ${Scrolling} {
      opacity: 1;
    }
  }

  & > h1 {
    font-weight: 900;
    transition: inherit;
  }

  & > span {
    font-size: 1.1rem;
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
