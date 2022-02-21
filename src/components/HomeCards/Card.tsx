import React from 'react'
import { Link } from 'react-router-dom'
import { Btn } from '../common/Button'
import { Title } from '../common/Title'
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
      <Title fontSize='md'>{title}</Title>
      {/* <S.Pop>Learn hiragana and katakana</S.Pop> */}
      <S.CardText>{children}</S.CardText>
      <Btn as={Link} onClick={() => window.scrollTo(0, 0)} to={path}>
        {button}
      </Btn>
    </S.HomeCard>
  )
}

export default Card
