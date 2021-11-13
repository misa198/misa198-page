import { PinnedRepository } from '@models/PinnedRepository';
import { createSlice } from '@reduxjs/toolkit';
import {
  fetchPinnedRepositories,
  postGoogleSheetContact,
} from '../thunks/home.thunk';

interface State {
  pinnedRepositories: {
    data: PinnedRepository[];
    loading: boolean;
    error: boolean;
  };
  contact: {
    loading: boolean;
    error: boolean;
    success: boolean;
  };
}

const initialState: State = {
  pinnedRepositories: {
    data: [],
    loading: false,
    error: false,
  },
  contact: {
    loading: false,
    error: false,
    success: false,
  },
};

const slice = createSlice({
  name: 'home',
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

    builder.addCase(postGoogleSheetContact.pending, (state) => {
      state.contact.loading = true;
      state.contact.error = false;
      state.contact.success = false;
    });
    builder.addCase(postGoogleSheetContact.fulfilled, (state) => {
      state.contact.loading = false;
      state.contact.success = true;
    });
    builder.addCase(postGoogleSheetContact.rejected, (state) => {
      state.contact.error = true;
      state.contact.loading = false;
    });
  },
});

export default slice.reducer;
