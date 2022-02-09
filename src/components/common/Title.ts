import styled from 'styled-components'
import { ThemeType } from '../../styles/theme'

type TitleProps = {
  color?: keyof ThemeType
}

export const Title = styled.p<TitleProps>`
  text-align: center;
  align-self: center;
  font-weight: 900;
  font-size: 4rem;
  white-space: nowrap;
  color: ${p => (p.color ? p.theme[p.color] : p.theme.black)};

  @media (max-width: ${p => p.theme.mediaSm}) {
    font-size: 3.5rem;
  }
`
