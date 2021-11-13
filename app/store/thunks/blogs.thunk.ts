import { getBlogs } from '@app/apis/blogsApi';
import { GetBlogsResponse } from '@models/Blog';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { GetBlogsDto } from '@server/dtos/blogs/get-blogs.dto';

export const fetchBlogs = createAsyncThunk<GetBlogsResponse, GetBlogsDto>(
  'blogs/fetchBlogs',
  async (query) => {
    const res = await getBlogs(query);
    return res.data;
  },
);
