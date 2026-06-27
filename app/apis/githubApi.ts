import axios from 'axios';

import { username } from '@constants/config';
import { PinnedRepository } from '@models/PinnedRepository';

export async function getPinnedRepositories(): Promise<PinnedRepository[]> {
  const response = await axios.get(`/api/projects?username=${username}`);
  return response.data;
}

