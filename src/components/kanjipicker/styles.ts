import styled from 'styled-components'
import { Wave1, Wave2 } from '../WaveSeparators/styles'

export const QuizGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  width: 100%;
  gap: 1rem;
  padding: ${p => p.theme.compPadSm};
  max-width: ${p => p.theme.mediaMd};
  /* background-color: ${p => p.theme.lightgrey}; */

  @media (max-width: ${p => p.theme.mediaMd}) {
    grid-template-columns: repeat(5, 1fr);
  }

  @media (max-width: ${p => p.theme.mediaSm}) {
    grid-template-columns: repeat(4, 1fr);
  }
`

type KanjiProps = {
  kanji: string
}

export const KanjiCell = styled.a<KanjiProps>`
  display: flex;
  font-size: 3rem;
  justify-content: center;
  align-items: center;
  min-height: 5rem;
  overflow: hidden;
  cursor: pointer;
  background-color: ${p => p.theme.white};
  border-radius: ${p => p.theme.buttonR};
  transition: all ${p => p.theme.transition};

  &:hover {
    background-color: ${p => p.theme.red};
  }
`

export const WaveTop = styled(Wave1)`
`
export const WaveBottom = styled(Wave2)`
  margin-bottom: 4rem;
`
