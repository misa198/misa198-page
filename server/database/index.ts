import mongoose from "mongoose";

const mongoUrl = process.env.MONGO_URL;

export const connectDb = async (): Promise<void> => {
  await mongoose.connect(mongoUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  });
  // eslint-disable-next-line no-console
  console.log("Connected to MongoDB 💿");
};
