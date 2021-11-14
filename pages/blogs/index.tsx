import BlogList from '@components/pages/blogs/BlogList';
import { NextPage } from 'next';

const BlogsPage: NextPage = () => {
  return (
    <div className="container mx-auto mt-4">
      <BlogList />
    </div>
  );
};

export default BlogsPage;
