import { Blog } from '@models/Blog';
import { FC } from 'react';
import BlogCard from './BlogCard';

interface Props {
  blogs: Blog[];
  loading: boolean;
}

const BlogsList: FC<Props> = ({ blogs, loading }) => {
  return (
    <div className="w-full flex flex-col">
      {loading
        ? Array.from({ length: 5 }).map((_, index) => (
            <div key={index} className="w-full mb-4 animate-fadeIn">
              <BlogCard />
            </div>
          ))
        : blogs.map((blog) => (
            <div key={blog._id} className="w-full mb-4 animate-fadeIn">
              <BlogCard blog={blog} />
            </div>
          ))}
    </div>
  );
};

export default BlogsList;
