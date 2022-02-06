import WaveRow from '../WaveRow'
import Button from './Button'
import Card from './Card'
import * as S from './styles'

const HomeCards = () => {
  return (
    <WaveRow color='red'>
      <S.RowClipPath>
        <S.CardWrapper>
          <Card title='KANA'>
            test
            <div>KEKW</div>
            <Button link='/kana'>REVIEW KANA</Button>
          </Card>
          <S.HomeCard>
            <h1>JLPT N5 KANJI</h1>
            <span>Learn JLPTN5 Kanji</span>
            <S.Scrolling>
              <p>九 書 中 聞 高 子 下 校 前 南 食 山</p>
              <p>九 書 中 聞 高 子 下 校 前 南 食 山</p>
            </S.Scrolling>
            <Button link='/quiz'>TAKE QUIZ</Button>
          </S.HomeCard>
          <S.HomeCard>
            HOME
            <Button link='/about'>ABOUT</Button>
          </S.HomeCard>
        </S.CardWrapper>
      </S.RowClipPath>
    </WaveRow>
  )
}

export default HomeCards
