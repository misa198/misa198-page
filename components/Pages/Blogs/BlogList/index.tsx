import { FC } from "react";

import BlogCard from "../BlogCard";
import { BlogListWrapper } from "./styled";

const BlogList: FC = () => {
  return (
    <BlogListWrapper>
      {Array.from(Array(10).keys()).map((e, id) => (
        // eslint-disable-next-line react/no-array-index-key
        <BlogCard key={id} />
      ))}
    </BlogListWrapper>
  );
};

export default BlogList;
