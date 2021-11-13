import DefaultLayout from "@components/layouts/DefaultLayout";
import type { AppProps } from "next/app";
import Head from "next/head";
import { FC } from "react";
import { Provider } from "react-redux";
import store from "store";

const MyApp: FC<AppProps> = (props: AppProps) => {
  const { Component, pageProps } = props;

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
        <DefaultLayout>
          <Component {...pageProps} />
        </DefaultLayout>
      </Provider>
    </>
  );
};

export default MyApp;
