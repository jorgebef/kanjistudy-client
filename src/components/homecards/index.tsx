import * as S from './styles'

const HomeCards = () => {
  return (
    <S.RowClipPath>
      <S.CellWrapper>
        <S.HomeCell to={'/kana'}>
          <h1>KANA</h1>
          <p className='pop'>Learn hiragana and katakana</p>
        </S.HomeCell>
        <S.HomeCell to={'/kanji'}>
          <h1>JLPT N5 KANJI</h1>
          <div className='pop'>
            <div>Learn JLPTN5 Kanji</div>
            <div className='scrolling'>
              <p>九 書 中 聞 高 子 下 校 前 南 食 山</p>
              <p>九 書 中 聞 高 子 下 校 前 南 食 山</p>
            </div>
          </div>
        </S.HomeCell>
        <S.HomeCell to={'/about'}>HOME</S.HomeCell>
      </S.CellWrapper>
    </S.RowClipPath>
  )
}

export default HomeCards
