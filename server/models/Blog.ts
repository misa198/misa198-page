/* eslint-disable import/no-mutable-exports */
import mongoose from 'mongoose';

const Blog = new mongoose.Schema({
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
  published: Boolean,
});

let BlogModel;

try {
  BlogModel = mongoose.model('Blog');
} catch (e) {
  BlogModel = mongoose.model('Blog', Blog);
}

export default BlogModel;
