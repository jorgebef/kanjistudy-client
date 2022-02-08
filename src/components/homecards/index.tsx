import WaveRow from '../WaveRow'
import Button from './Button'
import Card from './Card'
import * as S from './styles'

const HomeCards = () => {
  return (
    <WaveRow color='red'>
      <S.CardWrapper>
        <Card title='KANA' path='/kana' button='REVIEW KANA'>
          test
        </Card>
        <Card title='JLPT N5 KANJI' path='/quiz' button='TAKE QUIZ'>
          Learn JLPT N5 Kanji
          <S.Scrolling>
            <p>九 書 中 聞 高 子 下 校 前 南 食 山</p>
            <p>九 書 中 聞 高 子 下 校 前 南 食 山</p>
          </S.Scrolling>
        </Card>
        <Card title='ABOUT' path='/about' button='ABOUT'>
          About this project
        </Card>
      </S.CardWrapper>
    </WaveRow>
  )
}

export default HomeCards
