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
`

export const Btn = styled.button`
  border: none;
  cursor: pointer;
  font-size: 1.3rem;
  font-weight: 700;
  color: ${p => p.theme.white};
  background-color: ${p => p.theme.red};
  border-radius: ${p => p.theme.buttonR};
  align-self: center;
  padding: 0.5rem 1.5rem;
  transition: all 0.2s ease-in-out;

`
