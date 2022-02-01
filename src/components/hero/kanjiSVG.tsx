import { useEffect, useRef, useState } from 'react'
import styled, { css } from 'styled-components'
import { ReactComponent as Kanjisvg } from './kanji.svg'

// let style = ''
// const svgPath = document.querySelectorAll('path')
// svgPath.forEach((s, i) => {
//   const len = Number(s.getTotalLength().toFixed(0)) + 1
//   console.log(`Path ${i} has length ${len}px`)
//   style += `
// path:nth-child(${i + 1}) {
// stroke-dasharray: ${len}px;
// stroke-dashoffset: ${len}px;
// animation: draw-animation 0.5s linear forwards;
// animation-delay: ${i * 0.5}s;
// }
// `
//   console.log(style)
// })

const style = css`
  path:nth-child(1) {
    stroke-dasharray: 369px;
    stroke-dashoffset: 369px;
    animation: draw-animation 1s linear forwards;
    animation-delay: 0s;
  }

  path:nth-child(2) {
    stroke-dasharray: 37px;
    stroke-dashoffset: 37px;
    animation: draw-animation 0.5s linear forwards;
    animation-delay: 0s;
  }

  path:nth-child(3) {
    stroke-dasharray: 236px;
    stroke-dashoffset: 236px;
    animation: draw-animation 1s linear forwards;
    animation-delay: 1s;
  }

  path:nth-child(4) {
    stroke-dasharray: 50px;
    stroke-dashoffset: 50px;
    animation: draw-animation 0.5s linear forwards;
    animation-delay: 1.5s;
  }

  path:nth-child(5) {
    stroke-dasharray: 50px;
    stroke-dashoffset: 50px;
    animation: draw-animation 0.5s linear forwards;
    animation-delay: 2s;
  }

  path:nth-child(6) {
    stroke-dasharray: 175px;
    stroke-dashoffset: 175px;
    animation: draw-animation 0.5s linear forwards;
    animation-delay: 1.5s;
  }

  path:nth-child(7) {
    stroke-dasharray: 176px;
    stroke-dashoffset: 176px;
    animation: draw-animation 0.5s linear forwards;
    animation-delay: 0s;
  }

  path:nth-child(8) {
    stroke-dasharray: 108px;
    stroke-dashoffset: 108px;
    animation: draw-animation 0.5s linear forwards;
    animation-delay: 1.5s;
  }

  path:nth-child(9) {
    stroke-dasharray: 222px;
    stroke-dashoffset: 222px;
    animation: draw-animation 1s linear forwards;
    animation-delay: 2s;
  }

  path:nth-child(10) {
    stroke-dasharray: 92px;
    stroke-dashoffset: 92px;
    animation: draw-animation 0.5s linear forwards;
    animation-delay: 2.5s;
  }

  path:nth-child(11) {
    stroke-dasharray: 47px;
    stroke-dashoffset: 47px;
    animation: draw-animation 0.5s linear forwards;
    animation-delay: 2s;
  }

  path:nth-child(12) {
    stroke-dasharray: 328px;
    stroke-dashoffset: 328px;
    animation: draw-animation 1s linear forwards;
    animation-delay: 2.5s;
  }

  path:nth-child(13) {
    stroke-dasharray: 363px;
    stroke-dashoffset: 363px;
    animation: draw-animation 1.5s linear forwards;
    animation-delay: 0s;
  }

  path:nth-child(14) {
    stroke-dasharray: 156px;
    stroke-dashoffset: 156px;
    animation: draw-animation 0.5s linear forwards;
    animation-delay: 1.5s;
  }

  path:nth-child(15) {
    stroke-dasharray: 39px;
    stroke-dashoffset: 39px;
    animation: draw-animation 0.5s linear forwards;
    animation-delay: 2s;
  }

  path:nth-child(16) {
    stroke-dasharray: 94px;
    stroke-dashoffset: 94px;
    animation: draw-animation 0.5s linear forwards;
    animation-delay: 2.5s;
  }

  path:nth-child(17) {
    stroke-dasharray: 130px;
    stroke-dashoffset: 130px;
    animation: draw-animation 0.5s linear forwards;
    animation-delay: 0s;
  }

  path:nth-child(18) {
    stroke-dasharray: 111px;
    stroke-dashoffset: 111px;
    animation: draw-animation 0.5s linear forwards;
    animation-delay: 2.5s;
  }

  path:nth-child(19) {
    stroke-dasharray: 21px;
    stroke-dashoffset: 21px;
    animation: draw-animation 0.5s linear forwards;
    animation-delay: 2s;
  }
`

const SVGDraw = styled.div`
  align-self: center;

  & svg {
    width: 35rem;
    height: 17.5rem;

    @media (max-width: ${p => p.theme.mediaMd}) {
    width: 30rem;
    height: 15rem;
    }

    @media (max-width: ${p => p.theme.mediaSm}) {
      width: 100%;
      height: 100%;
    }

    path {
      stroke: ${p => p.theme.grey};
      stroke-linecap: square;
    }
  }

  ${style}

  @keyframes draw-animation {
    to {
      stroke-dashoffset: 0;
      stroke: ${p => p.theme.black};
    }
  }
`

const KanjiSVG: React.FC = () => {
  return (
    <SVGDraw>
      <Kanjisvg />
    </SVGDraw>
  )
}

export default KanjiSVG
