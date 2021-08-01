import axios, { AxiosResponse } from "axios";
import queryString from "query-string";

import { GetBlogsDto } from "server/dtos/blogs/get-blogs.dto";
import { Blog, GetBlogsResponse } from "types/Blog";

const baseApiUrl = `${
  process.env.NEXT_PUBLIC_APP_DOMAIN || process.env.APP_DOMAIN
}/api`;

export const getBlogs = async (
  query: GetBlogsDto,
): Promise<AxiosResponse<GetBlogsResponse>> => {
  const stringifiedQuery = queryString.stringify(query);
  return axios.get(`/api/blogs?${stringifiedQuery}`);
};

export const getBlog = async (slug: string): Promise<AxiosResponse<Blog>> => {
  console.log(`${baseApiUrl}/blogs/${slug}`);
  console.log("=================");
  return axios.get(`https://misa198.tk/api/blogs/${slug}`);
};
