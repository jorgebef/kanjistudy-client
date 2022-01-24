// import { KanjiType } from '../../utils/kanjiData'
import { Dispatch, SetStateAction, useEffect, useState } from 'react'
import singleKanjiFetch from '../../middleware/singleKanji'
import Loading from '../loading/Loading'
import { CloseButton, Overlay, Popup, PopupContainer } from './styled'

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
    <PopupContainer vis={visible}>
      <Overlay onClick={toggleVisible}></Overlay>
      <Popup vis={visible} kanjiset={kanjialive ? true : false}>
        <CloseButton
          kanjiset={kanjialive ? true : false}
          onClick={toggleVisible}
        >
          <div></div>
          <div></div>
        </CloseButton>
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
      </Popup>
    </PopupContainer>
  )
}

export default PopupKanji
