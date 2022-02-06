import { ThemeType } from '../../styles/theme'
import * as S from './styles'

type WaveRowProps = {
  color: keyof ThemeType
  children: React.ReactNode
}

const WaveRow = ({ color, children }: WaveRowProps) => {
  return (
    <>
      <S.WaveTop color={color} />
      {children}
      <S.WaveBottom color={color} />
    </>
  )
}

export default WaveRow
