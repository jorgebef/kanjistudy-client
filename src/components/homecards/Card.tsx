import React from 'react'
import * as S from './styles'

type CardProps = {
  title: string
  children: React.ReactNode
}

const Card = ({ title, children }: CardProps) => {
  return (
    <S.HomeCard>
      <h1>{title}</h1>
      <S.Pop>Learn hiragana and katakana</S.Pop>
      <S.Button to={'/kana'}>REVIEW KANA</S.Button>
      {React.Children.map(children, (child, i) => {
        if (i == 0) {
          return <b>child</b>
        }
        return child
      })}
    </S.HomeCard>
  )
}

export default Card
