import axios, { AxiosResponse } from "axios";

import { GetBlogsDto } from "server/dtos/blogs/get-blogs.dto";
import { GetBlogsResponse } from "types/Blog";

export const getBlogs = async (
  query: GetBlogsDto,
): Promise<AxiosResponse<GetBlogsResponse>> => {
  return axios.get(`/api/blogs?page=${query.page}&key=${query.key}`);
};
