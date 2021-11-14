import { useAppDispatch, useAppSelector } from '@app/hooks/redux';
import { useTranslate } from '@app/hooks/translate';
import { fetchBlogs } from '@app/store/thunks/blogs.thunk';
import Pagination from '@components/common/Pagination';
import Seo from '@components/common/Seo';
import BlogsList from '@components/pages/blogs/BlogsList';
import { domain } from '@constants/config';
import { NextPage } from 'next';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { ChangeEvent, FormEvent, useEffect, useState } from 'react';

const BlogsPage: NextPage = () => {
  const { t, locale } = useTranslate();
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
    <>
      <Seo
        title={`${t('app.blogs.title')} | ${t('app.common.name')}`}
        description={t('app.blogs.description')}
        url={`${domain}${locale === 'vi' ? '/vi' : '/en'}/blogs`}
      />
      <div className="container mx-auto mt-4">
        <form className="w-full mb-8" onSubmit={onSubmitSearchForm}>
          <input
            type="text"
            placeholder={t('app.blogs.search-placeholder')}
            className="w-full border rounded-md px-4 py-3 outline-none"
            onChange={onKeyChange}
          />
        </form>
        {!blogsState.loading && blogsState.data.length === 0 ? (
          <div className="w-full flex flex-col justify-center items-center mt-12">
            <Image
              src="/images/empty.svg"
              alt="empty"
              width={310}
              height={250}
            />
            <h2 className="mt-6 text-center text-2xl text-gray-600">
              {t('app.blogs.no-result')}
            </h2>
          </div>
        ) : (
          <>
            <BlogsList blogs={blogsState.data} loading={blogsState.loading} />
            <div className="mt-6 flex justify-center">
              <Pagination
                totalPages={blogsState.meta.totalPages}
                currentPage={currentPage}
                onChangePage={onPageChange}
              />
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default BlogsPage;
