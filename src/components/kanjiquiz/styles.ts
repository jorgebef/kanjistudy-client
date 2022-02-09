import styled from 'styled-components'

export const QContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 100%;
  max-width: ${p => p.theme.mediaMd};
`

export const Question = styled.div`
  display: grid;
  grid-template-columns: 2fr 6fr;
  gap: 1rem;
  text-align: center;
  justify-self: stretch;
  align-items: center;
  justify-content: center;
  padding: ${p => p.theme.compPadLg};
  background-color: ${p => p.theme.lightgrey};

  @media (max-width: ${p => p.theme.mediaMd}) {
    grid-template-columns: 1fr;
    place-items: center;
    padding: ${p => p.theme.compPadMd};
  }
`

export const QuestionKanji = styled.span`
  font-size: 5rem;
  font-weight: 700;
  align-self: center;
`

export const AnswerUL = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  /* align-self: stretch; */
  gap: 1rem;
  align-items: stretch;
  justify-content: center;

  @media (max-width: ${p => p.theme.mediaMd}) {
    display: flex;
    min-width: 20rem;
    max-width: 100%;
    flex-direction: column;
  }
`

export const AnswerLi = styled.li`
  display: flex;
  cursor: pointer;
  text-decoration: none;
  text-align: center;
  justify-content: center;
  align-items: center;
  font-size: 1.1rem;
  font-weight: 700;
  padding: 0.5rem 1rem;
  border-radius: ${p => p.theme.borderR};
  list-style: none;
  transition: all 0.3s linear;
  background-color: ${p => p.theme.white};

  &:hover {
    /* color: ${p => p.theme.white}; */
    background-color: ${p => p.theme.grey};
  }
  &.incorrect {
    color: ${p => p.theme.white};
    background-color: ${p => p.theme.red};
  }
  &.correct {
    color: ${p => p.theme.white};
    background-color: ${p => p.theme.green};
  }
`

export const BtnContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 3rem;
  align-items: center;
  justify-content: center;
`
