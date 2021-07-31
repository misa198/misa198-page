import { Schema, model } from "mongoose";

const Blog = new Schema({
  slug: String,
  title: String,
  author: String,
  content: String,
  createdAt: Date,
  updatedAt: Date,
  images: [String],
  tags: [String],
  seo: {
    title: String,
    description: String,
    image: String,
  },
});

export default model("Blog", Blog);
