import { createSlice } from "@reduxjs/toolkit";

import { fetchPinnedRepositories } from "store/thunks/home.thunk";
import { PinnedRepository } from "types/PinnedRepository";

interface State {
  pinnedRepositories: {
    data: PinnedRepository[];
    loading: boolean;
    error: boolean;
  };
}

const initialState: State = {
  pinnedRepositories: {
    data: [],
    loading: false,
    error: false,
  },
};

const slice = createSlice({
  name: "home",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchPinnedRepositories.pending, (state) => {
      state.pinnedRepositories.data = [];
      state.pinnedRepositories.loading = true;
      state.pinnedRepositories.error = false;
    });
    builder.addCase(fetchPinnedRepositories.fulfilled, (state, action) => {
      state.pinnedRepositories.data = action.payload;
      state.pinnedRepositories.loading = false;
    });
    builder.addCase(fetchPinnedRepositories.rejected, (state) => {
      state.pinnedRepositories.error = true;
      state.pinnedRepositories.loading = false;
    });
  },
});

export default slice.reducer;
