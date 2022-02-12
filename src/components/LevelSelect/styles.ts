import styled from "styled-components";

export const LevelsWrapper = styled.div`
  --thumb-shadow: calc(25px - (50px * var(--is-left-most))) 0 0 -15px #000 inset;
  display: flex;
  flex-direction: column;
  align-items: center;

  & > .checkbox-cont {
    display: flex;
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
    gap: 1rem;
    padding: ${p => p.theme.compPadSm};
  }

  & label {
    display: flex;
    align-items: center;
    cursor: pointer;
  }
`

export const Checkbox = styled.input.attrs(() => ({
  type: 'checkbox',
  multiple: true,
}))`
  -webkit-appearance: none;
  background-color: ${p => p.theme.grey};
  width: 1rem;
  height: 1rem;
  border-radius: 0.2rem;
  cursor: pointer;
  box-shadow: inset 0px 0px 3px #777;
  margin-right: 0.3rem;

  &:checked {
    box-shadow: none;
    background-color: ${p => p.theme.red};
  }
`
