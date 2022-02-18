import styled from 'styled-components'

type kanaTypeSwitchProps = {
  kanaType: 'hiragana' | 'katakana'
  setKanaType: React.Dispatch<React.SetStateAction<'hiragana' | 'katakana'>>
}

const KanaTypeSwitch = ({ kanaType, setKanaType }: kanaTypeSwitchProps) => {
  return (
    <Wrapper>
      <label>
        <Checkbox
          checked={kanaType === 'hiragana'}
          onChange={() => setKanaType('hiragana')}
        />
        Hiragana
      </label>
      <label>
        <Checkbox
          checked={kanaType === 'katakana'}
          onChange={() => setKanaType('katakana')}
        />
        Katakana
      </label>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  --thumb-shadow: calc(25px - (50px * var(--is-left-most))) 0 0 -15px #000 inset;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  padding: ${p => p.theme.compPadSm};

  & label {
    font-size: 1.1rem;
    font-weight: 500;
    display: flex;
    align-items: center;
    cursor: pointer;
  }
`

const Checkbox = styled.input.attrs(() => ({
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

export default KanaTypeSwitch
