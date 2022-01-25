import styled from 'styled-components'
// import { KanjiType } from '../../utils/kanjiData'

export const RowGradient = styled.div`
  padding: 10rem ${p => p.theme.sidePad};
  background: linear-gradient(
    45deg,
    ${p => p.theme.blue} 10%,
    ${p => p.theme.violet} 90%
  );
  clip-path: polygon(0 10%, 100% 0, 100% 90%, 0 100%);

  @media (min-width: ${p => p.theme.mediaMd}) {
    clip-path: polygon(0 10%, 100% 0, 100% 90%, 0 100%);
  }
  @media (min-width: ${p => p.theme.mediaLg}) {
    clip-path: polygon(0 10%, 100% 0, 100% 90%, 0 100%);
  }
`

export const QuizGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  width: 100%;
  max-width: ${p => p.theme.mediaMd};
  gap: 1rem;

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
  background-color: ${p => p.theme.lavender};
  border-radius: ${p => p.theme.borderR};
  min-height: 5rem;
  /* This gives the 3d effect */
  perspective: 1000px;
  overflow: hidden;

  & .kanji {
    /* background-color: ${p => p.theme.lavender}; */
  }
`
