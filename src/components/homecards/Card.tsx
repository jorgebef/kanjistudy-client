import React from 'react'
import { Link } from 'react-router-dom'
import { Btn } from '../common/Button'
import * as S from './styles'

type CardProps = {
  title: string
  path: string
  button: string
  children: React.ReactNode
}

const Card = ({ title, path, button, children }: CardProps) => {
  return (
    <S.HomeCard>
      <h1>{title}</h1>
      {/* <S.Pop>Learn hiragana and katakana</S.Pop> */}
      <p>{children}</p>
      <Btn as={Link} to={path}>
        {button}
      </Btn>
    </S.HomeCard>
  )
}

export default Card
