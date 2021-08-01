import { createAsyncThunk } from "@reduxjs/toolkit";

import { getPinnedRepositories } from "services/github.service";
import { PinnedRepository } from "types/PinnedRepository";

export const fetchPinnedRepositories = createAsyncThunk<PinnedRepository[]>(
  "home/fetchPinnedRepositories",
  async () => {
    const res = await getPinnedRepositories();
    return res;
  },
);
