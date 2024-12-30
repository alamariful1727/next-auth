import { NextApiRequest, NextApiResponse } from 'next';

// ...existing code...

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({ status: 'ok' });
}

// ...existing code...
