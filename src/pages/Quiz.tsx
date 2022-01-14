import React, { useContext } from 'react'
import styled from 'styled-components'
import { Container, TopRow,  Row } from '../components/PageContainer'
import KanjiQuiz  from '../components/KanjiQuiz'
import { KanjiContext } from '../context/KanjiContext'

export const Quiz: React.FC = () => {

  return (
    <Container>
      <TopRow>
        <Title>Take a test!!</Title>
      </TopRow>
      <KanjiQuiz />
    </Container>
  )
}

const Title: React.FC = styled.p`
  align-self: center;
  font-size: 3rem;
  font-weight: 900;
`
