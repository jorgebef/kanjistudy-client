import React from 'react'
import styled, { css } from 'styled-components'

export const Container: React.FC = styled.div`
  display: flex;
  flex-direction: column;
  min-height: calc(100vh - ${p => p.theme.footH});
  /* padding-top: ${p => p.theme.navH + 'rem'}; */

  & > div:first-child {
    /* padding-top: ${p => p.theme.navH + 'rem'}; */
    padding-top: calc(${p => p.theme.navH + 'rem'} + 5vw);
  }

  & > div:last-child {
    padding-bottom: 5rem;
  }
`

interface TitleProps {
  color?: string
}

export const Title = styled.p<TitleProps>`
  text-align: center;
  align-self: center;
  font-size: 2.5rem;
  color: ${p => (p.color ? p.color : p.theme.black)};
  font-weight: 900;
`

export const TopRow: React.FC = styled.div.attrs(() => ({
  className: 'topRow',
}))`
  display: flex;
  flex-direction: column;
  /* +++ Padding-top is set in the parent container +++ */
  padding: calc(${p => p.theme.navH + 'rem'} + 5vw) ${p => p.theme.sidePad} 5vw;
  /* background: linear-gradient( */
  /*   180deg, */
  /*   ${p => p.theme.red} 0%, */
  /*   ${p => p.theme.black} 100% */
  /* ); */
  background-color: ${p => p.theme.white};
  background-clip: padding-box;
  overflow: hidden;
`

export interface RowProps {
  color?: string
}

export const Row = styled.div<RowProps>`
  display: flex;
  width: 100%;
  position: relative;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  background-color: ${(p: any) => (p.theme[p.color] || null)};
  padding: 2rem 0;
`

export const Grid = styled.div`
  display: grid;
  gap: 2rem;
  padding: 2rem 3rem;

  @media (min-width: ${p => p.theme.mediaMd}) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (min-width: ${p => p.theme.mediaLg}) {
    grid-template-columns: repeat(3, 1fr);
  }
`

export const Cell = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1.5rem;
  justify-self: stretch;
  align-items: start;
  justify-content: center;
`

export const Circle = styled.div`
  position: absolute;
  --dimensions: 80vw;
  height: var(--dimensions);
  width: var(--dimensions);
  border-radius: 50%;
  left: calc(var(--dimensions) / -2);
  top: calc(var(--dimensions) / -2);
  background-color: ${p => p.theme.red};
`

interface PosProps {
  size: number
  top?: number
  right?: number
  bottom?: number
  left?: number
}

function createAnimation() {
  let styles = ''
  for (let i = 1; i <= 5; i++) {
    const e = 4 // the constant to update the difference between start and end
    styles += `
    & span:nth-child(${i}) {
      animation: pulse${i} 4s ease-in-out infinite;
    }
    @keyframes pulse${i} {
      ${i * e}% {
        font-size: var(--size);
      }
      ${i * e + 2 * e}% {
        font-size: calc(var(--size) * 1.3);
      }
      ${i * e + 4 * e}% {
        font-size: var(--size);
      }
    }
    `
  }
  return css`
    ${styles}
  `
}

export const VertJPText = styled.p.attrs(() => ({
  lang: 'ja',
}))<PosProps>`
  --size: ${p => p.size + 'rem'};
  position: relative;
  width: 0;
  height: 0;
  top: ${p => p.top + 'vw'};
  right: ${p => p.right + 'vw'};
  bottom: ${p => p.bottom + 'vw'};
  left: ${p => p.left + 'vw'};
  font-size: var(--size);
  font-weight: 600;
  color: ${p => p.theme.black};
  -webkit-writing-mode: vertical-rl;
  -moz-writing-mode: vertical-rl;
  -ms-writing-mode: vertical-rl;
  writing-mode: vertical-rl;
  white-space: nowrap;
  transition: all ease-in-out 0.25s;
  line-height: 1.8rem; /* keep in mind this is vertical text, so this is the width */

  ${createAnimation()}
`
