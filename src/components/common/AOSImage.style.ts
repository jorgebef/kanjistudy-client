import styled from 'styled-components'

export const AOSopacity = styled.div`
  display: flex;
  opacity: 0;
  -webkit-transition: all ${p => p.theme.transition};
  transition: all ${p => p.theme.transition};
  &.appear {
    opacity: 1;
  }
`

export const AOStranslateR = styled.div`
  display: flex;
  opacity: 0;
  position: relative;
  right: -20rem;
  -webkit-transition: all ${p => p.theme.transitionL};
  transition: all ${p => p.theme.transitionL};
  &.appear {
    opacity: 1;
    right: 0;
  }
`

export const AOStranslateL = styled.div`
  display: flex;
  opacity: 0;
  position: relative;
  left: -20rem;
  -webkit-transition: all ${p => p.theme.transitionL};
  transition: all ${p => p.theme.transitionL};
  &.appear {
    opacity: 1;
    left: 0;
  }
`
