import { NextApiRequest, NextApiResponse } from 'next';

export default (_req: NextApiRequest, res: NextApiResponse) => {
    res.status(200).json({ text: 'Hello! This is how you work with Next.js api endpoints!' });
}