import { Blog } from "types/Blog";

export const blog: Blog = {
  id: "demo-id",
  slug: "this-is-demo-blog",
  title: "This is demo title",
  author: "Misa198",
  createdAt: new Date(),
  updatedAt: new Date(),
  content: JSON.stringify("# Hello\n```javascript\nconsole.log('Mew')\n```"),
  images: [],
  tags: ["test"],
  seo: {
    title: "This is demo seo title",
    description: "This is description",
    image: "/logo192.png",
  },
};
