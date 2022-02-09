import React, { useEffect, useState } from 'react'
import * as S from './styles'
import PopupKanji from '../PopupKanji'
import gradeListFetch from '../../middleware/levelFetch'
import { KanjiAliveListT } from '../../middleware/types'
import Loading from '../Loading'
import WaveRow from '../WaveRow'

const KanjiGrid: React.FC = () => {
  const [kanjiList, setKanjiList] = useState<KanjiAliveListT[] | null>(null)
  const [kanji, setKanji] = useState<string>()
  const [visible, setVisible] = useState<boolean>(false)
  const [grade, setGrade] = useState<number[]>([1])
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    const gradeFetch = grade.map(g => gradeListFetch(g))
    let tempList: typeof kanjiList = kanjiList
    Promise.all(gradeFetch)
      .then((r: KanjiAliveListT[][]) =>
        r.forEach((r: KanjiAliveListT[]) => {
          console.log(r)
          tempList = tempList ? [...tempList, ...r] : r
        })
      )
      .then(() => {
        setKanjiList(tempList)
        setLoading(false)
      })
  }, [grade])

  useEffect(() => {
    console.log('kanjiList is reset')
  }, [kanjiList])

  const popupSet = (e: React.MouseEvent<HTMLElement>, k: KanjiAliveListT) => {
    // e.currentTarget.classList.toggle('selected')
    setKanji(k.kanji.character)
    setVisible(true)
  }

  return (
    <>
      <WaveRow color='lightgrey'>
        {!loading ? (
          <S.Grid>
            {kanjiList?.map((k: KanjiAliveListT, i) => {
              return (
                <S.Cell
                  key={i}
                  kanji={k.kanji.character}
                  onClick={e => popupSet(e, k)}
                >
                  <div className='kanji'>{k.kanji.character}</div>
                </S.Cell>
              )
            })}
          </S.Grid>
        ) : (
          <Loading />
        )}
        <PopupKanji visible={visible} setVisible={setVisible} kanji={kanji} />
      </WaveRow>
    </>
  )
}

export default KanjiGrid
