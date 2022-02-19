import { Title } from '../common/Title'
import * as S from './styles'

type LevelSelectorProps = {
  grade: number[] | null
  setGrade: (g: number[] | null) => void
}

const LevelSelect = ({ grade, setGrade }: LevelSelectorProps) => {
  const updateLevel = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val: number = Number(e.currentTarget.value)
    const checked: boolean = e.currentTarget.checked
    let newGrade: typeof grade
    if (!grade) {
      newGrade = [val]
    } else {
      newGrade = checked ? [...grade, val] : grade.filter(v => v !== val)
    }
    // De-duplicate grades from the array
    const uniqueGradeArr = [...Array.from(new Set(newGrade))]
    setGrade(uniqueGradeArr == [] ? null : uniqueGradeArr)
    // }
  }

  return (
    <S.Wrapper>
      <Title fontSize='sm'>JLPT Level</Title>
      <div className='checkbox-cont'>
        {Array(5)
          .fill(null)
          .map((_, i) => {
            const N = 5 - i
          // API only fetches based on Grades, from 1 to 5
          // I prefer naming as JLPT levels, from N5 to N1
            i++
            return (
              <label key={i}>
                <S.Checkbox
                  checked={grade?.find(g => g == i) ? true : false}
                  value={i}
                  onChange={updateLevel}
                />
                N{N}
              </label>
            )
          })}
      </div>
    </S.Wrapper>
  )
}

export default LevelSelect
