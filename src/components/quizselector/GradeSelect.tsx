import { Title } from '../common/Title'
import * as S from './styles'

type LevelSelectorProps = {
  grades: number
  cols?: number
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const GradeSelect = ({ grades, cols, onChange }: LevelSelectorProps) => {
  return (
    <S.Levels cols={cols}>
      <Title fontSize='sm'>Levels</Title>
      <div className='checkbox-cont'>
        {Array(grades)
          .fill(null)
          .map((_, i) => {
            i++
            return (
              <label key={i}>
                <S.Checkbox value={i} onChange={onChange} />
                Grade {i}
              </label>
            )
          })}
      </div>
    </S.Levels>
  )
}

export default GradeSelect
