import styled from 'styled-components'

const AOSImage = styled.img`
  opacity: 0;
  transition: all 0.5s ease-in-out;

  &.appear {
    opacity:1;
  }
`

export default AOSImage
