import 'styled-components'
import { defaultTheme } from '../styles/themes/default.js'

type ThemeType = typeof defaultTheme

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType {}
}
