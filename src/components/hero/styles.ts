import { AOStranslateL, AOStranslateR } from '../common/AOSImage.style'
import styled from 'styled-components'
import { Title } from '../common/PageContainer'

export const HeroWrapper = styled.div`
  display: flex;
  position: relative;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  height: 75vh;
  /* height: 860rem; */
  background-repeat: no-repeat;
  background-size: cover;
  /* margin-bottom: -5rem; */
  padding: ${p => p.theme.compPadLg};
  overflow: hidden;
`

export const HeroWrapperB = styled.div`
  display: flex;
  position: relative;
  flex-direction: row;
  gap: 5rem;
  align-items: center;
  justify-content: center;
  min-height: 75vh;
  background-repeat: no-repeat;
  background-size: cover;
  /* margin-bottom: -5rem; */
  overflow: hidden;
  padding: ${p => p.theme.compPadLg};
  /* background-color:green; */

  @media (max-width: ${p => p.theme.mediaSm}) {
    gap: 2rem;
    flex-direction: column-reverse;
  }
`

export const HeroTitle = styled(Title)`
  white-space: nowrap;

  @media (max-width: ${p => p.theme.mediaSm}) {
    /* position: absolute; */
    /* visibility: hidden; */
  }
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

export const Separator = styled.div`
  height: 10rem;
  width: 0.15rem;
  background-color: ${p => p.theme.red};

  @media (max-width: ${p => p.theme.mediaSm}) {
    /* position: absolute; */
    height: 0.15rem;
    width: 10rem;
  }
`

export const HeroText = styled.span`
  --fontHeight: 8rem;
  --shadowSize: 0.2rem;
  --shadowColor: ${p => p.theme.white};
  font-family: 'Yuji Boku', serif;
  font-size: var(--fontHeight);
  white-space: nowrap;
  line-height: calc(var(--fontHeight) + 1rem);
  text-align: center;
  /* background-color:green; */
  writing-mode: vertical-rl;
  /* text-shadow: calc(-1 * var(--shadowSize)) calc(-1 * var(--shadowSize)) 0 */
  /*     var(--shadowColor), */
  /*   0 calc(-1 * var(--shadowSize)) 0 var(--shadowColor), */
  /*   var(--shadowSize) calc(-1 * var(--shadowSize)) 0 var(--shadowColor), */
  /*   var(--shadowSize) 0 0 var(--shadowColor), */
  /*   var(--shadowSize) var(--shadowSize) 0 var(--shadowColor), */
  /*   0 var(--shadowSize) 0 var(--shadowColor), */
  /*   calc(-1 * var(--shadowSize)) var(--shadowSize) 0 var(--shadowColor), */
  /*   calc(-1 * var(--shadowSize)) 0 0 var(--shadowColor); */

  @media (max-width: ${p => p.theme.mediaSm}) {
    --fontHeight: 5rem;
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
  background-size: cover;

  @media (max-width: ${p => p.theme.mediaSm}) {
    height: 100%;
    width: 100%;
    clip-path: polygon(100% 0, 100% 0, 100% 100%, 0% 100%);
  }

  @keyframes appear {
    to {
      opacity: 1;
      right: 0;
    }
  }
`

export const Image = styled.img`
  height: 100%;
  height: 100%;
  margin-left: -3rem;

  @media (max-width: ${p => p.theme.mediaMd}) {
    margin-left: -4rem;
  }
  @media (max-width: ${p => p.theme.mediaSm}) {
    margin-left: -5rem;
  }
`
