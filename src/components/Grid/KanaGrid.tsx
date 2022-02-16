import React, { useEffect, useState } from 'react'
import * as S from './styles'
import { PopupKanji } from '../Popup'
import Loading from '../Loading'
import WaveRow from '../WaveRow'
import { kanaData, kanaDataT } from '../../utils/kanaData'

const KanaGrid: React.FC = (): React.ReactElement => {
  const [kanaList, setKanaList] = useState<string[] | null>(null)
  const [kanaType, setKanaType] = useState<string>('hiragana')
  const [kana, setKana] = useState<string>()
  const [visible, setVisible] = useState<boolean>(false)
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    let tempList: string[] = []
    if (kanaType === 'hiragana') {
      kanaData.map((k: kanaDataT) => {
        tempList.push(k.hiragana)
      })
    } else {
      kanaData.map((k: kanaDataT) => {
        tempList.push(k.katakana)
      })
    }
    setKanaList(tempList)
    setLoading(false)
  }, [kanaType])

  const popupSet = (k: string) => {
    // e.currentTarget.classList.toggle('selected')
    setKana(k)
    setVisible(true)
  }

  return (
    <>
      <WaveRow color='lightgrey'>
        {!loading ? (
          <S.Grid>
            {kanaList?.map((k: string, i) => {
              return (
                <S.Cell
                  key={i}
                  kana={k}
                  onClick={() => popupSet(k)}
                >
                  <div className='kanji'>{k}</div>
                </S.Cell>
              )
            })}
          </S.Grid>
        ) : (
          <Loading />
        )}
        <PopupKanji visible={visible} setVisible={setVisible} value={kana} />
      </WaveRow>
    </>
  )
}

export default KanaGrid
