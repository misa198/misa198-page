import { FC } from "react";

import { Blog } from "types/Blog";
import BlogCard from "../BlogCard";
import { BlogListWrapper } from "./styled";

interface PropTypes {
  blogs: Blog[];
}

const BlogList: FC<PropTypes> = ({ blogs }) => {
  return (
    <BlogListWrapper>
      {blogs.map((blog) => (
        <BlogCard blog={blog} key={blog._id} />
      ))}
    </BlogListWrapper>
  );
};

export default BlogList;
