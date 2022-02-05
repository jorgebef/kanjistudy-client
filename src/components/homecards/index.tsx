import * as S from './styles'

const HomeCards = () => {
  return (
    <>
      <S.WaveTop color='red' />
      <S.RowClipPath>
        <S.CardWrapper>
          <S.HomeCard>
            <h1>KANA</h1>
            <S.Pop>Learn hiragana and katakana</S.Pop>
            <S.Button to={'/kana'}>REVIEW KANA</S.Button>
          </S.HomeCard>
          <S.HomeCard>
            <h1>JLPT N5 KANJI</h1>
            <span>Learn JLPTN5 Kanji</span>
            <S.Scrolling>
              <p>九 書 中 聞 高 子 下 校 前 南 食 山</p>
              <p>九 書 中 聞 高 子 下 校 前 南 食 山</p>
            </S.Scrolling>
            <S.Button to={'/quiz'}>TAKE QUIZ</S.Button>
          </S.HomeCard>
          <S.HomeCard>
            HOME
            <S.Button to={'/about'}>ABOUT</S.Button>
          </S.HomeCard>
        </S.CardWrapper>
      </S.RowClipPath>
      <S.WaveBottom color='red' />
    </>
  )
}

export default HomeCards
