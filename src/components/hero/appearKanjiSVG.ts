import styled, { css } from 'styled-components'
import { ReactComponent as Kanjisvg } from '../../assets/kanjiWoBenkyousuru.svg'

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
  --animation: appear 1s ease forwards, translate 0.6s ease forwards;

  path {
    opacity: 0;
    transform: translateY(-2rem);
  }
  path:nth-child(2) {
    animation: var(--animation);
    animation-delay: 0s;
  }
  path:nth-child(3) {
    animation: var(--animation);
    animation-delay: 0.2s;
  }
  path:nth-child(1) {
    animation: var(--animation);
    animation-delay: 0.4s;
  }
  path:nth-child(7) {
    animation: var(--animation);
    animation-delay: 0.6s;
  }
  path:nth-child(6) {
    animation: var(--animation);
    animation-delay: 0.8s;
  }
  path:nth-child(5) {
    animation: var(--animation);
    animation-delay: 1s;
  }
  path:nth-child(4) {
    animation: var(--animation);
    animation-delay: 1.2s;
  }
`

const FadeInKanji = styled(Kanjisvg)`
  align-self: center;
  max-height: 50vh;

  @media (max-width: ${p => p.theme.mediaMd}) {
    /* width: 30rem; */
    /* height: 15rem; */
  }

  @media (max-width: ${p => p.theme.mediaSm}) {
    /* width: 100%; */
    /* height: 100%; */
  }

  ${style}

  @keyframes appear {
    to {
      opacity: 1;
    }
  }
  @keyframes translate {
    to {
      transform: translateY(0);
    }
  }
`

export default FadeInKanji
