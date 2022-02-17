import React, { useEffect, useState } from 'react'
import * as S from './styles'
import { PopupKana } from '../Popup'
import Loading from '../Loading'
import WaveRow from '../WaveRow'
import { kanaData, kanaDataT } from '../../utils/kanaData'

const KanaGrid: React.FC = (): React.ReactElement => {
  const [kanaList, setKanaList] = useState<string[] | null>(null)
  const [kanaType, setKanaType] = useState<'hiragana' | 'katakana'>('hiragana')
  const [kana, setKana] = useState<string>()
  const [visible, setVisible] = useState<boolean>(false)
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    let tempList: string[] = []
    kanaData.map((k: kanaDataT) => {
      tempList.push(k[kanaType])
    })
    setKanaList(tempList)
    setLoading(false)
  }, [kanaType])

  const popupSet = (k: string) => {
    // e.currentTarget.classList.toggle('selected')
    setKana(k)
    setVisible(true)
  }

  const rowStart = ['ら', 'か', 'が', 'わ']

  return (
    <>
      <WaveRow color='lightgrey'>
        {!loading ? (
          <S.Grid cols={5}>
            {kanaList?.map((k: string, i) => {
              return (
                <S.Cell
                  key={i}
                  newRow={k === rowStart.find(ka => ka === k) ? true : false}
                  kana={k}
                  onClick={() => popupSet(k)}
                >
                  <div className='kana'>{k}</div>
                </S.Cell>
              )
            })}
          </S.Grid>
        ) : (
          <Loading />
        )}
        <PopupKana
          visible={visible}
          setVisible={setVisible}
          value={kana ? kana : null}
        />
      </WaveRow>
    </>
  )
}

export default KanaGrid
