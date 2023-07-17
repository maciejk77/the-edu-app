import Layout from '@/components/layout';
import { useQuery, gql } from '@apollo/client';

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

  // Non distinct atm, to be filtered out
  // Add unique to GraphQL
  // Refactor to drop-down

  const collection = data.subjects.map(({ name }: { name: string }) => name);

  return (
    <Layout
      main={
        <div>
          <h1>Subjects</h1>
          {collection.map((subjectName: string, idx: number) => (
            <div key={idx}>{subjectName}</div>
          ))}
        </div>
      }
    />
  );
}
