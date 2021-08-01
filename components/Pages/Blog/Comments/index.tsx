import { FC } from "react";

import { BlogCommentsWrapper, BlogCommentsTitle } from "./styled";

interface PropTypes {
  url: string;
}

const BlogComments: FC<PropTypes> = ({ url }) => {
  return (
    <BlogCommentsWrapper>
      <BlogCommentsTitle>Comments</BlogCommentsTitle>
      <div
        className="fb-comments"
        data-href={url}
        data-numposts="5"
        data-width="100%"
        data-order-by="reverse_time"
      />
    </BlogCommentsWrapper>
  );
};

export default BlogComments;
