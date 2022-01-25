import styled from 'styled-components'
import { Btn } from '../common/Button'

export const QuizMenuContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  padding: ${p => p.theme.compPadLg};
  background-color: ${p => p.theme.lavender};
  border-radius: ${p => p.theme.borderR};
  padding: ${p => p.theme.compPad};
  width: 100%;
  max-width: ${p => p.theme.mediaMd};

  @media (max-width: ${p => p.theme.mediaMd}) {
    grid-template-columns: repeat(1, 1fr);
    padding: ${p => p.theme.compPadMd};
    max-width: 30rem;
  }
`

export const OptionContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;

  @media (max-width: ${p => p.theme.mediaMd}) {
    flex-direction: column;
    gap: 1rem;
  }
`

export const Option = styled.div`
  display: flex;
  justify-self: stretch;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  flex-direction: column;
  text-align: center;
`

export const OptionTitle = styled.span`
  font-size: 1.3rem;
  font-weight: 700;
  color: ${p => p.theme.fg};
`

export const ValueDisplay = styled.span`
  font-size: 1.3rem;
  font-weight: 700;
  color: ${p => p.theme.pink};
`

const backgroundCalc = (v: any, max: any, min: any): number => {
  v = Number(v)
  max = Number(max)
  min = Number(min)
  const k = ((v - min) / (max - min)) * 100
  return k
}

export const Slider = styled.input.attrs(() => ({
  type: 'range',
}))`
  -webkit-appearance: none;
  height: 0.6rem;
  border-radius: 0.2rem;
  margin-top: 1rem;
  width: 13rem;
  /* background-color: ${p => p.theme.grey}; */
  background: ${p =>
    'linear-gradient(to right, ' +
    p.theme.pink +
    ' 0%, ' +
    p.theme.violet +
    ' ' +
    backgroundCalc(p.value, p.max, p.min) +
    '%, ' +
    p.theme.grey +
    ' ' +
    backgroundCalc(p.value, p.max, p.min) +
    '%, ' +
    p.theme.grey +
    ' 100%)'};
  box-shadow: inset 0px 0px 3px #777;

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 1.2rem;
    height: 1.2rem;
    border-radius: 50%;
    background-color: ${p => p.theme.pink};
    cursor: pointer;
    box-shadow: none;
  }
`

export const Levels = styled.div`
  --thumb-shadow: calc(25px - (50px * var(--is-left-most))) 0 0 -15px #000 inset;
  display: flex;
  flex-direction: column;
  align-items: center;

  & > .checkbox-cont {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    margin-top: 1rem;
    flex-direction: column;
    gap: 0.7rem;
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
    background-color: ${p => p.theme.pink};
  }
`

export const SubmitBtn = styled(Btn)`
  justify-self: center;

  &:hover {
    background-color: ${p => p.theme.pink};
  }
`
