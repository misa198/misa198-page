import axios from 'axios';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { username } = req.query;
  if (!username || typeof username !== 'string') {
    return res.status(400).json({ error: 'Username is required' });
  }

  try {
    const response = await axios.get(`https://github.com/${username}`, {
      headers: {
        'User-Agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
      },
    });

    const html = response.data;
    const items = html.split('pinned-item-list-item');
    const repos = [];

    for (let i = 1; i < items.length; i++) {
      const item = items[i];

      // Extract repo name and owner
      const hrefMatch = item.match(
        /href="\/([^\/"]+)\/([^\/"]+)"[^>]*class="[^"]*text-bold[^"]*"/,
      );
      if (!hrefMatch) continue;

      const owner = hrefMatch[1];
      const repoName = hrefMatch[2];

      // Extract description
      const descMatch = item.match(
        /<p class="pinned-item-desc[^>]*>([\s\S]*?)<\/p>/,
      );
      const description = descMatch
        ? descMatch[1].replace(/\s+/g, ' ').trim()
        : '';

      // Extract language
      const langMatch = item.match(
        /<span itemprop="programmingLanguage">([^<]+)<\/span>/,
      );
      const language = langMatch ? langMatch[1].trim() : '';

      // Extract stars
      const starsMatch = item.match(
        /href="\/[^\/"]+\/[^\/"]+\/stargazers"[^>]*>([\s\S]*?)<\/a>/,
      );
      let stars = '0';
      if (starsMatch) {
        stars = starsMatch[1]
          .replace(/<[^>]*>/g, '')
          .replace(/\s+/g, ' ')
          .trim();
      }

      // Extract forks
      const forksMatch = item.match(
        /href="\/[^\/"]+\/[^\/"]+\/(?:forks|network\/members)"[^>]*>([\s\S]*?)<\/a>/,
      );
      let forks = '0';
      if (forksMatch) {
        forks = forksMatch[1]
          .replace(/<[^>]*>/g, '')
          .replace(/\s+/g, ' ')
          .trim();
      }

      repos.push({
        owner,
        repo: repoName,
        description,
        language,
        stars,
        forks,
        link: `https://github.com/${owner}/${repoName}`,
      });
    }

    return res.status(200).json(repos.slice(0, 6));
  } catch (error: any) {
    console.error(
      'Error fetching pinned repositories:',
      error.message || error,
    );
    return res
      .status(500)
      .json({ error: 'Failed to fetch pinned repositories' });
  }
}
