import React, { useContext } from 'react'
import { Container, TopRow } from '../components/common/PageContainer'
import { QuizSelector } from '../components/QuizSelector'
import KanjiQuiz from '../components/KanjiQuiz'
import { QuizCtx, QuizCtxT } from '../context/QuizCtx'
import { Title } from '../components/common/Title'

export const Quiz: React.FC = () => {
  const { quiz }: QuizCtxT = useContext(QuizCtx)

  return (
    <Container>
      <TopRow>
        <Title fontSize='md'>Take a test!!</Title>
      </TopRow>
      {quiz ? <KanjiQuiz /> : <QuizSelector />}
    </Container>
  )
}
