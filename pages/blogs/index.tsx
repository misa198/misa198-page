import { FC } from "react";
import Head from "next/head";

import SearchFrom from "components/Pages/Blogs/SearchForm";
import BlogList from "components/Pages/Blogs/BlogList";
import { BlogsContainer } from "styles/pages/blogs.style";

const Blogs: FC = () => {
  return (
    <>
      <Head>
        <title>Blogs - Misa198</title>
      </Head>
      <BlogsContainer>
        <SearchFrom />
        <BlogList />
      </BlogsContainer>
    </>
  );
};

export default Blogs;
