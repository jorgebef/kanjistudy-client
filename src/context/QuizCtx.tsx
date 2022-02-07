import React, { createContext, useState } from 'react'
import { KanjiAliveSingleT } from '../middleware/types'

export interface QuizCtxT {
  kanjiList: KanjiAliveSingleT[] | null // The list of kanjis that the user has selected
  setKanjiList: (k: KanjiAliveSingleT[] | null) => void
  kanjiPool: string[] | null // The list of kanjis that the user has selected
  setKanjiPool: (k: string[] | null) => void
  qNumber: number
  setQNumber: (n: number) => void
  aNumber: number
  setANumber: (n: number) => void
  grade: number[]|null
  setGrade: (n: number[]|null) => void
  quiz:boolean
  setQuiz:(q:boolean) => void
}

export const QuizCtx = createContext<QuizCtxT>({
  kanjiList: null,
  setKanjiList: () => {},
  kanjiPool: null,
  setKanjiPool: () => {},
  qNumber: 20,
  setQNumber: () => {},
  aNumber: 4,
  setANumber: () => {},
  grade: null,
  setGrade: () => {},
  quiz: false,
  setQuiz: () => {}
})

export const QuizCtxProvider: React.FC = ({ children }) => {
  const [kanjiList, setKanjiList] = useState<KanjiAliveSingleT[] | null>(null)
  const [kanjiPool, setKanjiPool] = useState<string[] | null>(null)
  const [qNumber, setQNumber] = useState<number>(20)
  const [aNumber, setANumber] = useState<number>(4)
  const [grade, setGrade] = useState<number[]|null>(null)
  const [quiz, setQuiz] = useState<boolean>(false)

  return (
    <QuizCtx.Provider
      value={{
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
        setQuiz
      }}
    >
      {children}
    </QuizCtx.Provider>
  )
}
