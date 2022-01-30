import styled from 'styled-components'
import { AOStranslateL, AOStranslateR } from '../common/AOSImage'
import KanjiSVG from './kanjiSVG'
import toriGates from '../../assets/tori-gates.jpeg'
import sensoJi from '../../assets/senso-ji-good.jpg'
import { useRef } from 'react'
import useAppear from '../../utils/useAppear'
import { Title } from '../common/PageContainer'

interface HeroWrapperProps {
  bgImg?: string
}

const HeroWrapper = styled.div<HeroWrapperProps>`
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  height: 75vh;
  ${p => (p.bgImg ? `background-image: url(${p.bgImg})` : null)};
  background-repeat: no-repeat;
  background-size: cover;
  margin-bottom: -5rem;
  padding: ${p => p.theme.compPadLg};
  overflow: hidden;
`

const ImgLeft = styled(AOStranslateL)`
  position: absolute;
  /* left: 0; */
  /* height:100%; */
`
const ImgRight = styled(AOStranslateR)`
  display: flex;
  z-index: -9;
  position: absolute;
  bottom: 0;
  height: 100%;
  clip-path: polygon(57% 0, 100% 0, 100% 100%, 0% 100%);
  animation: appear 0.5s linear forwards;

  @media (max-width: ${p => p.theme.mediaSm}) {
    height: 70%;
    clip-path: polygon(99% 0, 100% 0, 100% 100%, 0% 100%);
  }

  @keyframes appear {
    to {
      opacity: 1;
      right: 0;
    }
  }
`

const Hero = () => {
  const imgRef = useRef(null)
  useAppear(imgRef)

  return (
    <HeroWrapper>
      <ImgRight>
        <img src={sensoJi} alt='Senso-ji' />
      </ImgRight>
      <KanjiSVG />
      <Title>Learn Kanji</Title>
    </HeroWrapper>
  )
}

export default Hero
