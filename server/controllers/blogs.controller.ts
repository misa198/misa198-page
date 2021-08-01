import { Request, Response } from "express";

import { GetBlogsDto } from "server/dtos/blogs/get-blogs.dto";
import service from "../services/blogs.service";

const getBlogs = async (req: Request, res: Response): Promise<Response> => {
  const query = req.query as unknown as GetBlogsDto;
  try {
    const [blogs, totalPages] = await service.getBlogs(query);
    return res.send({
      data: blogs,
      meta: {
        page: query.page,
        totalPage: totalPages,
      },
    });
  } catch (e) {
    return res.status(400).send({ message: "Bad request" });
  }
};

const getBlog = async (req: Request, res: Response): Promise<Response> => {
  console.log("Hey ===========");
  const path = req.params.slug;
  try {
    const blog = await service.getBlog(path);
    if (blog) return res.send(blog);
    return res.status(404).send({ message: "Not found" });
  } catch (e) {
    return res.status(400).send({ message: "Bad request" });
  }
};

export default { getBlogs, getBlog };
