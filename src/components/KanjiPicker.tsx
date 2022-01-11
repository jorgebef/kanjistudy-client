import React from 'react'
import { Row } from './PageContainer'
// import { Row, RowGradient } from '../'
import { kanjiData } from '../utils/kanjiData'
import { QuizGrid, KanjiCell } from './kanjipicker/StyledComponents'

const KanjiPicker: React.FC = () => {
  const flipCell = (e: React.MouseEvent<HTMLElement>) => {
    e.currentTarget.classList.toggle('toggled')
  }

  return (
    <Row>
      <QuizGrid>
        {kanjiData.map((kanji, i) => {
          return (
            <KanjiCell kanji={kanji.kanji} onClick={flipCell}>
                <div className='kanji'>{kanji.kanji}</div>
                {/* <div className='meaning'>{kanji.wk_meanings[0]}</div> */}
            </KanjiCell>
          )
        })}
      </QuizGrid>
    </Row>
  )
}

export default KanjiPicker
