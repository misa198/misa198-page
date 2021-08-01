import { ChangeEvent, FC, FormEvent, useEffect, useState } from "react";
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
  const [keyword, setKeyWord] = useState("");
  const blogsState = useSelector((state: RootState) => state.blogs.blogs);

  function onPageChange(_e: ChangeEvent<unknown>, page: number) {
    router.push({
      pathname: router.pathname,
      query: {
        ...router.query,
        page,
      },
    });
  }

  function onKeyChange(e: ChangeEvent<HTMLInputElement>) {
    setKeyWord(e.target.value);
  }

  function onSubmitSearchForm(e: FormEvent) {
    e.preventDefault();
    router.push({
      pathname: router.pathname,
      query: {
        key: keyword,
        page: 1,
      },
    });
  }

  useEffect(() => {
    console.log(router.query);
    const page = (router.query.page || "1") as string;
    let _page = 0;
    try {
      _page = parseInt(page, 10);
      setCurrentPage(_page);
    } catch (e) {
      router.push("/blogs");
    }

    const queryKeyword = (router.query.key || "") as string;
    setKeyWord(queryKeyword);

    dispatch(fetchBlogs({ page: _page, key: queryKeyword }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch, router, router.query]);

  return (
    <>
      <Head>
        <title>Blogs - Misa198</title>
      </Head>
      <BlogsContainer>
        <SearchFrom
          keyword={keyword}
          onChange={onKeyChange}
          onSubmit={onSubmitSearchForm}
        />
        <BlogList blogs={blogsState.data} />
        <BlogsPaginationWrapper>
          <Pagination
            onChange={onPageChange}
            page={currentPage}
            totalPages={blogsState.meta.totalPages}
          />
        </BlogsPaginationWrapper>
      </BlogsContainer>
    </>
  );
};

export default Blogs;
