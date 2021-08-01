import { FC } from "react";

import {
  BlogCardWrapper,
  BlogCardImageWrapper,
  BlogCardImage,
  BlogCardPreview,
  BlogCardPreviewTitle1,
  BlogCardPreviewTitle2,
  BlogCardPreviewMeta,
  BlogCardPreviewContent1,
  BlogCardPreviewContent2,
} from "./styled";

const BlogCardLoading: FC = () => {
  return (
    <BlogCardWrapper>
      <BlogCardImageWrapper>
        <BlogCardImage />
      </BlogCardImageWrapper>
      <BlogCardPreview>
        <BlogCardPreviewTitle1 />
        <BlogCardPreviewTitle2 />
        <BlogCardPreviewMeta />
        <BlogCardPreviewContent1 />
        <BlogCardPreviewContent1 />
        <BlogCardPreviewContent2 />
      </BlogCardPreview>
    </BlogCardWrapper>
  );
};

export default BlogCardLoading;
