import { fetchBlogs } from '@app/store/thunks/blogs.thunk';
import { Blog } from '@models/Blog';
import { PaginationMeta } from '@models/Pagination';
import { createSlice } from '@reduxjs/toolkit';

interface State {
  blogs: {
    data: Blog[];
    meta: PaginationMeta;
    loading: boolean;
    error: boolean;
  };
}

const initialState: State = {
  blogs: {
    data: [],
    meta: {
      page: 1,
      totalPages: 1,
    },
    loading: false,
    error: false,
  },
};

const slice = createSlice({
  name: 'blogs',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchBlogs.pending, (state) => {
      state.blogs.data = [];
      state.blogs.loading = true;
      state.blogs.error = false;
    });
    builder.addCase(fetchBlogs.fulfilled, (state, action) => {
      state.blogs.data = action.payload.data;
      state.blogs.meta = action.payload.meta;
      state.blogs.loading = false;
    });
    builder.addCase(fetchBlogs.rejected, (state) => {
      state.blogs.error = true;
      state.blogs.loading = false;
    });
  },
});

export default slice.reducer;
