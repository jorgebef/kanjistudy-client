import React, { useContext, useEffect, useRef, useState } from 'react'
import * as S from './styles'
import { Row } from '../common/PageContainer'
import { QuizCtx, QuizCtxT } from '../../context/KanjiAliveCtx'
import singleKanjiFetch from '../../middleware/singleKanji'
import { KanjiAliveListT, KanjiAliveSingleT } from '../../middleware/types'
import gradeListFetch from '../../middleware/levelFetch'
import Loading from '../loading'
import { Btn, BtnRed } from '../common/Button.style'

const KanjiQuiz: React.FC = () => {
  const {
    kanjiList,
    setKanjiList,
    kanjiPool,
    setKanjiPool,
    qNumber,
    setQNumber,
    aNumber,
    setANumber,
    grade,
    setGrade,
    quiz,
    setQuiz,
  }: QuizCtxT = useContext(QuizCtx)

  const [question, setQuestion] = useState<string | null>(null)
  const [answerPool, setAnswerPool] = useState<string[] | null>(null)
  // const [answered, setAnswered] = useState<boolean>(false)
  const ulAnswersRef = useRef<HTMLUListElement>(null)

  const clearQuestion = () => {
    setKanjiList(null)
    setKanjiPool(null)
    setQuestion(null)
    setAnswerPool(null)
    setGrade([])
  }

  const startTest = () => {
    if (!grade) {
      alert('NO GRADE SELECTED')
      return
    }
    gradeListFetch(grade[0]).then((res: KanjiAliveListT[]) => {
      setKanjiPool(res.map((k: KanjiAliveListT) => k.kanji.character))
      console.log('fetched list')
    })
  }

  const nextQuestion = () => {
    if (!ulAnswersRef.current?.children) {
      return
    }
    const lis = Array.from(ulAnswersRef.current?.children)
    lis.forEach(li => {
      li.classList.remove('correct')
      li.classList.remove('incorrect')
    })
    // if (answered) {
    clearQuestion()
    startTest()
    // setAnswered(false)
    // }
  }

  const quitQuiz = () => {
    clearQuestion()
    setQuiz(false)
  }

  useEffect(() => {
    if (quiz) {
      startTest()
    }
  }, [quiz])

  useEffect(() => {
    if (!kanjiPool) {
      console.log('KanjiPool is null')
      return
    }
    console.log('KanjiPool: ')
    console.log(kanjiPool)
    let arr: string[] = []
    let poolCopy: string[] = kanjiPool
    for (let i = 0; i < aNumber; i++) {
      const kAdd: string = poolCopy[~~(Math.random() * poolCopy.length)]
      // Remove the used kanji from pool to avoid duplicate answers
      poolCopy = poolCopy.filter((i: string) => i !== kAdd)
      arr.push(kAdd)
    }
    const kfetch = arr.map(i => singleKanjiFetch(i))
    Promise.all(kfetch).then((res: KanjiAliveSingleT[]) => {
      setKanjiList(res.map((k: KanjiAliveSingleT) => k))
      setQuestion(arr[0])
    })
  }, [kanjiPool])

  useEffect(() => {
    if (kanjiList) {
      console.log('kanjiList: ')
      console.log(kanjiList)
      setAnswerPool(
        kanjiList.map((k: KanjiAliveSingleT) => k.kanji.meaning.english)
      )
    } else {
      return
    }
  }, [kanjiList])

  const shuffleArr = (a: string[] | null) => {
    if (a) {
      // ---------- FUNCTION TO SHUFFLE THE RESULTS ----------
      for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1))
        const x = a[i]
        a[i] = a[j]
        a[j] = x
      }
    }
    return a
  }

  const quizCheck = (e: React.MouseEvent<HTMLElement>) => {
    const selA = e.currentTarget.textContent
    const corrA = kanjiList?.find(k => k.kanji.character)?.kanji.meaning.english
    if (selA == corrA) {
      e.currentTarget.classList.toggle('correct')
    } else {
      e.currentTarget.classList.toggle('incorrect')
    }
    // if (!answered) {
    //   setAnswered(true)
    // }
  }

  return (
    <Row>
      <S.QContainer>
        {question ? (
          <>
            <S.Question>
              <span>{question}</span>
              <ul ref={ulAnswersRef}>
                {shuffleArr(answerPool)?.map((option, an) => {
                  return (
                    <li key={an} value={option} onClick={quizCheck}>
                      {option}
                    </li>
                  )
                })}
              </ul>
            </S.Question>
            <S.BtnContainer>
              <BtnRed onClick={quitQuiz}>Quit</BtnRed>
              <Btn onClick={nextQuestion}>Next</Btn>
            </S.BtnContainer>
          </>
        ) : (
          <Loading />
        )}
      </S.QContainer>
    </Row>
  )
}

export default KanjiQuiz
