// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import INSTITUTIONS_SEED_DATA from '../../data/institutions.json';

// test endpoint

interface IInstitution {
  name: string;
  address: string;
  country: string;
  region: string;
  id: string;
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<IInstitution[]>
) {
  res.status(200).json(INSTITUTIONS_SEED_DATA);
}
