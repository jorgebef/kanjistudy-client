import WaveRow from '../WaveRow'
import Card from './Card'
import * as S from './styles'

const HomeCards = () => {
  return (
    <WaveRow color='red'>
      <S.CardWrapper>
        <Card title='Kana' path='/kana' button='REVIEW KANA'>
          Review Hiragana or Katakana in the table provided.
          <br />
          Useful when <i>(like myself)</i> you tend to occasionally forget them or
          become slightly confused.
        </Card>
        <Card title='Kanji' path='/kanji' button='REVIEW KANJI'>
          Review Kanji from the JLPT level of your choice.
          <br />
          You are able to combine whichever levels you choose.
        </Card>
        <Card title='Test yourself' path='/quiz' button='TAKE QUIZ'>
          Take a quiz and test yourself!
          <br />
          You can choose the number of questions, possible answers and the
          levels which you will be tested on.
          <S.Scrolling>
            <p>九 書 中 聞 高 子 下 校 前 南 食 山</p>
            <p>九 書 中 聞 高 子 下 校 前 南 食 山</p>
          </S.Scrolling>
        </Card>
      </S.CardWrapper>
    </WaveRow>
  )
}

export default HomeCards
