import styled from 'styled-components'
import { Btn } from '../common/Button'

export const QuizMenuContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  padding: ${p => p.theme.compPadLg};
  background-color: ${p => p.theme.lightgrey};
  border-radius: ${p => p.theme.borderR};
  padding: ${p => p.theme.compPadMd};
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
  color: ${p => p.theme.black};
`

export const ValueDisplay = styled.span`
  font-size: 1.3rem;
  font-weight: 700;
  color: ${p => p.theme.red};
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
    p.theme.red +
    ' 0%, ' +
    p.theme.red +
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
    background-color: ${p => p.theme.red};
    cursor: pointer;
    box-shadow: none;
  }
`

export const SubmitBtn = styled(Btn)`
  justify-self: center;
`
