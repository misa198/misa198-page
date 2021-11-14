import { Blog } from '@models/Blog';
import Image from 'next/image';
import { FC } from 'react';
import Skeleton from 'react-loading-skeleton';
import { formatDate } from 'utils/format-date';
import styles from './BlogCard.module.css';

interface Props {
  blog?: Blog;
}

const BlogCard: FC<Props> = ({ blog }) => {
  return (
    <div className="w-full flex flex-col md:flex-row">
      <div
        className={`w-full mb-4 md:mb-0 mr-6 ${styles.blogCardImageWrapper}`}
      >
        <div className={`relative w-full ${styles.blogCardImage}`}>
          <div className="absolute w-full h-full top-0 left-0 rounded-md overflow-hidden">
            {blog ? (
              <Image
                className="w-full h-full"
                src={blog.seo.image}
                alt="blog"
                layout="fill"
              />
            ) : (
              <Skeleton width="100%" height="100%" />
            )}
          </div>
        </div>
      </div>
      <div className="flex-grow">
        <h2 className="font-medium text-xl mb-2">
          {blog ? blog.title : <Skeleton width="100%" />}
        </h2>
        <p className="text-sm text-gray-600 mb-2">
          {blog ? (
            `${blog.author} • ${formatDate(new Date(blog.createdAt))}`
          ) : (
            <Skeleton width="30%" />
          )}
        </p>
        <p className="text-gray-500 line-clamp-3">
          {blog ? (
            blog.seo.description
          ) : (
            <>
              <Skeleton width="100%" />
              <Skeleton width="100%" />
              <Skeleton width="50%" />
            </>
          )}
        </p>
      </div>
    </div>
  );
};

export default BlogCard;
