import styled from 'styled-components'

export const HeroWrapper = styled.div`
  display: flex;
  position: relative;
  align-self: center;
  flex-direction: row;
  gap: 2rem;
  align-items: center;
  justify-content: space-around;
  height: 75vh;
  background-repeat: no-repeat;
  background-size: cover;
  box-sizing: border-box;
  /* margin-bottom: -5rem; */
  padding: ${p => p.theme.compPadLg};
  width: 100%;
  max-width: ${p => p.theme.mediaMd};
  overflow: hidden;
  /* background-color:green; */

  @media (max-width: ${p => p.theme.mediaSm}) {
    /* gap: 2rem; */
    flex-direction: column-reverse;
  }
`

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  left: 10rem;
  align-self: center;
  justify-items: center;
  justify-content: center;
  border-radius: 50%;
  height: 30rem;
  width: 30rem;
  background-color: ${p => p.theme.red + 'd9'};
  transition: all ${p => p.theme.transition};

  @media (max-width: ${p => p.theme.mediaMd}) {
    left: 5rem;
    height: 25rem;
    width: 25rem;
  }

  @media (max-width: ${p => p.theme.mediaSm}) {
    position: unset;
    height: 20rem;
    width: 20rem;
  }
`

export const Separator = styled.div`
  height: 10rem;
  width: 0.15rem;
  background-color: ${p => p.theme.red};

  @media (max-width: ${p => p.theme.mediaSm}) {
    /* position: absolute; */
    height: 0.15rem;
    width: 10rem;
  }
`
