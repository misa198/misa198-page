import { FC, useMemo } from "react";
import { FacebookShareButton, TwitterShareButton } from "react-share";
import { Facebook, Twitter } from "react-feather";

import { Blog } from "types/Blog";
import { formatDate } from "utils/format-date";
import { domain } from "constants/config";
import {
  BlogIntroduceWrapper,
  BlogIntroduceTitle,
  BlogIntroduceMeta,
  BlogIntroduceContent,
  BlogIntroduceShare,
  BlogIntroduceShareButton,
} from "./styled";

interface PropTypes {
  blog: Blog;
}

const BlogIntroduce: FC<PropTypes> = ({ blog }) => {
  const formattedDate = useMemo(
    () => formatDate(blog.createdAt),
    [blog.createdAt],
  );

  return (
    <BlogIntroduceWrapper>
      <BlogIntroduceTitle>{blog.title}</BlogIntroduceTitle>
      <BlogIntroduceContent>
        <BlogIntroduceMeta>{`${blog.author} • ${formattedDate}`}</BlogIntroduceMeta>
        <BlogIntroduceShare>
          <FacebookShareButton url={`${domain}/blogs/${blog.slug}`}>
            <BlogIntroduceShareButton>
              <Facebook />
            </BlogIntroduceShareButton>
          </FacebookShareButton>
          <TwitterShareButton url={`${domain}/blogs/${blog.slug}`}>
            <BlogIntroduceShareButton>
              <Twitter />
            </BlogIntroduceShareButton>
          </TwitterShareButton>
        </BlogIntroduceShare>
      </BlogIntroduceContent>
    </BlogIntroduceWrapper>
  );
};

export default BlogIntroduce;
