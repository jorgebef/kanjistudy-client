import React from 'react'
import { Container, TopRow, Title } from '../components/common/PageContainer'
import KanjiPicker from '../components/KanjiPicker'
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
