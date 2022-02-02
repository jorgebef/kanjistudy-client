import { useRef } from 'react'
import KanjiSVG from './kanjiSVG'
import sensoJi from '../../assets/senso-ji-good.jpg'
import useAppear from '../../utils/useAppear'
import { Title } from '../common/PageContainer'
import * as S from './styles'

const Hero = () => {
  const imgRef = useRef(null)
  useAppear(imgRef)

  // return (
  //   <S.HeroWrapper>
  //     <S.ImgRight>
  //       <img src={sensoJi} alt='Senso-ji' />
  //     </S.ImgRight>
  //     <S.TextContainer>
  //       <KanjiSVG />
  //       <Title color='white'>Kanji Study</Title>
  //     </S.TextContainer>
  //   </S.HeroWrapper>
  // )

  return (
    <S.HeroWrapperB>
      <S.ImgRight bgImg={sensoJi}>
      </S.ImgRight>
    </S.HeroWrapperB>
  )
}

export default Hero
