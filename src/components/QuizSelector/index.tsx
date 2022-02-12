import { ChangeEvent, FormEvent, useContext, useEffect } from 'react'
import { QuizCtx, QuizCtxT } from '../../context/QuizCtx'
import { Row } from '../common/PageContainer'
import { Title } from '../common/Title'
import GradeSelect from './GradeSelect'
import * as S from './styles'

export const QuizSelector: React.FC = () => {
  const {
    qNumber,
    setQNumber,
    aNumber,
    setANumber,
    grade,
    setGrade,
    quiz,
    setQuiz,
  }: QuizCtxT = useContext(QuizCtx)

  const updateLevel = (e: ChangeEvent<HTMLInputElement>) => {
    const val: number = Number(e.currentTarget.value)
    const checked: boolean = e.currentTarget.checked
    // De-duplicate grades from the array
    const newGrade = grade
      ? checked
        ? [...grade, val]
        : grade.filter(v => v !== val)
      : [val]
    const uniqueGradeArr = [...Array.from(new Set(newGrade))]
    setGrade(uniqueGradeArr)
    // }
  }

  const createQuiz = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!grade) {
      alert('NO GRADE SELECTED')
      return
    }
    setQuiz(true)
    console.log('Quiz: ' + quiz)
    console.log(grade)
  }

  return (
    <Row>
      <S.QuizMenuContainer onSubmit={e => createQuiz(e)}>
        <S.OptionContainer>
          <S.Option>
            <Title fontSize='sm'>Number of questions</Title>
            <S.ValueDisplay>{qNumber}</S.ValueDisplay>
            <S.Slider
              min={10}
              max={40}
              value={qNumber}
              onChange={e => setQNumber(Number(e.currentTarget.value))}
            />
          </S.Option>
          <S.Option>
            <GradeSelect onChange={updateLevel} grades={4}></GradeSelect>
          </S.Option>
          <S.Option>
            <Title fontSize='sm'>Number of choices</Title>
            <S.ValueDisplay>{aNumber}</S.ValueDisplay>
            <S.Slider
              value={aNumber}
              min={2}
              max={5}
              onChange={e => setANumber(Number(e.currentTarget.value))}
            />
          </S.Option>
        </S.OptionContainer>
        <S.SubmitBtn as='input' type='submit' value='START' />
      </S.QuizMenuContainer>
    </Row>
  )
}
