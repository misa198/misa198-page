import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "@material-ui/core";
import { ThemeProvider as SPThemeProvider } from "styled-components";

import theme from "src/themes/material-ui.theme";
import spTheme from "src/themes/styled-components.theme";
import GlobalStyle from "src/shared/styles/GlobalStyle";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <SPThemeProvider theme={spTheme}>
        <GlobalStyle />
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </SPThemeProvider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
