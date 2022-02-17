import { Dispatch, SetStateAction, useEffect, useState } from 'react'
import { kanaData, kanaDataT } from '../../utils/kanaData'
import Loading from '../Loading'
import * as S from './styles'

interface PopupProps {
  visible: boolean
  setVisible: Dispatch<SetStateAction<boolean>>
  value: string | null
}

const PopupKana: React.FC<PopupProps> = ({ visible, setVisible, value }) => {
  const [kanaFull, setKanaFull] = useState<kanaDataT | null>(null)

  const toggleVisible = (): void => {
    setVisible(!visible)
  }

  useEffect(() => {
    setKanaFull(null)
    // setKanaFull(value ? value : null)
    const fullKanaData: kanaDataT | undefined = kanaData.find(k =>
      k.hiragana == value ? value : null
    )
    setKanaFull(fullKanaData ? fullKanaData : null)
  }, [value])

  return (
    <S.PopupContainer vis={visible}>
      <S.Overlay onClick={toggleVisible}></S.Overlay>
      <S.Popup vis={visible} valueset={kanaFull ? true : false}>
        <S.CloseButton
          valueset={kanaFull ? true : false}
          onClick={toggleVisible}
        >
          <div></div>
          <div></div>
        </S.CloseButton>
        {kanaFull ? (
          <>
            <div className='value'>{kanaFull}</div>
            <div className='meaning'>
              Meanings: <b>{kanaFull}</b>
            </div>
            <div className='yomis'>
              Kunyomi: <b>{kanaFull}</b>
              <br />
              Onyomi: <b>{kanaFull}</b>
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
