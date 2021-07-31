export interface Blog {
  id: string;
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
