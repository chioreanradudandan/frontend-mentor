import { createGlobalStyle } from 'styled-components'
import theme from './theme'

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    font-family: ${theme.fonts.family};
    font-size: ${theme.fonts.baseSize};
  }

  ul,
  ol {
    padding: 0;
  }

  body,
  h1,
  h2,
  h3,
  h4,
  h5,
  p,
  figure,
  picture {
    margin: 0;
  }
`

export default GlobalStyle
