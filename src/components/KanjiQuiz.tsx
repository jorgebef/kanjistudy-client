import React, { useContext, useState } from 'react'
import { QContainer, Question } from './kanjiquiz/styled'
import { KanjiContext, KanjiContextType } from '../context/KanjiContext'
import { kanjiData, KanjiType } from '../utils/kanjiData'

const KanjiTest: React.FC = () => {
  interface IQuestionPool {
    question: string
    answers: string[]
  }

  interface IAnswers {
    qn: number
    an: number
  }

  const {
    kanjiList,
    setKanjiList,
    studyOption,
    setStudyOption,
  }: KanjiContextType = useContext(KanjiContext)
  const [correctAnswers, setCorrectAnswers] = useState<IAnswers[]>([])
  const [incorrectAnswers, setIncorrectAnswers] = useState<IAnswers[]>([])
  const [questionPool, setQuestionPool] = useState<IQuestionPool[]>([])

  const qRefArray: React.Ref<any> = React.useRef<number[]>([])
  const aRefArray: React.Ref<any> = React.useRef<number[]>([])

  const addRandomK = () => {
    const kAdd = kanjiData[~~(Math.random() * kanjiData.length)]
    // @ts-ignore
    setKanjiList((o: KanjiType[]): void => [...o, kAdd])
    setQuestionPool(o => [
      ...o,
      {
        question: kAdd.kanji,
        answers: shuffleArr([kAdd.wk_meanings[0], 'lel', 'kekw', 'test']),
      },
    ])
  }

  const shuffleArr = (a: string[]) => {
    // ---------- FUNCTION TO SHUFFLE THE RESULTS ----------
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      const x = a[i]
      a[i] = a[j]
      a[j] = x
    }
    return a
  }

  const checkAnswer = (
    answer: string,
    question: string,
    qn: number,
    an: number
  ): boolean => {
    const kAnswer = kanjiData.find(o => o.wk_meanings[0] === answer)
    // TEST
    if (kAnswer?.kanji === question) {
      setCorrectAnswers(prevState => [...prevState, { qn, an }])
      // qRefArray.current[qn].style.backgroundColor = 'green'
      aRefArray.current[qn * 10 + an].style.backgroundColor = 'green'
      return true
    } else {
      setIncorrectAnswers(prevState => [...prevState, { qn, an }])
      // qRefArray.current[qn].style.backgroundColor = 'red'
      aRefArray.current[qn * 10 + an].style.backgroundColor = 'red'
      return false
    }
  }

  return (
    <QContainer>
      <button onClick={addRandomK}>ADD KANJI</button>
      {questionPool.map((q, qn) => (
        <Question
          key={qn}
          ref={(ref: HTMLDivElement) => {
            qRefArray.current[qn] = ref
          }}
        >
          What does the kanji {q.question} mean?
          <ul>
            {q.answers.map((option, an) => {
              return (
                <li
                  key={an}
                  ref={(ref: HTMLLIElement) => {
                    aRefArray.current[qn * 10 + an] = ref
                  }}
                  onClick={() => checkAnswer(option, q.question, qn, an)}
                >
                  {option}
                </li>
              )
            })}
          </ul>
        </Question>
      ))}
    </QContainer>
  )
}

export default KanjiTest
