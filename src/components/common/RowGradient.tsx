import styled from 'styled-components'
import { Link, LinkProps } from 'react-router-dom'

export const RowGradient = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  justify-self: center;
  align-self: center;
  padding: 6rem 0;
  background-color: ${p => p.theme.red};
  clip-path: polygon(0 8%, 100% 0, 100% 92%, 0 100%);

  @media (min-width: ${p => p.theme.mediaMd}) {
    clip-path: polygon(0 10%, 100% 0, 100% 90%, 0 100%);
  }
  @media (min-width: ${p => p.theme.mediaLg}) {
    clip-path: polygon(0 15%, 100% 0, 100% 85%, 0 100%);
  }
`

