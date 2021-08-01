import { useEffect, FC } from "react";

import { BlogCommentsWrapper, BlogCommentsTitle } from "./styled";

interface PropTypes {
  url: string;
}

declare const window: Window &
  typeof globalThis & {
    FB: any;
  };

const BlogComments: FC<PropTypes> = ({ url }) => {
  useEffect(() => {
    if (window.FB) {
      window.FB.XFBML.parse();
    }
  });

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
