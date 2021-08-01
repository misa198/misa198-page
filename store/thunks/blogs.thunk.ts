import { createAsyncThunk } from "@reduxjs/toolkit";

import { GetBlogsDto } from "server/dtos/blogs/get-blogs.dto";
import { getBlogs } from "services/blogs-api.service";
import { GetBlogsResponse } from "types/Blog";

export const fetchBlogs = createAsyncThunk<GetBlogsResponse, GetBlogsDto>(
  "blogs/fetchBlogs",
  async (query) => {
    const res = await getBlogs(query);
    return res.data;
  },
);
