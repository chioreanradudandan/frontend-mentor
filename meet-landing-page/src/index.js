import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { Normalize } from 'styled-normalize'
import { theme, GlobalStyle } from './common/styles'
import DesignSystemPage from './design-sytem/design-system-page'
import LandingPage from './landing-page/landing-page'

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Normalize />
      <GlobalStyle />
      <Router>
        <Routes>
          <Route exact path="/" element={<LandingPage />} />
          <Route path="/design-system" element={<DesignSystemPage />} />
        </Routes>
      </Router>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root'),
)
