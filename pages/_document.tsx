import Document, { Head, Html, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  render(): JSX.Element {
    return (
      <Html lang="en">
        <Head>
          <meta name="author" content="Misa198" />
          <meta charSet="utf-8" />
          <meta name="copyright" content="Misa198" />
          {/* <meta name="theme-color" content={theme.palette.primary.main} /> */}
          <meta property="og:type" content="website" />
          <meta
            property="fb:app_id"
            content={process.env.NEXT_PUBLIC_FB_APP_ID || process.env.FB_APP_ID}
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Righteous&display=swap"
            rel="stylesheet"
          />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Source+Code+Pro&display=swap"
            rel="stylesheet"
          />
          {/* Global site tag (gtag.js) - Google Analytics */}
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=G-${
              process.env.NEXT_PUBLIC_GG_AN_ID || process.env.GG_AN_ID
            }`}
          />
          <script
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{
              __html: `window.dataLayer = window.dataLayer || [];
              function gtag() {
                dataLayer.push(arguments);
              }
              gtag("js", new Date());
              gtag('config', 'G-${
                process.env.NEXT_PUBLIC_GG_AN_ID || process.env.GG_AN_ID
              }');`,
            }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
          {process.env.NODE_ENV === 'production' && (
            <script
              // eslint-disable-next-line react/no-danger
              dangerouslySetInnerHTML={{
                __html: `
                if (typeof window.__REACT_DEVTOOLS_GLOBAL_HOOK__ === "object") {
                  window.__REACT_DEVTOOLS_GLOBAL_HOOK__.inject = function () {};
                }
              `,
              }}
            />
          )}
        </body>
      </Html>
    );
  }
}
