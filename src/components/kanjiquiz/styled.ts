import styled from 'styled-components'

export const QContainer = styled.div`
  display: flex;
  padding: 2rem ${p => p.theme.sidePad};
  gap: 2rem;
`

export const Question = styled.div`
  background-color: ${p => p.theme.lavender};
  display: flex;
  flex-direction: column;
  padding: 1.5rem;
  justify-self: stretch;
  align-items: start;
  justify-content: center;
  min-height: 4rem;
`
