import { useAppDispatch, useAppSelector } from '@app/hooks/redux';
import { useTranslate } from '@app/hooks/translate';
import { fetchBlogs } from '@app/store/thunks/blogs.thunk';
import Pagination from '@components/common/Pagination';
import BlogsList from '@components/pages/blogs/BlogsList';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { ChangeEvent, FormEvent, useEffect, useState } from 'react';

const BlogsPage: NextPage = () => {
  const { t } = useTranslate();
  const dispatch = useAppDispatch();
  const router = useRouter();
  const [currentPage, setCurrentPage] = useState(undefined);
  const [keyword, setKeyWord] = useState('');
  const blogsState = useAppSelector((state) => state.blogs.blogs);

  function onPageChange(page: number) {
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
      <form className="w-full mb-8" onSubmit={onSubmitSearchForm}>
        <input
          type="text"
          placeholder={t('app.blogs.search-placeholder')}
          className="w-full border rounded-md px-4 py-3 outline-none"
          onChange={onKeyChange}
        />
      </form>
      <BlogsList blogs={blogsState.data} loading={blogsState.loading} />
      <div className="mt-6 flex justify-center">
        <Pagination
          totalPages={blogsState.meta.totalPages}
          currentPage={currentPage}
          onChangePage={onPageChange}
        />
      </div>
    </div>
  );
};

export default BlogsPage;
