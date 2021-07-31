import { FC, useMemo } from "react";

import { Blog } from "types/Blog";
import { formatDate } from "utils/format-date";
import {
  BlogIntroduceWrapper,
  BlogIntroduceTitle,
  BlogIntroduceMeta,
} from "./styled";

interface PropTypes {
  blog: Blog;
}

const BlogIntroduce: FC<PropTypes> = ({ blog }) => {
  const formattedDate = useMemo(
    () => formatDate(blog.updatedAt),
    [blog.updatedAt],
  );

  return (
    <BlogIntroduceWrapper>
      <BlogIntroduceTitle>{blog.title}</BlogIntroduceTitle>
      <BlogIntroduceMeta>{`${blog.author} • ${formattedDate}`}</BlogIntroduceMeta>
    </BlogIntroduceWrapper>
  );
};

export default BlogIntroduce;
