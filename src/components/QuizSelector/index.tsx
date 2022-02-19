import { FormEvent, useContext } from 'react'
import { QuizCtx, QuizCtxT } from '../../context/QuizCtx'
import { Title } from '../common/Title'
import LevelSelect from '../LevelSelect'
import WaveRow from '../WaveRow'
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

  const createQuiz = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!grade) {
      alert('NO GRADE SELECTED')
      return
    }
    setQuiz(true)
  }

  return (
    <WaveRow color='lightgrey'>
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
            <LevelSelect grade={grade} setGrade={setGrade} />
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
    </WaveRow>
  )
}
