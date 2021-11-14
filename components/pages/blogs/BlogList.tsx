import { FC } from 'react';
import BlogCard from './BlogCard';

const BlogList: FC = () => {
  return (
    <div className="w-full flex flex-col">
      {Array.from({ length: 5 }).map((_, index) => (
        <div key={index} className="w-full mb-4">
          <BlogCard />
        </div>
      ))}
    </div>
  );
};

export default BlogList;
