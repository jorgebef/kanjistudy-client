import styled from 'styled-components'
import { ThemeType } from '../../styles/theme'

type TitleProps = {
  fontSize: 'sm' | 'md' | 'lg'
  color?: keyof ThemeType
}

export const Title = styled.p<TitleProps>`
  text-align: center;
  align-self: center;
  font-weight: 900;
  font-size: ${p =>
    p.fontSize === 'sm' ? '1.5rem' : p.fontSize === 'md' ? '2.5rem' : '3.2rem'};
  white-space: nowrap;
  color: ${p => (p.color ? p.theme[p.color] : p.theme.black)};
`
