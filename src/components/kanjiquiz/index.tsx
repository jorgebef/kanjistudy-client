import React, { useContext, useEffect, useRef, useState } from 'react'
import * as S from './styles'
import { QuizCtx, QuizCtxT } from '../../context/QuizCtx'
import singleKanjiFetch from '../../middleware/singleKanji'
import { KanjiAliveListT, KanjiAliveSingleT } from '../../middleware/types'
import gradeListFetch from '../../middleware/levelFetch'
import Loading from '../Loading'
import { Btn } from '../common/Button'
import WaveRow from '../WaveRow'

const KanjiQuiz: React.FC = () => {
  const {
    kanjiList,
    setKanjiList,
    kanjiPool,
    setKanjiPool,
    // qNumber,
    // setQNumber,
    aNumber,
    // setANumber,
    grade,
    // setGrade,
    quiz,
    setQuiz,
    results,
    setResults,
  }: QuizCtxT = useContext(QuizCtx)

  const [question, setQuestion] = useState<string | null>(null)
  const [answerPool, setAnswerPool] = useState<string[] | null>(null)
  const [answered, setAnswered] = useState<boolean>(false)
  const ulAnswersRef = useRef<HTMLUListElement>(null)

  const clearQuestion = () => {
    setAnswered(false)
    setKanjiList(null)
    setKanjiPool(null)
    setQuestion(null)
    setAnswerPool(null)
  }

  const startTest = () => {
    if (!grade) return

    const gradeFetch = grade.map(g => gradeListFetch(g))
    let tempList: typeof kanjiPool = null
    Promise.all(gradeFetch)
      .then((r: KanjiAliveListT[][]) =>
        r.forEach((r: KanjiAliveListT[]) => {
          console.log(tempList)
          console.log('Promise response --> ' + r.length)
          const rMap = r.map((k: KanjiAliveListT) => k.kanji.character)
          tempList = tempList ? [...tempList, ...rMap] : rMap
        })
      )
      .then(() => {
        console.log('templist: ' + tempList?.length)
        setKanjiPool(tempList)
      })
  }

  const nextQuestion = (): void => {
    if (!answered) {
      alert('NO ANSWER PROVIDED')
      return
    }
    if (!ulAnswersRef.current?.children) {
      return
    }
    const lis = Array.from(ulAnswersRef.current?.children)
    lis.forEach(li => {
      li.classList.remove('correct')
      li.classList.remove('incorrect')
    })
    clearQuestion()
    const newKanjiPool =
      kanjiPool?.filter((k: string) => k !== question) || null
    setKanjiPool(newKanjiPool)
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
    let kArr: string[] = []
    let poolCopy: string[] = kanjiPool
    for (let i = 0; i < aNumber; i++) {
      const kAdd: string = poolCopy[~~(Math.random() * poolCopy.length)]
      // Remove the used kanji from pool to avoid duplicate answers
      poolCopy = poolCopy.filter((i: string) => i !== kAdd)
      kArr.push(kAdd)
    }
    const kfetch = kArr.map(i => singleKanjiFetch(i))
    Promise.all(kfetch).then((res: KanjiAliveSingleT[]) => {
      setKanjiList(res.map((k: KanjiAliveSingleT) => k))
      setQuestion(kArr[0])
    })
  }, [kanjiPool])

  useEffect(() => {
    if (!kanjiList) return
    console.log('kanjiList: ')
    console.log(kanjiList)
    setAnswerPool(
      shuffleArr(kanjiList).map(
        (k: KanjiAliveSingleT) => k.kanji.meaning.english
      )
    )
  }, [kanjiList])

  const shuffleArr = (a: KanjiAliveSingleT[]): KanjiAliveSingleT[] => {
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

  const quizCheck = (e: React.MouseEvent<HTMLElement>): void => {
    setAnswered(true)
    const selA = e.currentTarget.textContent
    const corrA = kanjiList?.find(k => k.kanji.character === question)?.kanji
      .meaning.english
    let result: boolean
    if (selA == corrA) {
      result = true
      e.currentTarget.classList.toggle('correct')
    } else {
      result = false
      e.currentTarget.classList.toggle('incorrect')
    }
    processResult(result)
  }

  const processResult = (result: boolean): void => {
    console.log(results)
    if (answered || !question) return
    // const answersCopy = results
    //   ? (results[question] = result)
    //   : { [question]: result }
    const answersCopy = results ? results : {}
    answersCopy[question] = result
    // setResults( results ? { ...results, question: result } : { question: result })
    setResults(answersCopy)
  }

  return (
    <WaveRow color='lightgrey'>
      <S.QContainer>
        {question ? (
          <>
            <S.Question>
              <S.QuestionKanji>{question}</S.QuestionKanji>
              <S.AnswerUL ref={ulAnswersRef}>
                {answerPool?.map((option, an) => {
                  return (
                    <S.AnswerLi
                      key={an}
                      value={option}
                      onClick={e => quizCheck(e)}
                    >
                      {option}
                    </S.AnswerLi>
                  )
                })}
              </S.AnswerUL>
            </S.Question>
            <S.BtnContainer>
              <Btn onClick={quitQuiz}>Quit</Btn>
              <Btn onClick={nextQuestion}>Next</Btn>
            </S.BtnContainer>
          </>
        ) : (
          <Loading />
        )}
      </S.QContainer>
    </WaveRow>
  )
}

export default KanjiQuiz
