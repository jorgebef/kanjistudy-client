import { ReactComponent as WaveSVG1 } from '../../assets/waveSeparator1.svg'
import { ReactComponent as WaveSVG2 } from '../../assets/waveSeparator2.svg'
import { ThemeType } from '../../styles/theme'
import styled from 'styled-components'

export interface WaveProps {
  color?: keyof ThemeType
}

export const WaveTop = styled(WaveSVG1)<WaveProps>`
  margin-top: 4.5rem;
  margin-bottom: -5px;
  width: 100%;

  path {
    fill: ${p => (p.color ? p.theme[p.color] : p.theme.red)};
  }
`

export const WaveBottom = styled(WaveSVG2)<WaveProps>`
  margin-top: -5px;
  margin-bottom: 3rem;
  width: 100%;
  path {
    fill: ${p => (p.color ? p.theme[p.color] : p.theme.red)};
  }
`
