import { Inter } from 'next/font/google';
import Layout from '@/components/layout';
import { gql, useQuery } from '@apollo/client';

const inter = Inter({ subsets: ['latin'] });

const HELLO_QUERY = gql`
  query HelloQuery {
    hello
  }
`;

export default function Home() {
  const { data } = useQuery(HELLO_QUERY);

  return (
    <Layout
      main={
        <div className={`${inter.className}`}>
          <div>Welcome {JSON.stringify(data, null, 2)}</div>
        </div>
      }
    />
  );
}
