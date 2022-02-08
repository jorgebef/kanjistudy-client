import styled from 'styled-components'

// Taken from stackoverflow, shameless copy paste (but understanding what's happening)
// https://stackoverflow.com/questions/5560248/programmatically-lighten-or-darken-a-hex-color-or-rgb-and-blend-colors
// THANK YOU supersan
function adjustColor(color: string, amount: number) {
  return (
    '#' +
    color
      .replace(/^#/, '')
      .replace(/../g, color =>
        (
          '0' +
          Math.min(255, Math.max(0, parseInt(color, 16) + amount)).toString(16)
        ).substr(-2)
      )
  )
}

export const Btn = styled.button`
  z-index: 1;
  text-decoration: none;
  border: none;
  outline: none;
  cursor: pointer;
  font-size: 1.1rem;
  font-weight: 500;
  color: ${p => p.theme.white};
  background-color: ${p => p.theme.red};
  border-radius: ${p => p.theme.buttonR};
  align-self: center;
  padding: 0.5rem 1.5rem;
  transition: all ${p => p.theme.transition};

  &:hover {
    background-color: ${p => adjustColor(p.theme.red, -30)};
    /* filter: brightness(85%); */
  }
`
