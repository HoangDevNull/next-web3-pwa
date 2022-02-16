import { FC, useState, ReactNode } from 'react';
import 'styles/nprogress.css';
import { Hydrate, QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { CacheProvider, EmotionCache } from '@emotion/react';
import createEmotionCache from '@/styles/createEmotionCache';
import { useRouteLoading } from '@/hooks';
import { Provider } from 'react-redux';
import Head from 'next/head';
import store from '@/store/index';
import { appWithTranslation } from 'next-i18next';
import DateAdapter from '@mui/lab/AdapterDayjs';

import type { AppProps } from 'next/app';
import { ModuleLayout } from '@/layout';
import { DAppProvider } from '@usedapp/core';
import { config } from '@/lib/config';
import ThemeLayout from 'layout/ThemeLayout';
import { LocalizationProvider } from '@mui/lab';

const queryClientOption = {
  defaultOptions: {
    queries: { refetchOnWindowFocus: false, retry: false, staleTime: 1000 * 5 },
  },
};

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

const MyApp: FC<MyAppProps> = (props) => {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  const [queryClient] = useState(() => new QueryClient(queryClientOption));
  useRouteLoading();

  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout || ((page: ReactNode) => page);

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <title>Linework</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@Linework" />
        <meta property="og:type" content="website" />
      </Head>
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          <DAppProvider config={config}>
            <LocalizationProvider dateAdapter={DateAdapter}>
              <Hydrate state={pageProps.dehydratedState}>
                <ThemeLayout>
                  {getLayout(<Component {...pageProps} />)}
                  <ModuleLayout />
                </ThemeLayout>
                <ReactQueryDevtools initialIsOpen={false} />
              </Hydrate>
            </LocalizationProvider>
          </DAppProvider>
        </QueryClientProvider>
      </Provider>
    </CacheProvider>
  );
};

export default appWithTranslation(MyApp);
