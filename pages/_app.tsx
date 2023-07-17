import { ApolloProvider } from '@apollo/client';
import { useApollo } from '../apollo';
import type { AppProps } from 'next/app';
import Head from 'next/head';

export default function App({ Component, pageProps }: AppProps) {
  const client = useApollo();

  return (
    <ApolloProvider client={client}>
      <Head>
        <title>THE edu app</title>
      </Head>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}
