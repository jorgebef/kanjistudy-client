import React, { useEffect, useState } from 'react'
import { Row } from '../common/PageContainer'
import * as S from '../kanjipicker/styles'
import PopupKanji from '../popupkanji'
import gradeListFetch from '../../middleware/levelFetch'
import { KanjiAliveListT } from '../../middleware/types'
import Loading from '../loading'
import { Wave2, Wave1 } from '../waveseparators/styles'

const KanjiPicker: React.FC = () => {
  const [kanjiList, setKanjiList] = useState<KanjiAliveListT[] | null>(null)
  const [kanji, setKanji] = useState<string>()
  const [visible, setVisible] = useState<boolean>(false)
  const [grade, setGrade] = useState<number[]>([1, 2])
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
      <S.WaveTop color='lightgrey' />
      <Row color='lightgrey'>
        {!loading ? (
          <S.QuizGrid>
            {kanjiList?.map((k: KanjiAliveListT, i) => {
              return (
                <S.KanjiCell
                  key={i}
                  kanji={k.kanji.character}
                  onClick={e => popupSet(e, k)}
                >
                  <div className='kanji'>{k.kanji.character}</div>
                </S.KanjiCell>
              )
            })}
          </S.QuizGrid>
        ) : (
          <Loading />
        )}
        <PopupKanji visible={visible} setVisible={setVisible} kanji={kanji} />
      </Row>
      <S.WaveBottom color='lightgrey' />
    </>
  )
}

export default KanjiPicker
