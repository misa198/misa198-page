import { FC, useEffect, useState } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";

import SearchFrom from "components/Pages/Blogs/SearchForm";
import BlogList from "components/Pages/Blogs/BlogList";
import Pagination from "components/Pagination";
import {
  BlogsContainer,
  BlogsPaginationWrapper,
} from "styles/pages/blogs.style";
import { fetchBlogs } from "store/thunks/blogs.thunk";
import { RootState } from "store";

const Blogs: FC = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const [currentPage, setCurrentPage] = useState(undefined);
  const blogsState = useSelector((state: RootState) => state.blogs.blogs);

  useEffect(() => {
    const page = (router.query.page || "1") as string;
    try {
      const _page = parseInt(page, 10);
      setCurrentPage(_page);
    } catch (e) {
      router.push("/blogs");
    }
  }, [router, router.asPath]);

  useEffect(() => {
    if (currentPage) {
      dispatch(fetchBlogs({ page: currentPage }));
    }
  }, [currentPage, dispatch]);

  return (
    <>
      <Head>
        <title>Blogs - Misa198</title>
      </Head>
      <BlogsContainer>
        <SearchFrom />
        <BlogList blogs={blogsState.data} />
        <BlogsPaginationWrapper>
          <Pagination />
        </BlogsPaginationWrapper>
      </BlogsContainer>
    </>
  );
};

export default Blogs;
