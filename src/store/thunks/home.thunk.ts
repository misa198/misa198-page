import { createAsyncThunk } from "@reduxjs/toolkit";

import { getPinnedRepositories } from "src/services/github.service";
import { PinnedRepository } from "src/types/PinnedRepository";

export const fetchPinnedRepositories = createAsyncThunk<PinnedRepository[]>(
  "home/fetchPinnedRepositories",
  async () => {
    const res = await getPinnedRepositories();
    return res;
  }
);
