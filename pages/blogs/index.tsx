import { useAppDispatch, useAppSelector } from '@app/hooks/redux';
import { fetchBlogs } from '@app/store/thunks/blogs.thunk';
import BlogsList from '@components/pages/blogs/BlogsList';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { ChangeEvent, FormEvent, useEffect, useState } from 'react';

const BlogsPage: NextPage = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const [currentPage, setCurrentPage] = useState(undefined);
  const [keyword, setKeyWord] = useState('');
  const blogsState = useAppSelector((state) => state.blogs.blogs);

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
    const page = (router.query.page || '1') as string;
    let _page = 0;
    try {
      _page = parseInt(page, 10);
      setCurrentPage(_page);
    } catch (e) {
      router.push('/blogs');
    }

    const queryKeyword = (router.query.key || '') as string;
    setKeyWord(queryKeyword);

    dispatch(fetchBlogs({ page: _page, key: queryKeyword }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch, router, router.query]);

  return (
    <div className="container mx-auto mt-4">
      <BlogsList blogs={blogsState.data} loading={blogsState.loading} />
    </div>
  );
};

export default BlogsPage;
