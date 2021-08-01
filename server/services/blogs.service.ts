import { Blog as IBlog } from "types/Blog";
import Blog from "../database/models/Blog";

import { maxPageSize } from "../../constants/server";

interface GetBlogsQuery {
  page: number;
  key?: string;
}

const getBlogs = async (query: GetBlogsQuery): Promise<IBlog[]> => {
  const { page = 1, key } = query;
  if (!key) {
    const blogs = await Blog.find({})
      .limit(maxPageSize)
      .skip((page - 1) * maxPageSize)
      .sort({ createdAt: -1 });
    return blogs;
  }

  const blogs = await Blog.find({
    $or: [{ title: { $regex: key, $options: "i" } }, { tags: key }],
  })
    .limit(maxPageSize)
    .skip((page - 1) * maxPageSize)
    .sort({ createdAt: -1 });
  return blogs;
};

export default { getBlogs };
