import { Dispatch, SetStateAction, useEffect, useState } from 'react'
import { kanaData, kanaDataT } from '../../utils/kanaData'
import Loading from '../Loading'
import * as S from './styles'

interface PopupProps {
  visible: boolean
  setVisible: Dispatch<SetStateAction<boolean>>
  kanaType: 'hiragana' | 'katakana'
  value: kanaDataT | null
}

const PopupKana: React.FC<PopupProps> = ({
  visible,
  kanaType,
  setVisible,
  value,
}) => {
  const [kana, setKana] = useState<kanaDataT | null>(null)

  const toggleVisible = (): void => {
    setVisible(!visible)
  }

  useEffect(() => {
    setKana(null)
    setKana(value)
  }, [value])

  return (
    <S.PopupContainer vis={visible}>
      <S.Overlay onClick={toggleVisible}></S.Overlay>
      <S.Popup vis={visible} valueset={kana ? true : false}>
        <S.CloseButton valueset={kana ? true : false} onClick={toggleVisible}>
          <div></div>
          <div></div>
        </S.CloseButton>
        {kana ? (
          <>
            <div className='value'>{kana[kanaType]}</div>
            <div className='meaning'>
              Romaji: <b>{kana.romaji}</b>
            </div>
            <div className='examples'>
              <p>Example 1 ...</p>
              <br />
              <p>Example 2 ...</p>
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
