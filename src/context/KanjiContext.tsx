import React, { createContext, useState } from 'react'
import { initialKanjiValue, kanjiData, KanjiType } from '../utils/kanjiData'

export interface KanjiContextType {
  kanjiList: KanjiType[] // The list of kanjis that the user has selected
  setKanjiList: (k: KanjiType[]) => void
  studyOption: string
  setStudyOption: (k: string) => void
}

export const KanjiContext = createContext<KanjiContextType>({
  kanjiList: [initialKanjiValue],
  setKanjiList: () => {},
  studyOption: '',
  setStudyOption: () => {},
})

export const KanjiCtxProvider: React.FC = ({ children }) => {
  const [kanjiList, setKanjiList] = useState<KanjiType[]>(kanjiData)
  const [studyOption, setStudyOption] = useState<string>('')

  return (
    <KanjiContext.Provider
      value={{ kanjiList, setKanjiList, studyOption, setStudyOption }}
    >
      {children}
    </KanjiContext.Provider>
  )
}
