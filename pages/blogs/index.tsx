import { FC } from "react";
import Head from "next/head";

import SearchFrom from "components/Pages/Blogs/SearchForm";
import BlogList from "components/Pages/Blogs/BlogList";
import Pagination from "components/Pagination";
import {
  BlogsContainer,
  BlogsPaginationWrapper,
} from "styles/pages/blogs.style";

const Blogs: FC = () => {
  return (
    <>
      <Head>
        <title>Blogs - Misa198</title>
      </Head>
      <BlogsContainer>
        <SearchFrom />
        <BlogList />
        <BlogsPaginationWrapper>
          <Pagination />
        </BlogsPaginationWrapper>
      </BlogsContainer>
    </>
  );
};

export default Blogs;
