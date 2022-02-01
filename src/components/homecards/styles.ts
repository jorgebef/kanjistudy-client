import styled from 'styled-components'
import { Link, LinkProps } from 'react-router-dom'

export const RowClipPath = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 6rem 0;
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

export const CellWrapper = styled.div`
  display: grid;
  gap: 3rem;
  width: 100%;
  padding: 0 ${p => p.theme.compPadLg};
  max-width: ${p => p.theme.mediaLg};
  grid-template-columns: repeat(3, 1fr);
  max-width: ${p => p.theme.mediaMd};
  transition: all ${p => p.theme.transition};

  @media (max-width: ${p => p.theme.mediaMd}) {
    grid-template-columns: repeat(1, 1fr);
    padding: ${p => p.theme.compPadMd};
    gap: 2rem;
  }
`

export const HomeCell = styled.div.attrs(() => ({
  as: Link,
}))<LinkProps>`
  display: flex;
  flex-direction: column;
  padding: ${p => p.theme.compPadMd};
  justify-self: stretch;
  align-items: center;
  justify-content: center;
  border-radius: ${p => p.theme.borderR};
  min-height: 9rem;
  /* backdrop-filter: blur(10px); */
  align-items: center;
  text-decoration: none;
  overflow: hidden;
  color: ${p => p.theme.fg};
  background-color: ${p => p.theme.bg + '94'};
  transition: inherit;

  &:hover {
    background-color: ${p => p.theme.bg};
    box-shadow: rgb(10 10 10 / 15%) 0px 0.5rem 1rem 0px;
    border-radius: ${p => p.theme.buttonR};

    & > .pop {
      max-height: 6rem;
      opacity: 1;
    }
  }

  & > h1 {
    font-weight: 900;
    transition: inherit;
  }

  & > .pop {
    width: 100%;
    text-align: center;
    margin-top: 0.5rem;
    font-weight: 500;
    max-height: 0;
    opacity: 0;
    transition: inherit;
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
