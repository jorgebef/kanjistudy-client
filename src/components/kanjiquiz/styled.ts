import styled from 'styled-components'

export const QContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 100%;
  max-width: ${p => p.theme.mediaMd};
`

export const Question = styled.div`
  background-color: ${p => p.theme.lightgrey};
  display: grid;
  grid-template-columns: 2fr 6fr;
  gap: 1rem;
  text-align: center;
  align-items: center;
  justify-content: center;
  padding: ${p => p.theme.compPadLg};
  justify-self: stretch;
  align-items: start;
  justify-content: center;
  min-height: 4rem;
  border-radius: ${p => p.theme.borderR};

  @media (max-width: ${p => p.theme.mediaMd}) {
    padding: ${p => p.theme.compPadMd};
  }

  span {
    font-size: 5rem;
    font-weight: 700;
    align-self: center;
  }

  & > ul {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    align-self: stretch;
    gap: 1rem;
    align-items: stretch;
    justify-content: center;

    @media (max-width: ${p => p.theme.mediaMd}) {
      display: flex;
      flex-direction: column;
      /* padding: 2rem; */
    }
  }

  & li {
    display: flex;
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
  }
  & li:hover {
    color: ${p => p.theme.white};
    background-color: ${p => p.theme.grey};
  }
  & li.incorrect {
    color: ${p => p.theme.white};
    background-color: ${p => p.theme.red};
  }
  & li.correct {
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
