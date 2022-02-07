import { ThemeType } from '../../styles/theme'
import { Row } from '../common/PageContainer'
import * as S from './styles'

type WaveRowProps = {
  color: keyof ThemeType
  children: React.ReactNode
}

const WaveRow = ({ color, children }: WaveRowProps) => {
  return (
    <>
      <S.WaveTop color={color} />
      <Row color={color}>{children}</Row>
      <S.WaveBottom color={color} />
    </>
  )
}

export default WaveRow
