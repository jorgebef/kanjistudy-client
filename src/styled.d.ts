// import original module declaration
import 'styled-components'
import { ThemeType } from './styles/theme'

// Extending the Theme type with the Typeof from our theme
declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType {
    test?: string
  }
}
