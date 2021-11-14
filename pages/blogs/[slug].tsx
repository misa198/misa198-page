import { getBlog } from '@app/apis/blogsApi';
import { useTranslate } from '@app/hooks/translate';
import Seo from '@components/common/Seo';
import Comments from '@components/pages/blog/Comments';
import Introduction from '@components/pages/blog/Introduction';
import { domain } from '@constants/config';
import { Blog } from '@models/Blog';
import {
  GetServerSideProps,
  InferGetServerSidePropsType,
  NextPage,
} from 'next';
import dynamic from 'next/dynamic';

const Content = dynamic(() => import('@components/pages/blog/Content'), {
  ssr: false,
});

interface PropTypes {
  blog: Blog;
}

const BlogPage: NextPage<
  InferGetServerSidePropsType<GetServerSideProps<PropTypes>>
> = ({ blog }) => {
  const { t, locale } = useTranslate();

  return (
    <>
      <Seo
        title={`${blog.seo.title} | ${t('app.common.name')}`}
        description={blog.seo.description}
        image={blog.seo.image}
        url={`${domain}${locale === 'vi' ? '/vi' : '/en'}/blogs/${blog.slug}`}
      >
        <script
          async
          defer
          crossOrigin="anonymous"
          src="https://connect.facebook.net/vi_VN/sdk.js#xfbml=1&version=v11.0"
          nonce="FAG4pfNd"
        />
      </Seo>
      <div id="fb-root" />
      <div className="container mx-auto mt-6">
        <Introduction blog={blog} />
        <div className="w-full mt-6">
          <Content content={blog.content} />
        </div>
        <div className="w-full mt-6">
          <Comments url={`${domain}/blogs/${blog.slug}`} />
        </div>
      </div>
    </>
  );
};

export const getServerSideProps: GetServerSideProps<PropTypes> = async ({
  resolvedUrl,
}) => {
  const slug = resolvedUrl.split('/')[2];
  try {
    const response = await getBlog(slug);
    return { props: { blog: response.data } };
  } catch (e) {
    return { notFound: true };
  }
};

export default BlogPage;
