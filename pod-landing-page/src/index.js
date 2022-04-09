import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "styled-components";
import { Normalize } from "styled-normalize";
import GlobalStyle from "./global-style";
import theme from "./theme";
import Page from "./components/page";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Normalize />
      <GlobalStyle />
      <Page></Page>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
