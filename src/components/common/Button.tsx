import styled from "styled-components"

export const BtnRed = styled.button`
  border: none;
  cursor: pointer;
  font-size: 1.3rem;
  font-weight: 500;
  color: ${p => p.theme.bg};
  background-color: ${p => p.theme.red};
  border-radius: ${p => p.theme.buttonR};
  align-self: center;
  padding: 0.5rem 1.5rem;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: ${p => p.theme.pink};
  }
`

export const Btn = styled.button`
  border: none;
  cursor: pointer;
  font-size: 1.3rem;
  font-weight: 500;
  color: ${p => p.theme.bg};
  background-color: ${p => p.theme.violet};
  border-radius: ${p => p.theme.buttonR};
  align-self: center;
  padding: 0.5rem 1.5rem;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: ${p => p.theme.pink};
  }
`
