import styled from 'styled-components'

interface PopupProps {
  vis?: boolean
  valueset?: boolean
}

export const PopupContainer = styled.div<PopupProps>`
  z-index: 999;
  visibility: ${p => (p.vis ? 'visible' : 'hidden')};
  opacity: ${p => (p.vis ? '1' : '0')};
  display: flex;
  position: fixed;
  align-items: center;
  justify-content: center;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  transition: all ${p => p.theme.transition};
`

export const Popup = styled.div<PopupProps>`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  padding: ${p => p.theme.compPadSm};
  box-sizing: border-box;
  /* width: 50%; */
  max-height: ${p => (p.vis && p.valueset ? '80vh' : '40vh')};
  width: ${p => p.theme.mediaSm};
  font-size: 1.8rem;
  text-align: center;
  align-items: center;
  justify-content: ${p => (p.valueset ? 'flex-start' : 'center')};
  color: ${p => p.theme.black};
  border-radius: ${p => p.theme.borderR};
  background-color: ${p => p.theme.white};
  overflow: scroll;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  transition: inherit;

  @media (max-width: ${p => p.theme.mediaSm}) {
    width: 90%;
  }

  &::-webkit-scrollbar {
    display: none;
  }

  & > .value {
    font-size: 4rem;
    font-weight: 700;
  }
`

export const Overlay = styled.div`
  position: fixed;
  z-index: -9;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: black;
  background-color: #00000035;
  transition: opacity 0.5s ease;
`

export const CloseButton = styled.div<PopupProps>`
  position: absolute;
  opacity: ${p => (p.valueset ? 1 : 0)};
  display: flex;
  flex-direction: column;
  align-self: end;
  justify-content: center;
  margin-top: -0.5rem;
  margin-right: -1.5rem;
  cursor: pointer;
  min-height: 2rem;
  min-width: 2rem;

  & > div {
    --height: 0.2rem;
    --width: 1.6rem;
    align-self: center;
    top: 1rem;
    height: var(--height);
    width: var(--width);
    border-radius: var(--height);
  }

  & > div:nth-child(1) {
    transform: rotate(-45deg);
    margin-bottom: -0.2rem;
    background-color: ${p => p.theme.red};
  }
  & > div:nth-child(2) {
    transform: rotate(45deg);
    background-color: ${p => p.theme.red};
  }
`
