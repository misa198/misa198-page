import { FC, useMemo } from "react";
import Link from "next/link";

import { Blog } from "types/Blog";
import { formatDate } from "utils/format-date";
import {
  BlogCardWrapper,
  BlogCardImageWrapper,
  BlogCardImage,
  BlogCardPreview,
  BlogCardPreviewTitle,
  BlogCardPreviewMeta,
  BlogCardPreviewContent,
} from "./styled";

interface PropTypes {
  blog: Blog;
}

const BlogCard: FC<PropTypes> = ({ blog }) => {
  const formattedDate = useMemo(
    () => formatDate(blog.updatedAt),
    [blog.updatedAt],
  );

  return (
    <BlogCardWrapper>
      <BlogCardImageWrapper>
        <Link href={`/blogs/${blog.slug}`}>
          <a>
            <BlogCardImage src={blog.seo.image} />
          </a>
        </Link>
      </BlogCardImageWrapper>
      <BlogCardPreview>
        <Link href={`/blogs/${blog.slug}`}>
          <a>
            <BlogCardPreviewTitle>{blog.title}</BlogCardPreviewTitle>
          </a>
        </Link>
        <BlogCardPreviewMeta>
          {blog.author} • {formattedDate}
        </BlogCardPreviewMeta>
        <BlogCardPreviewContent>{blog.seo.description}</BlogCardPreviewContent>
      </BlogCardPreview>
    </BlogCardWrapper>
  );
};

export default BlogCard;
