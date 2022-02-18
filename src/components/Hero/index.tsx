import { useRef } from 'react'
import FadeInKanji from './appearKanjiSVG'
import useAppear from '../../hooks/useAppear'
import { Title } from '../common/Title'
import * as S from './styles'
import ScrollIndicator from './ScrollIndicator'

const Hero = () => {
  const imgRef = useRef(null)
  useAppear(imgRef)

  return (
    <S.HeroWrapper>
      <Title fontSize='lg'>KANJI STUDY</Title>
      <S.Separator></S.Separator>
      <FadeInKanji />
      <ScrollIndicator />
    </S.HeroWrapper>
  )
}

export default Hero
