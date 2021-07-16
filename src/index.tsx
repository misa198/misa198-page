import React from "react";
import ReactDOM from "react-dom";
import { HashRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { ThemeProvider } from "@material-ui/core";
import { ThemeProvider as SPThemeProvider } from "styled-components";

import theme from "src/themes/material-ui.theme";
import spTheme from "src/themes/styled-components.theme";
import GlobalStyle from "src/shared/styles/GlobalStyle";
import store from "src/store";
import App from "src/App";
import reportWebVitals from "src/reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <SPThemeProvider theme={spTheme}>
        <GlobalStyle />
        <HashRouter>
          <Provider store={store}>
            <App />
          </Provider>
        </HashRouter>
      </SPThemeProvider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
