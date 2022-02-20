import React, { useEffect, useState } from 'react'
import * as S from './styles'
import { PopupKana } from '../Popup'
import Loading from '../Loading'
import WaveRow from '../WaveRow'
import { kanaData, kanaDataT } from '../../utils/kanaData'
import KanaTypeSwitch from './kanaTypeSwitch'

const KanaGrid: React.FC = (): React.ReactElement => {
  const [kanaType, setKanaType] = useState<'hiragana' | 'katakana'>('hiragana')
  const [kana, setKana] = useState<kanaDataT>()
  const [visible, setVisible] = useState<boolean>(false)
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    setLoading(false)
  }, [kanaType])

  const popupSet = (k: kanaDataT): void => {
    // e.currentTarget.classList.toggle('selected')
    setKana(k)
    setVisible(true)
  }

  return (
    <>
      <KanaTypeSwitch kanaType={kanaType} setKanaType={setKanaType} />
      <WaveRow color='lightgrey'>
        {!loading ? (
          <S.KanaGrid>
            {kanaData.map((kArr: kanaDataT[], _) => {
              return kArr.map((k: kanaDataT, i: number) => {
                return (
                  <S.Cell
                    key={i}
                    newRow={i == 0 ? true : false}
                    kana={k[kanaType]}
                    onClick={() => popupSet(k)}
                  >
                    <div className='kana'>{k[kanaType]}</div>
                  </S.Cell>
                )
              })
            })}
          </S.KanaGrid>
        ) : (
          <Loading />
        )}
        <PopupKana
          visible={visible}
          setVisible={setVisible}
          kanaType={kanaType}
          value={kana ? kana : null}
        />
      </WaveRow>
    </>
  )
}

export default KanaGrid
