import axios, { AxiosResponse } from "axios";
import queryString from "query-string";

import { GetBlogsDto } from "server/dtos/blogs/get-blogs.dto";
import { Blog, GetBlogsResponse } from "types/Blog";

export const getBlogs = async (
  query: GetBlogsDto,
): Promise<AxiosResponse<GetBlogsResponse>> => {
  const stringifiedQuery = queryString.stringify(query);
  return axios.get(`/api/blogs?${stringifiedQuery}`);
};

export const getBlog = async (slug: string): Promise<AxiosResponse<Blog>> => {
  return axios.get(`http://localhost:3000/api/blogs/${slug}`);
};
