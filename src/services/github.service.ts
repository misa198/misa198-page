import axios from "axios";

import { username } from "src/constants/config";
import { PinnedRepository } from "src/types/PinnedRepository";

export async function getPinnedRepositories(): Promise<PinnedRepository[]> {
  const response = await axios.get(
    `https://gh-pinned-repos.egoist.sh/?username=${username}`
  );
  return response.data;
}
