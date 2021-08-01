import { FC, useEffect } from "react";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import dynamic from "next/dynamic";
import Head from "next/head";
import { useRouter } from "next/router";

import { BlogContainer } from "styles/pages/blog.style";
import BlogIntroduce from "components/Pages/Blog/Introduce";
import { Blog as IBlog } from "types/Blog";
import { getBlog } from "services/blogs-api.service";
import { domain } from "constants/config";

const BlogContent = dynamic(() => import("components/Pages/Blog/Content"), {
  ssr: false,
});
const BlogComments = dynamic(() => import("components/Pages/Blog/Comments"), {
  ssr: false,
});

interface PropTypes {
  blog: IBlog;
}

declare const window: Window &
  typeof globalThis & {
    FB: any;
  };

const Blog: FC<InferGetServerSidePropsType<GetServerSideProps<PropTypes>>> = ({
  blog,
}) => {
  const router = useRouter();

  useEffect(() => {
    if (window.FB) window.FB.XFBML.parse();
  }, [router.pathname]);

  return (
    <>
      <Head>
        <title>{blog.seo.title} - Misa198</title>
        {/* Primary Meta Tags */}
        <meta name="title" content={`${blog.seo.title} - Misa198`} />
        <meta name="description" content={blog.seo.description} />
        {/* Open Graph / Facebook */}
        <meta property="og:url" content={`${domain}/blogs/${blog.slug}`} />
        <meta property="og:title" content={`${blog.seo.title} - Misa198`} />
        <meta
          property="og:description"
          content={`${domain}/blogs/${blog.slug}`}
        />
        <meta property="og:image" content={blog.seo.image} />
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={`${domain}/blogs/${blog.slug}`} />
        <meta
          property="twitter:title"
          content={`${blog.seo.title} - Misa198`}
        />
        <meta property="twitter:description" content={blog.seo.description} />
        <meta property="twitter:image" content={blog.seo.image} />
      </Head>
      <div id="fb-root" />
      <script
        async
        defer
        crossOrigin="anonymous"
        src="https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v11.0"
        nonce="meItQUWC"
      />
      <BlogContainer>
        <BlogIntroduce blog={blog} />
        <BlogContent content={blog.content} />
        <BlogComments url={`${domain}/blogs/${blog.slug}`} />
      </BlogContainer>
    </>
  );
};

export const getServerSideProps: GetServerSideProps<PropTypes> = async ({
  resolvedUrl,
}) => {
  const slug = resolvedUrl.split("/")[2];
  if (slug) {
    try {
      const response = await getBlog(slug);
      if (response.data) {
        return { props: { blog: response.data } };
      }
    } catch (e) {
      return { notFound: true };
    }
  }
  return { notFound: true };
};

export default Blog;
