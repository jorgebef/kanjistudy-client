import styled from 'styled-components'
import { Link, LinkProps } from 'react-router-dom'
import { Cell, Grid } from './PageContainer'

export const RowGradient = styled(Grid)`
  padding: 8rem ${p => p.theme.sidePad};
  justify-self: center;
  align-self: center;
  max-width: 90rem;
  background: linear-gradient(
    45deg,
    ${p => p.theme.lavender} 10%,
    ${p => p.theme.violet} 90%
  );
  clip-path: polygon(0 8%, 100% 0, 100% 92%, 0 100%);

  @media (min-width: ${p => p.theme.mediaMd}) {
    clip-path: polygon(0 10%, 100% 0, 100% 90%, 0 100%);
  }
  @media (min-width: ${p => p.theme.mediaLg}) {
    clip-path: polygon(0 15%, 100% 0, 100% 85%, 0 100%);
  }
`

export const JLPTn5 = styled.div.attrs(() => ({
  as: Link,
}))<LinkProps>`
  display: flex;
  flex-direction: column;
  padding: 1.5rem;
  justify-self: stretch;
  align-items: start;
  justify-content: center;
  border-radius: 0.5rem;
  min-height: 9rem;
  box-shadow: rgb(10 10 10 / 15%) 0px 0.5rem 1rem 0px;
  transition: all ease-in-out 0.25s;
  backdrop-filter: blur(10px);
  align-items: center;
  text-decoration: none;
  overflow: hidden;
  color: ${p => p.theme.fg};
  background-color: ${p => p.theme.bg + '24'};

  &:hover {
    background-color: ${p => p.theme.bg + 'aa'};

    & > .pop {
      max-height: 6rem;
      opacity: 1;
    }
  }

  & > h1 {
    font-weight: 900;
    transition: all ease-in-out 0.35s;
  }

  & > .pop {
    width: 100%;
    text-align: center;
    margin-top: 0.5rem;
    font-weight: 500;
    max-height: 0;
    opacity: 0;
    transition: all ease-in-out 0.35s;
  }

  .scrolling {
    --scrollH: 1rem;
    margin-top: 1rem;
    max-width: 100%;
    max-height: var(--scrollH);
    white-space: nowrap;
    /* transform: rotate(-3deg); */
  }

  .scrolling > p {
    margin-top: -1rem;
    font-size: 4rem;
    font-weight: 900;
    color: ${p => p.theme.fg + '45'};
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
