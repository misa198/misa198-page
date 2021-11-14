import connectDB from '@server/database';
import * as service from '@server/services/blogs.service';
import { NextApiRequest, NextApiResponse } from 'next';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'GET') {
    const slug = req.query.slug as string;
    try {
      const blog = await service.getBlog(slug);
      if (blog) return res.send(blog);
      return res.status(404).send({ message: 'Not found' });
    } catch (e) {
      return res.status(400).send({ message: 'Bad request' });
    }
  }
};

export default connectDB(handler);
