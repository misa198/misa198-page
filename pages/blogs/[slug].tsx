import { getBlog } from '@app/apis/blogsApi';
import { useTranslate } from '@app/hooks/translate';
import Seo from '@components/common/Seo';
import Comments from '@components/pages/blog/Comments';
import { domain } from '@constants/config';
import { Blog } from '@models/Blog';
import {
  GetServerSideProps,
  InferGetServerSidePropsType,
  NextPage,
} from 'next';

interface PropTypes {
  blog: Blog;
}

const BlogPage: NextPage<
  InferGetServerSidePropsType<GetServerSideProps<PropTypes>>
> = ({ blog }) => {
  const { t } = useTranslate();

  return (
    <>
      <Seo
        title={`${blog.seo.title} | ${t('app.common.name')}`}
        description={blog.seo.description}
        image={blog.seo.image}
      >
        <script
          async
          defer
          crossOrigin="anonymous"
          src="https://connect.facebook.net/vi_VN/sdk.js#xfbml=1&version=v11.0"
          nonce="FAG4pfNd"
        />
      </Seo>
      <div className="container mx-auto mt-6">
        <div id="fb-root" />
        <h1>Blog Page</h1>
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
