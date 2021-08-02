import { NextApiRequest, NextApiResponse } from "next";

import connectDB from "server/database";
import { GetBlogsDto } from "server/dtos/blogs/get-blogs.dto";
import service from "server/services/blogs.service";
import { getBlogsValidation } from "server/validations/blogs/get-blogs.validation";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "GET") {
    getBlogsValidation(req, res);
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
  }
};

export default connectDB(handler);
