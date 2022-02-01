import { ChangeEvent, FormEvent, useContext } from 'react'
import { QuizCtx, QuizCtxT } from '../../context/KanjiAliveCtx'
import { Row } from '../common/PageContainer'
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
    // De-duplicate grades from the array
    const newGrade = grade ? [...grade, val] : [val]
    const uniqueGradeArr = [...Array.from(new Set(newGrade))]
    setGrade(uniqueGradeArr)
    // }
  }

  const createQuiz = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setQuiz(true)
    console.log('Quiz: ' + quiz)
    console.log(grade)
  }

  return (
    <Row>
      <S.QuizMenuContainer onSubmit={e => createQuiz(e)}>
        <S.OptionContainer>
          <S.Option>
            <S.OptionTitle>Number of questions</S.OptionTitle>
            <S.ValueDisplay>{qNumber}</S.ValueDisplay>
            <S.Slider
              min={10}
              max={40}
              value={qNumber}
              onChange={e => setQNumber(Number(e.currentTarget.value))}
            />
          </S.Option>
          <S.Option>
            <S.Levels>
              <S.OptionTitle>Levels</S.OptionTitle>
              <div className='checkbox-cont'>
                <label>
                  <S.Checkbox value={1} onChange={updateLevel} />
                  Grade 1
                </label>
                <label>
                  <S.Checkbox value={2} onChange={updateLevel} />
                  Grade 2
                </label>
                <label>
                  <S.Checkbox value={3} onChange={updateLevel} />
                  Grade 3
                </label>
                <label>
                  <S.Checkbox value={4} onChange={updateLevel} />
                  Grade 4
                </label>
              </div>
            </S.Levels>
          </S.Option>
          <S.Option>
            <S.OptionTitle>Number of choices</S.OptionTitle>
            <S.ValueDisplay>{aNumber}</S.ValueDisplay>
            <S.Slider
              value={aNumber}
              min={2}
              max={5}
              onChange={e => setANumber(Number(e.currentTarget.value))}
            />
          </S.Option>
        </S.OptionContainer>
        <S.SubmitBtn as='input' type='submit' value='Start Quiz!' />
      </S.QuizMenuContainer>
    </Row>
  )
}
