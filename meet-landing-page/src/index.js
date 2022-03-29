import React from 'react'
import ReactDOM from 'react-dom'
import { ThemeProvider } from 'styled-components'
import { Normalize } from 'styled-normalize'
import { theme, GlobalStyle } from './common/styles'
import LandingPage from './landing-page/landing-page'

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Normalize />
      <GlobalStyle />
      <LandingPage />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root'),
)
