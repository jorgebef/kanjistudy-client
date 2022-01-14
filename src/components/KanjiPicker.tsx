import React, { useState } from 'react'
import { Row } from './PageContainer'
// import { Row, RowGradient } from '../'
import { kanjiData, KanjiType } from '../utils/kanjiData'
import { QuizGrid, KanjiCell} from './kanjipicker/StyledComponents'
import PopupKanji from './kanjipicker/Popup'

const KanjiPicker: React.FC = () => {
  const [kanji, setKanji] = useState<KanjiType | null>(null)
  const [visible, setVisible] = useState<boolean>(false)

  const pickKanji = (e: React.MouseEvent<HTMLElement>, k: KanjiType) => {
    // e.currentTarget.classList.toggle('selected')
    setKanji(k)
    setVisible(true)
  }

  return (
    <Row>
      <QuizGrid>
        {kanjiData.map((k: KanjiType, i) => {
          return (
            <KanjiCell key={i} kanji={k.kanji} onClick={e => pickKanji(e, k)}>
              <div className='kanji'>{k.kanji}</div>
            </KanjiCell>
          )
        })}
        <PopupKanji visible={visible} setVisible={setVisible} kanji={kanji} />
      </QuizGrid>
    </Row>
  )
}

export default KanjiPicker
