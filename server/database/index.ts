import mongoose from 'mongoose';
import { NextApiHandler, NextApiRequest, NextApiResponse } from 'next';

const connectDB =
  (handler: NextApiHandler) =>
  async (req: NextApiRequest, res: NextApiResponse): Promise<any> => {
    if (mongoose.connections[0].readyState) {
      return handler(req, res);
    }
    // Use new db connection
    await mongoose.connect(process.env.MONGO_URL, {
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true,
      useNewUrlParser: true,
    });
    // eslint-disable-next-line no-console
    console.log('Connected to MongoDB 💿');
    return handler(req, res);
  };

export default connectDB;
