import { useEffect, FC } from "react";
import { useRouter } from "next/router";

interface PropTypes {
  url: string;
}

declare const window: Window &
  typeof globalThis & {
    FB: any;
  };

const BlogComments: FC<PropTypes> = ({ url }) => {
  const router = useRouter();

  useEffect(() => {
    window.FB.XFBML.parse();
  }, [router.pathname]);

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
