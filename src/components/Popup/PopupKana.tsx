import { Dispatch, SetStateAction, useEffect, useState } from 'react'
import Loading from '../Loading'
import * as S from './styles'

interface PopupProps {
  visible: boolean
  setVisible: Dispatch<SetStateAction<boolean>>
  value: string | undefined
}

const PopupKana: React.FC<PopupProps> = ({
  visible,
  setVisible,
  value,
}) => {
  const [kana, setKana] = useState<string | null>(null)

  const toggleVisible = (): void => {
    setVisible(!visible)
  }

  return (
    <S.PopupContainer vis={visible}>
      <S.Overlay onClick={toggleVisible}></S.Overlay>
      <S.Popup vis={visible} kanjiset={kana ? true : false}>
        <S.CloseButton kanjiset={kana ? true : false} onClick={toggleVisible}>
          <div></div>
          <div></div>
        </S.CloseButton>
        {kana ? (
          <>
            <div className='kanji'>{kana}</div>
            <div className='meaning'>
              Meanings: <b>{kana}</b>
            </div>
            <div className='yomis'>
              Kunyomi: <b>{kana}</b>
              <br />
              Onyomi: <b>{kana}</b>
            </div>
          </>
        ) : (
          <Loading />
        )}
      </S.Popup>
    </S.PopupContainer>
  )
}

export default PopupKana
