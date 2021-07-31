import { useEffect, FC } from "react";
import type { AppProps } from "next/app";
import Head from "next/head";
import { Provider } from "react-redux";
import { ThemeProvider, CssBaseline } from "@material-ui/core";
import { ThemeProvider as SPThemeProvider } from "styled-components";
import GlobalStyles from "styles/GlobalStyles";

import store from "store";
import materialTheme from "themes/material-theme";
import sTTheme from "themes/styled-components-theme";
import Layout from "layouts";

const MyApp: FC<AppProps> = (props: AppProps) => {
  const { Component, pageProps } = props;

  useEffect(() => {
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <>
      <Head>
        <title>Misa198</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=5"
        />
      </Head>
      <Provider store={store}>
        <ThemeProvider theme={materialTheme}>
          <SPThemeProvider theme={sTTheme}>
            <CssBaseline />
            <GlobalStyles />
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </SPThemeProvider>
        </ThemeProvider>
      </Provider>
    </>
  );
};

export default MyApp;
