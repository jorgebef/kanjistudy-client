import { AOStranslateL, AOStranslateR } from '../common/AOSImage.style'
import styled from 'styled-components'


export const HeroWrapper = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  height: 75vh;
  background-repeat: no-repeat;
  background-size: cover;
  /* margin-bottom: -5rem; */
  padding: ${p => p.theme.compPadLg};
  overflow: hidden;
`

export const HeroWrapperB = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 75vh;
  background-repeat: no-repeat;
  background-size: cover;
  /* margin-bottom: -5rem; */
  overflow: hidden;
  padding: ${p => p.theme.compPadLg};
`

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  left: 10rem;
  align-self: center;
  justify-items: center;
  justify-content: center;
  border-radius: 50%;
  height: 30rem;
  width: 30rem;
  background-color: ${p => p.theme.red + 'd9'};
  transition: all ${p => p.theme.transition};

  @media (max-width: ${p => p.theme.mediaMd}) {
    left: 5rem;
    height: 25rem;
    width: 25rem;
  }

  @media (max-width: ${p => p.theme.mediaSm}) {
    position: unset;
    height: 20rem;
    width: 20rem;
  }
`

interface ImgProps {
  bgImg?: string
}

export const ImgRight = styled(AOStranslateR)<ImgProps>`
  display: flex;
  z-index: -9;
  position: absolute;
  bottom: 0;
  height: 100%;
  width: 50%;
  clip-path: polygon(25% 0, 100% 0, 100% 100%, 0% 100%);
  animation: appear 0.5s linear forwards;
  ${p => (p.bgImg ? `background-image: url(${p.bgImg})` : null)};

  @media (max-width: ${p => p.theme.mediaSm}) {
    height: 70%;
    clip-path: polygon(100% 0, 100% 0, 100% 100%, 0% 100%);
  }

  @keyframes appear {
    to {
      opacity: 1;
      right: 0;
    }
  }
`
