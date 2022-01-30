import {
  ChangeEvent,
  Dispatch,
  FormEvent,
  SetStateAction,
  useContext,
} from 'react'
import { QuizCtx, QuizCtxT } from '../../context/KanjiAliveCtx'
import { Row } from '../common/PageContainer'
import {
  QuizMenuContainer,
  Slider,
  Option,
  Checkbox,
  Levels,
  OptionTitle,
  SubmitBtn,
  OptionContainer,
  ValueDisplay,
} from './styled'

export const QuizSelector: React.FC = () => {
  const {
    // kanjiList,
    // setKanjiList,
    qNumber,
    setQNumber,
    aNumber,
    setANumber,
    grade,
    setGrade,
    // quiz,
    setQuiz,
  }: QuizCtxT = useContext(QuizCtx)

  const updateLevel = (e: ChangeEvent<HTMLInputElement>) => {
    const val: number = Number(e.currentTarget.value)
    if (grade.includes(val)) {
      setGrade(grade.filter(i => i !== val))
    } else {
      setGrade([...grade, val])
    }
  }

  const createQuiz = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setQuiz(true)
    console.log('create quiz')
  }

  return (
    <Row>
      <QuizMenuContainer onSubmit={e => createQuiz(e)}>
        <OptionContainer>
          <Option>
            <OptionTitle>Number of questions</OptionTitle>
            <ValueDisplay>{qNumber}</ValueDisplay>
            <Slider
              min={10}
              max={40}
              value={qNumber}
              onChange={e => setQNumber(Number(e.currentTarget.value))}
            />
          </Option>
          <Option>
            <Levels>
              <OptionTitle>Levels</OptionTitle>
              <div className='checkbox-cont'>
                <label>
                  <Checkbox value={1} onChange={updateLevel} />
                  Grade 1
                </label>
                <label>
                  <Checkbox value={2} onChange={updateLevel} />
                  Grade 2
                </label>
                <label>
                  <Checkbox value={3} onChange={updateLevel} />
                  Grade 3
                </label>
                <label>
                  <Checkbox value={4} onChange={updateLevel} />
                  Grade 4
                </label>
              </div>
            </Levels>
          </Option>
          <Option>
            <OptionTitle>Number of choices</OptionTitle>
            <ValueDisplay>{aNumber}</ValueDisplay>
            <Slider
              value={aNumber}
              min={2}
              max={5}
              onChange={e => setANumber(Number(e.currentTarget.value))}
            />
          </Option>
        </OptionContainer>
        <SubmitBtn as='input' type='submit' value='Start Quiz!' />
      </QuizMenuContainer>
    </Row>
  )
}
