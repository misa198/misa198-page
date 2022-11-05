import '@/styles/globals.css';
import createEmotionCache from '@/utils/createEmotionCache';
import { CacheProvider, EmotionCache } from '@emotion/react';
import type { AppProps } from 'next/app';

const clientSideEmotionCache = createEmotionCache();

export interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

const App = ({
  Component,
  pageProps,
  emotionCache = clientSideEmotionCache,
}: MyAppProps) => (
  <CacheProvider value={emotionCache}>
    <Component {...pageProps} />
  </CacheProvider>
);

export default App;
