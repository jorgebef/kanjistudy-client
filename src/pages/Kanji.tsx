import React from 'react'
import { Container, TopRow, Title } from '../components/PageContainer'
import KanjiPicker from '../components/kanjipicker/KanjiPicker'
// import { KanjiContext } from '../context/KanjiContext'

export const Kanji: React.FC = () => {
  return (
    <Container>
      <TopRow>
        <Title>Kanji review!!</Title>
      </TopRow>
      <KanjiPicker />
    </Container>
  )
}
