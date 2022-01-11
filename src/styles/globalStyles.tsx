import { createGlobalStyle } from 'styled-components'
import { ThemeType } from './theme'

type PropsType = {
  theme: ThemeType
}

const GlobalStyle = createGlobalStyle<PropsType>`

  * {
    margin: 0;
    padding: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    }

  body {
    background: ${p => p.theme.bg};
  }
  `

export default GlobalStyle
