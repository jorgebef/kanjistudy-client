// import { KanjiType } from '../../utils/kanjiData'
import { Dispatch, SetStateAction, useEffect, useState } from 'react'
import singleKanjiFetch from '../../middleware/singleKanji'
import Loading from '../loading'
import * as S from './styles'

interface PopupProps {
  visible: boolean
  setVisible: Dispatch<SetStateAction<boolean>>
  kanji: string|undefined
}

const PopupKanji: React.FC<PopupProps> = ({ visible, setVisible, kanji }) => {
  const [kanjialive, setKanjialive] = useState<any>(null)

  useEffect(() => {
    setKanjialive(null)
    // kanjiFetch(setKanjialive, kanji)
    singleKanjiFetch(kanji).then(r => setKanjialive(r))
  }, [kanji])

  const toggleVisible = () => {
    setVisible(!visible)
  }

  return (
    <S.PopupContainer vis={visible}>
      <S.Overlay onClick={toggleVisible}></S.Overlay>
      <S.Popup vis={visible} kanjiset={kanjialive ? true : false}>
        <S.CloseButton
          kanjiset={kanjialive ? true : false}
          onClick={toggleVisible}
        >
          <div></div>
          <div></div>
        </S.CloseButton>
        {kanjialive ? (
          <>
            <div className='kanji'>{kanjialive?.kanji?.character}</div>
            <div className='meaning'>
              Meanings: <b>{kanjialive?.kanji?.meaning?.english}</b>
            </div>
            <div className='yomis'>
              Kunyomi: <b>{kanjialive?.kanji?.kunyomi?.hiragana}</b>
              <br />
              Onyomi: <b>{kanjialive?.kanji?.onyomi?.katakana}</b>
            </div>
            <div className='exampleContainer'>
              Examples:
              <br />
              {kanjialive?.examples?.map((e: any, i: number) => {
                return (
                  <div key={i} className='example'>
                    <b>{e.japanese}</b> <br />
                    <i>{e.meaning.english}</i> <br />
                  </div>
                )
              })}
            </div>
          </>
        ) : (
          <Loading />
        )}
      </S.Popup>
    </S.PopupContainer>
  )
}

export default PopupKanji
