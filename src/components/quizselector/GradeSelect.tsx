import * as S from './styles'

type LevelSelectorProps = {
  grades: number
  cols?: number
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const GradeSelect = ({ grades, cols, onChange }: LevelSelectorProps) => {
  return (
    <S.Levels cols={cols}>
      <S.OptionTitle>Levels</S.OptionTitle>
      <div className='checkbox-cont'>
        {Array(grades)
          .fill(null)
          .map((_, i) => {
            i++
            return (
              <label>
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
