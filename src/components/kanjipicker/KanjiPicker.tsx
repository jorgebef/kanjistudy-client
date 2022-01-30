import React, { useEffect, useState } from 'react'
import { Row } from '../common/PageContainer'
// import { kanjiData, KanjiType } from '../utils/kanjiData'
import { QuizGrid, KanjiCell } from '../kanjipicker/styled'
import PopupKanji from '../popup/Popup'
import gradeListFetch from '../../middleware/levelFetch'
import { KanjiAliveListT } from '../../middleware/types'
import Loading from '../loading/Loading'

const KanjiPicker: React.FC = () => {
  const [kanjiList, setKanjiList] = useState<KanjiAliveListT[] | null>(null)
  const [kanji, setKanji] = useState<string>()
  const [visible, setVisible] = useState<boolean>(false)
  const grade = 1

  useEffect(() => {
    gradeListFetch(grade).then(r => setKanjiList(r))
  }, [])

  const popupSet = (e: React.MouseEvent<HTMLElement>, k: KanjiAliveListT) => {
    // e.currentTarget.classList.toggle('selected')
    setKanji(k.kanji.character)
    setVisible(true)
  }

  return (
    <Row>
      {kanjiList ? (
        <QuizGrid>
          {kanjiList.map((k: KanjiAliveListT, i) => {
            return (
              <KanjiCell
                key={i}
                kanji={k.kanji.character}
                onClick={e => popupSet(e, k)}
              >
                <div className='kanji'>{k.kanji.character}</div>
              </KanjiCell>
            )
          })}
        </QuizGrid>
      ) : (
        <Loading />
      )}
      <PopupKanji visible={visible} setVisible={setVisible} kanji={kanji} />
    </Row>
  )
}

export default KanjiPicker
