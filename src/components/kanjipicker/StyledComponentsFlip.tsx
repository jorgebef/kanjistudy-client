import styled from 'styled-components'
// import { Grid } from '..'

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
  grid-template-columns: repeat(6, 1fr);
  width: 100%;
  gap: 1rem;
  padding: 1rem;
  /* border-radius: ${p => p.theme.borderR}; */
  /* background-color: ${p => p.theme.violet}; */
`

type KanjiProps = {
  kanji: string
}

export const KanjiCell = styled.a<KanjiProps>`
  display: flex;
  font-size: 3rem;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  min-height: 5rem;
  /* This gives the 3d effect */
  perspective: 1000px;
  overflow: hidden;

  & .wrapper {
    display: flex;
    flex-grow: 1;
    position: relative;
    width: 100%;
    height: 100%;
    transition: transform 0.5s;
    transform-style: preserve-3d;
    align-self: center;
    align-items: center;
  }

  &.flipped > .wrapper {
    transform: rotateY(180deg);
  }

  & .kanji,
  .meaning {
    text-align: center;
    position: absolute;
    width: 100%;
    align-self: center;
    align-items: center;
    justify-self: center;
    /* height: 100%; */
    border-radius: 1rem;
    -webkit-backface-visibility: hidden; /* Safari */
    backface-visibility: hidden;
  }

  & .kanji {
    background-color: ${p => p.theme.lavender};
  }

  & .meaning {
    transform: rotateY(180deg);
    color: ${p => p.theme.bg};
    background-color: ${p => p.theme.purple};
  }
`
