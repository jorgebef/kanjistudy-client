import { ReactComponent as WaveSVG1 } from './waveSeparator1.svg'
import { ReactComponent as WaveSVG2 } from './waveSeparator2.svg'
import { ThemeType } from '../../styles/theme'
import styled from 'styled-components'

export interface WaveProps {
  color?: keyof ThemeType
}

export const Wave1 = styled(WaveSVG1)<WaveProps>`
  margin-bottom: -5px;
  width: 100%;

  path {
    fill: ${p => (p.color ? p.theme[p.color] : p.theme.red)};
  }
`

export const Wave2 = styled(WaveSVG2)<WaveProps>`
  margin-top: -5px;
  width: 100%;
  path {
    fill: ${p => (p.color ? p.theme[p.color] : p.theme.red)};
  }
`

