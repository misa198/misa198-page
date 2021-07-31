import { Blog } from "types/Blog";

export const blog: Blog = {
  _id: "demo-id",
  slug: "this-is-demo-blog",
  title: "This is demo title",
  author: "Misa198",
  createdAt: new Date("Sat Jul 31 2021 21:34:42 GMT+0700 (Indochina Time)"),
  updatedAt: new Date("Sat Jul 31 2021 21:34:42 GMT+0700 (Indochina Time)"),
  content: JSON.stringify("# Hello\n```javascript\nconsole.log('Mew')\n```"),
  images: [],
  tags: ["test"],
  seo: {
    title: "This is demo seo title",
    description: "This is description",
    image: "/logo192.png",
  },
};
