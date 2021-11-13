import { PaginationMeta } from './Pagination';

export interface Blog {
  _id: string;
  slug: string;
  title: string;
  author: string;
  content: string;
  createdAt: Date;
  updatedAt: Date;
  images: string[];
  tags: string[];
  seo: {
    title: string;
    description: string;
    image: string;
  };
}

export interface GetBlogsResponse {
  data: Blog[];
  meta: PaginationMeta;
}
