import Layout from '@/components/layout';
import { useQuery, gql } from '@apollo/client';
import { ISubmission } from '../api/submissions';

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

  const { submissions } = data;

  return (
    <Layout
      main={
        <>
          <h1>Submissions</h1>
          <p>Simple render of all submissions</p>

          <table style={st.container}>
            <thead>
              <tr style={st.header}>
                <th style={st.headerItem}>ID</th>
                <th style={st.headerItem}>Institution ID</th>
                <th style={st.headerItem}>Year</th>
                <th style={st.headerItem}>Students Total</th>
                <th style={st.headerItem}>Undergrads Total</th>
                <th style={st.headerItem}>Postgrads Total</th>
                <th style={st.headerItem}>Staff Total</th>
                <th style={st.headerItem}>Academic Papers</th>
                <th style={st.headerItem}>Institution Income</th>
              </tr>
            </thead>

            {submissions.map((sub: ISubmission) => (
              <tbody key={sub.id}>
                <tr>
                  <td style={st.item}>{sub.id}</td>
                  <td style={st.item}>{sub.institution_id}</td>
                  <td style={st.item}>{sub.year}</td>
                  <td style={st.item}>{sub.students_total}</td>
                  <td style={st.item}>{sub.undergraduates_total}</td>
                  <td style={st.item}>{sub.postgraduates_total}</td>
                  <td style={st.item}>{sub.staff_total}</td>
                  <td style={st.item}>{sub.academic_papers}</td>
                  <td style={st.item}>{sub.institution_income}</td>
                </tr>
              </tbody>
            ))}
          </table>
        </>
      }
    />
  );
}

const st = {
  container: {
    border: '1px solid black',
  },
  header: {
    backgroundColor: 'black',
    color: 'white',
  },
  headerItem: {
    padding: 15,
  },
  item: {
    padding: 5,
  },
};
