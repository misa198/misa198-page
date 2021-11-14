import { Blog, GetBlogsResponse } from '@models/Blog';
import { GetBlogsDto } from '@server/dtos/blogs/get-blogs.dto';
import { AxiosResponse } from 'axios';
import { axiosApi } from './axiosInstance';
import queryString from 'query-string';

export const getBlogs = async (
  query: GetBlogsDto,
): Promise<AxiosResponse<GetBlogsResponse>> => {
  const stringifiedQuery = queryString.stringify(query);
  return axiosApi.get(`/blogs?${stringifiedQuery}`);
};

export const getBlog = async (slug: string): Promise<AxiosResponse<Blog>> => {
  return axiosApi.get(`/blogs/${slug}`);
};
