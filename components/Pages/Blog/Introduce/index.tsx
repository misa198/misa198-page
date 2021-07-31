import { FC } from "react";

import { Blog } from "types/Blog";
import { BlogIntroduceWrapper, BlogIntroduceTitle } from "./styled";

interface PropTypes {
  blog: Blog;
}

const BlogIntroduce: FC<PropTypes> = ({ blog }) => {
  return (
    <BlogIntroduceWrapper>
      <BlogIntroduceTitle>{blog.title}</BlogIntroduceTitle>
    </BlogIntroduceWrapper>
  );
};

export default BlogIntroduce;
