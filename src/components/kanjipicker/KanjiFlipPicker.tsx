import React from 'react'
// import { Row, RowGradient } from '../'
import { kanjiData } from '../../utils/kanjiData'
import { RowGradient, QuizGrid, KanjiCell } from './StyledComponents'

const KanjiPicker: React.FC = () => {

  const flipCell = (e: React.MouseEvent<HTMLElement>) => {
    e.currentTarget.classList.toggle('flipped')
  }

  return (
    <RowGradient>
      <QuizGrid>
        {kanjiData.map((kanji, i) => {
          return (
            <KanjiCell kanji={kanji.kanji} onClick={flipCell}>
              <div className='wrapper' >
                <div className='kanji'>{kanji.kanji}</div>
                <div className='meaning'>{kanji.wk_meanings[0]}</div>
              </div>
            </KanjiCell>
          )
        })}
      </QuizGrid>
    </RowGradient>
  )
}

export default KanjiPicker
