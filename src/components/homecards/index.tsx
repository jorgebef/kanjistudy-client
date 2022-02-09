import WaveRow from '../WaveRow'
import Button from './Button'
import Card from './Card'
import * as S from './styles'

const HomeCards = () => {
  return (
    <WaveRow color='red'>
      <S.CardWrapper>
        <Card title='Hiragana / Katakana' path='/kana' button='REVIEW KANA'>
          Review Hiragana or Katakana in the table provided.
          <br/>
          <br/>
          Useful when <b><i>(like me)</i></b> you tend to sometimes
          forget them or become slightly confused.
        </Card>
        <Card title='Test yourself' path='/quiz' button='TAKE QUIZ'>
          Take a quiz and test yourself!
          <br />
          <br />
          You can choose the number of questions, possible answers and the
          levels which you will be tested on.
          <S.Scrolling>
            <p>九 書 中 聞 高 子 下 校 前 南 食 山</p>
            <p>九 書 中 聞 高 子 下 校 前 南 食 山</p>
          </S.Scrolling>
        </Card>
        <Card title='Kanji' path='/kanji' button='REVIEW KANJI'>
          Review Kanji from the JLPT level of your choice.
          <br/>
          <br/>
          You are able to combine whichever levels you choose.
        </Card>
      </S.CardWrapper>
    </WaveRow>
  )
}

export default HomeCards
