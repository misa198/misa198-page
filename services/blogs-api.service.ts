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
  return axios.get(`${baseApiUrl}/blogs?${stringifiedQuery}`);
};

export const getBlog = async (slug: string): Promise<Blog> => {
  // console.log(`${baseApiUrl}/blogs/${slug}`);
  // return axios.get(`${baseApiUrl}/blogs/${slug}`);
  const result = await fetch(`${baseApiUrl}/blogs/${slug}`).then((res) =>
    res.json(),
  );
  return result;
};
