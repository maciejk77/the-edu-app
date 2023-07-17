// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import SUBMISSIONS_SEED_DATA from '../../data/submissions.json';

// test endpoint

export interface ISubject {
  name: string;
  academic_papers: number;
  students_total: number;
  student_rating: number;
}

export interface ISubmission {
  id: string;
  institution_id: string;
  year: number;
  students_total: number;
  undergraduates_total: number;
  postgraduates_total: number;
  staff_total: number;
  academic_papers: number;
  institution_income: number;
  subjects: ISubject[];
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ISubmission[]>
) {
  res.status(200).json(SUBMISSIONS_SEED_DATA);
}
