import { Blog } from '@models/Blog';
import { FC } from 'react';
import { formatDate } from 'utils/format-date';
import { FacebookShareButton, TwitterShareButton } from 'react-share';
import { Facebook, Twitter } from 'react-feather';
import { domain } from '@constants/config';

interface Prop {
  blog: Blog;
}

const Introduction: FC<Prop> = ({ blog }) => {
  return (
    <div>
      <h1 className="text-4xl font-semibold mb-6">{blog.title}</h1>
      <div className="flex justify-between items-center">
        <p className="text-sm text-gray-600">
          {`${blog.author} • ${formatDate(new Date(blog.createdAt))}`}
        </p>
        <div className="flex">
          <FacebookShareButton
            className="mr-4"
            url={`${domain}/blogs/${blog.slug}`}
          >
            <span className="text-gray-600 hover:text-highlight transition-colors duration-200">
              <Facebook />
            </span>
          </FacebookShareButton>
          <TwitterShareButton url={`${domain}/blogs/${blog.slug}`}>
            <span className="text-gray-600 hover:text-highlight transition-colors duration-200">
              <Twitter />
            </span>
          </TwitterShareButton>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
