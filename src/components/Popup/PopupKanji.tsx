import { Dispatch, SetStateAction, useEffect, useState } from 'react'
import singleKanjiFetch from '../../middleware/singleKanji'
import { KanjiAliveSingleT } from '../../middleware/types'
import Loading from '../Loading'
import * as S from './styles'

interface PopupProps {
  visible: boolean
  setVisible: Dispatch<SetStateAction<boolean>>
  value: string | null
}

const PopupKanji: React.FC<PopupProps> = ({
  visible,
  setVisible,
  value,
}) => {
  const [kanjialive, setKanjialive] = useState<KanjiAliveSingleT | null>(null)

  useEffect(() => {
    setKanjialive(null)
    // kanjiFetch(setKanjialive, kanji)
    singleKanjiFetch(value).then(r => setKanjialive(r))
  }, [value])

  const toggleVisible = (): void => {
    setVisible(!visible)
  }

  return (
    <S.PopupContainer vis={visible}>
      <S.Overlay onClick={toggleVisible}></S.Overlay>
      <S.Popup vis={visible} valueset={kanjialive ? true : false}>
        <S.CloseButton
          valueset={kanjialive ? true : false}
          onClick={toggleVisible}
        >
          <div></div>
          <div></div>
        </S.CloseButton>
        {kanjialive ? (
          <>
            <div className='value'>{kanjialive?.kanji?.character}</div>
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
