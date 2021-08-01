import { Request, Response } from "express";

import { Blog } from "types/Blog";
import service from "../services/blogs.service";

const getBlogs = async (
  _req: Request,
  res: Response,
): Promise<Response<Blog[], Record<string, any>>> => {
  try {
    const blogs = await service.getBlogs({ page: 1 });
    return res.send(blogs);
  } catch (e) {
    return res.status(400).send({ message: "Bad request" });
  }
};

export default { getBlogs };
