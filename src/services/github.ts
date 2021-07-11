import axios from "axios";

import { username } from "src/constants/config";

interface PinnedRepository {
  owner: string;
  repo: string;
  link: string;
  description: string;
  language: string;
  stars: string;
  forks: number;
}

export async function fetchPinnedRepositories(): Promise<PinnedRepository[]> {
  const response = await axios.get(
    `https://gh-pinned-repos-5l2i19um3.vercel.app/?username=${username}`
  );
  return response.data;
}
