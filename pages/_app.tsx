import { wrapper } from '@app/store';
import DefaultLayout from '@components/layouts/DefaultLayout';
import '@styles/global.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import NextNprogress from 'nextjs-progressbar';
import { FC } from 'react';
import 'react-loading-skeleton/dist/skeleton.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'tailwindcss/tailwind.css';

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
      <DefaultLayout>
        <Component {...pageProps} />
        <ToastContainer position="top-right" className="left-auto" />
        <NextNprogress
          color="rgb(0, 133, 121)"
          startPosition={0.3}
          stopDelayMs={200}
          height={3}
          showOnShallow
          options={{
            showSpinner: false,
          }}
        />
      </DefaultLayout>
    </>
  );
};

export default wrapper.withRedux(MyApp);
