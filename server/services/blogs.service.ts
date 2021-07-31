import { Blog as IBlog } from "types/Blog";
import Blog from "../database/models/Blog";

const getBlogs = async (): Promise<IBlog[]> => {
  const blogs = await Blog.find({});
  return blogs;
};

export default { getBlogs };
