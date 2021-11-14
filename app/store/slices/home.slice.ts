import { PinnedRepository } from '@models/PinnedRepository';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
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
    errorMessage: string;
    successMessage: string;
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
    errorMessage: '',
    successMessage: '',
  },
};

const slice = createSlice({
  name: 'home',
  initialState,
  reducers: {
    setContactNotices(
      state,
      action: PayloadAction<{
        error: string;
        success: string;
      }>,
    ) {
      state.contact.errorMessage = action.payload.error;
      state.contact.successMessage = action.payload.success;
    },
  },
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
    });
    builder.addCase(postGoogleSheetContact.fulfilled, (state) => {
      state.contact.loading = false;
      toast.success(state.contact.successMessage, {
        theme: 'colored',
      });
    });
    builder.addCase(postGoogleSheetContact.rejected, (state) => {
      state.contact.loading = false;
      toast.error(state.contact.errorMessage, {
        theme: 'colored',
      });
    });
  },
});

export default slice.reducer;
export const homeActions = slice.actions;
