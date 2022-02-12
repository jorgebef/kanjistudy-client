import * as S from './styles'

const TestPicker: React.FC = () => {
  return (
    <div>
      <S.QuizSpace>
        JPLT N5
        <S.Button onClick={() => alert('KEKW')}>Button</S.Button>
      </S.QuizSpace>
      <S.QuizSpace>
        JPLT N4
        <S.Button onClick={() => alert('KEKW')}>Button</S.Button>
      </S.QuizSpace>
      <S.QuizSpace>
        JPLT N3
        <S.Button onClick={() => alert('KEKW')}>Button</S.Button>
      </S.QuizSpace>
      <S.QuizSpace>
        JPLT N2
        <S.Button onClick={() => alert('KEKW')}>Button</S.Button>
      </S.QuizSpace>
      <S.QuizSpace>
        JPLT N1
        <S.Button onClick={() => alert('KEKW')}>Button</S.Button>
      </S.QuizSpace>
      <S.QuizSpace>
        CUSTOM
        <S.Button onClick={() => alert('KEKW')}>Button</S.Button>
      </S.QuizSpace>
    </div>
  )
}

export default TestPicker
