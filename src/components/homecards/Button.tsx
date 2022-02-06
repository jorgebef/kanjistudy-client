import * as S from './styles'

type ButtonProps = {
  link: string
  children: React.ReactNode
}

const Button = ({ link, children }: ButtonProps) => {
  return (
    <S.Button to={link}>
      <span>{children}</span>
    </S.Button>
  )
}

export default Button
