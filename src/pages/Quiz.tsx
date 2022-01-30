import React, { useContext } from 'react'
import styled from 'styled-components'
import { Container, TopRow } from '../components/PageContainer'
import { QuizSelector } from '../components/quizselector/QuizSelector'
import KanjiQuiz from '../components/kanjiquiz/KanjiQuiz'
import { QuizCtx, QuizCtxT } from '../context/KanjiAliveCtx'

export const Quiz: React.FC = () => {
  const { quiz }: QuizCtxT = useContext(QuizCtx)

  return (
    <Container>
      <TopRow>
        <Title>Take a test!!</Title>
      </TopRow>
      {quiz ? <KanjiQuiz /> : <QuizSelector />}
    </Container>
  )
}

const Title: React.FC = styled.p`
  align-self: center;
  font-size: 3rem;
  font-weight: 900;
`