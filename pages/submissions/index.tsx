import Layout from '@/components/layout';
import { useQuery, gql } from '@apollo/client';

const GET_SUBMISSIONS = gql`
  {
    submissions {
      id
      institution_id
      year
      students_total
      undergraduates_total
      postgraduates_total
      staff_total
      academic_papers
      institution_income
    }
  }
`;

export default function Submissions() {
  const { data, loading } = useQuery(GET_SUBMISSIONS);

  if (loading) return <>LOADING DATA...</>;

  // Format to a table layout

  const collection = data.submissions;

  return (
    <Layout
      main={
        <div>
          <h1>Submissions</h1>
          {collection.map((sub: any, idx: number) => (
            <div key={sub.id}>
              <div>ID: {sub.id}</div>
              <div key={idx}>Year: {sub.year}</div>
              <div key={idx}>Students Total: {sub.students_total}</div>
              <div key={idx}>Undergrads Total: {sub.undergraduates_total}</div>
              <div key={idx}>Postgrads Total: {sub.postgraduates_total}</div>
              <div key={idx}>Staff Total: {sub.staff_total}</div>
              <div key={idx}>Academic Papers: {sub.academic_papers}</div>
              <div key={idx}>Institution Income: {sub.institution_income}</div>
              <div>
                -------------------------------------------------------------
              </div>
            </div>
          ))}
        </div>
      }
    />
  );
}
