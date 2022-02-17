import styled from 'styled-components'

type GridProps = {
  cols?:number
}

export const Grid = styled.div<GridProps>`
  display: grid;
  grid-template-columns: repeat(${p => p.cols ? p.cols : '8'}, 1fr);
  align-items:center;
  justify-content:center;
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

type CellProps = {
  kanji?: string
  kana?: string
  newRow?:boolean
}

export const Cell = styled.a<CellProps>`
  display: flex;
  font-size: 3rem;
  justify-content: center;
  align-items: center;
  min-height: 5rem;
  grid-column-start: ${p => p.newRow ? 1 : null};
  overflow: hidden;
  cursor: pointer;
  background-color: ${p => p.theme.white};
  border-radius: ${p => p.theme.buttonR};
  transition: all ${p => p.theme.transition};

  &:hover {
    background-color: ${p => p.theme.red};
  }
`
