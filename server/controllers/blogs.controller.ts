import { Request, Response } from "express";

import { Blog } from "types/Blog";
import service from "../services/blogs.service";

const getBlogs = async (
  _req: Request,
  res: Response,
): Promise<Response<Blog[], Record<string, any>>> => {
  const blogs = await service.getBlogs();
  return res.send(blogs);
};

export default { getBlogs };
