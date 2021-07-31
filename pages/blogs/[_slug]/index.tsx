import { useEffect, FC } from "react";
import dynamic from "next/dynamic";
import Head from "next/head";
import { useRouter } from "next/router";

import { BlogContainer } from "styles/pages/blog.style";

const BlogComments = dynamic(() => import("components/Pages/Blog/Comments"), {
  ssr: false,
});

declare const window: any;
const Blog: FC = () => {
  const router = useRouter();

  useEffect(() => {
    window.FB.XFBML.parse();
  }, [router.pathname]);

  return (
    <>
      <Head>
        <title>Blogs - Misa198</title>
      </Head>
      <div id="fb-root" />
      <script
        async
        defer
        crossOrigin="anonymous"
        src="https://connect.facebook.net/vi_VN/sdk.js#xfbml=1&version=v11.0"
        nonce="meItQUWC"
      />
      <BlogContainer>
        <BlogComments url="https://developers.facebook.com/docs/plugins/comments#configurator" />
      </BlogContainer>
    </>
  );
};
export default Blog;
