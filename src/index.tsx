import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "@material-ui/core";
import { BrowserRouter } from "react-router-dom";

import theme from "src/themes/material-ui.theme";
import GlobalStyle from "src/shared/styles/GlobalStyle";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </GlobalStyle>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
