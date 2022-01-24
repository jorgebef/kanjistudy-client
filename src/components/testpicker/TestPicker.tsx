import React from 'react'
import styled from 'styled-components'

const QuizSpace = styled('div')`
  background-color: #888;
  border-radius: 1rem;
  margin: 1rem;
`

const Button = styled.button`
  background-color: red;
`

const TestPicker: React.FC = () => {
  return (
    <div>
      <QuizSpace>
        JPLT N5
        <Button onClick={() => alert('KEKW')}>Button</Button>
      </QuizSpace>
      <QuizSpace>
        JPLT N4
        <Button onClick={() => alert('KEKW')}>Button</Button>
      </QuizSpace>
      <QuizSpace>
        JPLT N3
        <Button onClick={() => alert('KEKW')}>Button</Button>
      </QuizSpace>
      <QuizSpace>
        JPLT N2
        <Button onClick={() => alert('KEKW')}>Button</Button>
      </QuizSpace>
      <QuizSpace>
        JPLT N1
        <Button onClick={() => alert('KEKW')}>Button</Button>
      </QuizSpace>
      <QuizSpace>
        CUSTOM
        <Button onClick={() => alert('KEKW')}>Button</Button>
      </QuizSpace>
    </div>
  )
}

export default TestPicker
