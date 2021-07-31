import { FC } from "react";

interface PropTypes {
  url: string;
}

const BlogComments: FC<PropTypes> = ({ url }) => {
  return (
    <div
      className="fb-comments"
      data-href={url}
      data-numposts="10"
      data-width="100%"
    />
  );
};

export default BlogComments;
