import { getPinnedRepositories } from '@app/apis/githubApi';
import { postContact } from '@app/apis/googleSheetApi';
import { Contact } from '@models/Contact';
import { PinnedRepository } from '@models/PinnedRepository';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchPinnedRepositories = createAsyncThunk<PinnedRepository[]>(
  'home/fetchPinnedRepositories',
  async () => {
    const res = await getPinnedRepositories();
    return res;
  },
);

export const postGoogleSheetContact = createAsyncThunk<any, Contact>(
  'home/postGoogleSheetContact',
  async (args) => {
    const res = await postContact(args);
    return res;
  },
);
