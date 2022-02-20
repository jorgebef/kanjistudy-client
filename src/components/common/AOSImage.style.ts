import styled from 'styled-components'

export const AOSbase = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  gap: 2rem;
  opacity: 0;
  width: 100%;
  box-sizing: border-box;
  -webkit-transition: all ${p => p.theme.transitionL};
  transition: all ${p => p.theme.transitionL};

  & > p {
    padding: ${p => p.theme.compPadSm};
    font-size: 1.2rem;
    font-weight: 500;
    text-align: justify;
    max-width: 50%;
  }

  @media (max-width: ${p => p.theme.mediaMd}) {
    flex-direction: column;
  }
`

export const AOStranslateR = styled(AOSbase)`
  right: -20rem;
  align-items: center;
  justify-content: flex-start;

  @media (max-width: ${p => p.theme.mediaMd}) {
    align-items: flex-start;
    justify-content: center;
  }

  &.appear {
    opacity: 1;
    right: 0;
  }
`

export const AOStranslateL = styled(AOSbase)`
  left: -20rem;
  align-items: center;
  justify-content: flex-end;

  @media (max-width: ${p => p.theme.mediaMd}) {
    align-items: flex-end;
    justify-content: center;
  }

  &.appear {
    opacity: 1;
    left: 0;
  }
`
