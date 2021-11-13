import { getPinnedRepositories } from '@app/apis/githubApi';
import { PinnedRepository } from '@models/PinnedRepository';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchPinnedRepositories = createAsyncThunk<PinnedRepository[]>(
  'home/fetchPinnedRepositories',
  async () => {
    const res = await getPinnedRepositories();
    return res;
  },
);
