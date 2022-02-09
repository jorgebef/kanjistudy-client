import React from 'react'
import { Container, TopRow,  } from '../components/common/PageContainer'
import { Title } from '../components/common/Title'
import KanjiGrid from '../components/KanjiPicker'
// import { KanjiContext } from '../context/KanjiContext'

export const Kanji: React.FC = () => {
  return (
    <Container>
      <TopRow>
        <Title>Kanji review!!</Title>
      </TopRow>
      <KanjiGrid />
    </Container>
  )
}
