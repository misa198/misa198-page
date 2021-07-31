import { Children } from "react";
import Document, { Html, Head, Main, NextScript } from "next/document";
import { ServerStyleSheets } from "@material-ui/core";
import { ServerStyleSheet } from "styled-components";

import theme from "themes/material-theme";

export default class MyDocument extends Document {
  render(): JSX.Element {
    return (
      <Html lang="en">
        <Head>
          <meta charSet="utf-8" />
          <meta name="copyright" content="Misa198" />
          <meta name="author" content="Misa198" />
          <meta name="theme-color" content={theme.palette.primary.main} />
          {/* Primary Meta Tags */}
          <meta name="title" content="Misa198" />
          <meta
            name="description"
            content="I am a web developer. Looking forward to working with you."
          />
          {/* Open Graph / Facebook */}
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://misa198.web.app/" />
          <meta property="og:title" content="Misa198" />
          <meta
            property="og:description"
            content="I am a web developer. Looking forward to working with you."
          />
          <meta
            property="og:image"
            content="https://res.cloudinary.com/dumfvnj9f/image/upload/v1626761198/misa198/facebook-og_rzhdqd.png"
          />
          {/* Twitter */}
          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:url" content="https://misa198.web.app/" />
          <meta property="twitter:title" content="Misa198" />
          <meta
            property="twitter:description"
            content="I am a web developer. Looking forward to working with you."
          />
          <meta
            property="twitter:image"
            content="https://res.cloudinary.com/dumfvnj9f/image/upload/v1626761198/misa198/facebook-og_rzhdqd.png"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Righteous&display=swap"
            rel="stylesheet"
          />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
          />
          {/* Global site tag (gtag.js) - Google Analytics */}
          <script
            async
            src="https://www.googletagmanager.com/gtag/js?id=G-TW3SCPQ4RJ"
          />
          <script
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{
              __html: `window.dataLayer = window.dataLayer || [];
              function gtag() {
                dataLayer.push(arguments);
              }
              gtag("js", new Date());
              gtag("config", "G-TW3SCPQ4RJ");`,
            }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

MyDocument.getInitialProps = async (ctx) => {
  const materialUiSheets = new ServerStyleSheets();
  const styledComponentsSheets = new ServerStyleSheet();

  const originalRenderPage = ctx.renderPage;

  ctx.renderPage = () =>
    originalRenderPage({
      enhanceApp: (App) => (props) =>
        styledComponentsSheets.collectStyles(
          materialUiSheets.collect(<App {...props} />),
        ),
    });

  const initialProps = await Document.getInitialProps(ctx);

  return {
    ...initialProps,
    styles: [
      ...Children.toArray(initialProps.styles),
      ...Children.toArray(styledComponentsSheets.getStyleElement()),
      ...Children.toArray(materialUiSheets.getStyleElement()),
    ],
  };
};
