import React, { useContext } from 'react'
import styled from 'styled-components'
import { Container, TopRow,  Row } from '../components/PageContainer'
import KanjiPicker  from '../components/KanjiPicker'
import { KanjiContext } from '../context/KanjiContext'


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

const Title: React.FC = styled.p`
  align-self: center;
  font-size: 3rem;
  font-weight: 900;
`
