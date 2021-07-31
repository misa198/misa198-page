import { FC } from "react";
import dynamic from "next/dynamic";
import Head from "next/head";

import { BlogContainer } from "styles/pages/blog.style";
import BlogIntroduce from "components/Pages/Blog/Introduce";
import { blog } from "./data";

const BlogContent = dynamic(() => import("components/Pages/Blog/Content"), {
  ssr: false,
});
const BlogComments = dynamic(() => import("components/Pages/Blog/Comments"), {
  ssr: false,
});

const Blog: FC = () => {
  return (
    <>
      <Head>
        <title>{blog.seo.title} - Misa198</title>
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
        <BlogIntroduce blog={blog} />
        <BlogContent content={blog.content} />
        <BlogComments url="https://developers.facebook.com/docs/plugins/comments#configurator" />
      </BlogContainer>
    </>
  );
};
export default Blog;
