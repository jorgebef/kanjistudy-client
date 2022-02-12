import { useRef } from 'react'
import FadeInKanji from './appearKanjiSVG'
import useAppear from '../../utils/useAppear'
import { Title } from '../common/Title'
import * as S from './styles'

const Hero = () => {
  const imgRef = useRef(null)
  useAppear(imgRef)

  return (
    <S.HeroWrapper>
      <Title fontSize='lg'>KANJI STUDY</Title>
      <S.Separator></S.Separator>
      <FadeInKanji />
    </S.HeroWrapper>
  )
}

export default Hero
