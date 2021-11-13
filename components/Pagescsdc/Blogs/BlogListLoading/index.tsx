import { FC } from "react";
import { nanoid } from "nanoid";

import BlogCardLoading from "../BlogCardLoading";
import { BlogListWrapper } from "./styled";

const BlogListLoading: FC = () => {
  return (
    <BlogListWrapper>
      {Array.from(Array(5).keys()).map(() => (
        <BlogCardLoading key={nanoid(10)} />
      ))}
    </BlogListWrapper>
  );
};

export default BlogListLoading;
