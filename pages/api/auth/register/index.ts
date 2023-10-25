import { NextApiRequest, NextApiResponse } from 'next';

export default async function POST(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    try {
      const { email, password } = req.body;
      // validate email and password
      console.log({ email, password });

      res.status(200).json({ message: 'success' });
    } catch (e) {
      console.error(e);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
}
