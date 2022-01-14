import { KanjiType } from '../../utils/kanjiData'
import styled from 'styled-components'
import { Dispatch, SetStateAction, useEffect, useState } from 'react'

interface PopupProps {
  visible: boolean
  setVisible: Dispatch<SetStateAction<boolean>>
  kanji: KanjiType | null
}

const PopupKanji: React.FC<PopupProps> = ({ visible, setVisible, kanji }) => {
  const [kanjialive, setKanjialive] = useState<any>(null)

  useEffect(() => {
    setKanjialive(null)
    kanjiFetch()
  }, [kanji])

  const kanjiFetch = async () => {
    const apiKey: string = process.env.REACT_APP_KANJIALIVE_API_KEY as string
    const url: string =
      process.env.REACT_APP_KANJIALIVE_ENDPOINT + 'kanji/' + kanji?.kanji
    fetch(url, {
      method: 'GET',
      headers: {
        'x-rapidapi-host': 'kanjialive-api.p.rapidapi.com',
        'x-rapidapi-key': apiKey,
      },
    })
      .then(res => res.json())
      .then(data => {
        // console.log(data)
        setKanjialive(data)
      })
      .catch(error => {
        console.log(error)
      })
  }

  return (
    <PopupContainer
      style={{
        visibility: visible ? 'visible' : 'hidden',
      }}
    >
      <Overlay onClick={() => setVisible(!visible)}></Overlay>
      <Popup>
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
              Example phrases:
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
          <div>LOADING...</div>
        )}
      </Popup>
    </PopupContainer>
  )
}

const PopupContainer = styled.div`
  display: flex;
  position: fixed;
  align-items: center;
  justify-content: center;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  visibility: hidden;
`

const Popup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  padding: 1rem 2rem;
  width: 35%;
  max-height: 80vh;
  font-size: 1.8rem;
  text-align: center;
  align-items: center;
  justify-content: flex-start;
  color: ${p => p.theme.fg};
  border-radius: ${p => p.theme.borderR};
  background-color: ${p => p.theme.lavender};
  overflow: scroll;

  & > .kanji {
    font-size: 4rem;
    font-weight: 700;
  }
`

const Overlay = styled.div`
  position: fixed;
  z-index: -9;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: black;
  background-color: #00000035;
`

export default PopupKanji
