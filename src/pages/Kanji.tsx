import React from 'react'
import { Container, TopRow, Title } from '../components/PageContainer'
import KanjiPicker from '../components/kanjipicker/KanjiPicker'
// import { KanjiContext } from '../context/KanjiContext'

export const Kanji: React.FC = () => {
  return (
    <Container>
      <TopRow>
        <Title>Review JLPT N5 Kanji!!</Title>
      </TopRow>
      <KanjiPicker />
    </Container>
  )
}
