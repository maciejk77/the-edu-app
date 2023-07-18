import Layout from '@/components/layout';
import { useQuery, gql } from '@apollo/client';
import { ISubject } from '../api/submissions';

const GET_SUBJECTS = gql`
  {
    subjects {
      name
    }
  }
`;

export default function Subjects() {
  const { data, loading } = useQuery(GET_SUBJECTS);

  if (loading) return <>LOADING DATA...</>;

  // Non distinct atm, filtered out on FE
  // Add unique to GraphQL
  // Refactor to drop-down

  const items = data.subjects.map(({ name }: { name: string }) => name);
  const collection = [...new Set(items)];

  const Dropdown = () => (
    <select style={st.container}>
      <option>--- subject ---</option>
      {collection.map((item: any, idx) => (
        <option key={`${item}-${idx}`} name={item}>
          {item}
        </option>
      ))}
    </select>
  );

  return (
    <Layout
      main={
        <>
          <h1>Subjects</h1>
          <Dropdown />
        </>
      }
    />
  );
}

const st = {
  container: {
    border: '1px solid black',
    padding: 5,
    outline: 'none',
  },
};
