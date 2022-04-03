import React from 'react'
import ReactDOM from 'react-dom'
import { ThemeProvider } from 'styled-components'
import { Normalize } from 'styled-normalize'
import { RatingComponent } from './components'
import Page from './components/styled/page'
import GlobalStyle from './global-style'
import theme from './theme'

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Normalize />
      <GlobalStyle />
      <Page>
        <RatingComponent />
      </Page>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root'),
)
