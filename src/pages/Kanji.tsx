import React, { useContext } from 'react'
import styled from 'styled-components'
import { Container, TopRow,  Row } from '../components/PageContainer'
import KanjiPicker  from '../components/KanjiPicker'
import KanjiTest  from '../components/KanjiTest'
import { KanjiContext } from '../context/KanjiContext'

const Title: React.FC = styled.p`
  align-self: center;
  font-size: 3rem;
  font-weight: 900;
`

export const Kanji: React.FC = () => {
  const { studyOption, setStudyOption } = useContext(KanjiContext)

  const ChoiceButtons = () => {
    return (
      <Row>
        <button onClick={() => setStudyOption('test')}>TEST</button>
        <button onClick={() => setStudyOption('review')}>REVIEW</button>
      </Row>
    )
  }

  return (
    <Container>
      <TopRow>
        <Title>Start learning!!</Title>
      </TopRow>
      <ChoiceButtons />
      {/* <div>{kanjiList.map(k => JSON.stringify(k))}</div> */}
      {studyOption === 'test' ? <KanjiTest /> : null}
      {studyOption === 'review' ? <KanjiPicker /> : null}
    </Container>
  )
}
