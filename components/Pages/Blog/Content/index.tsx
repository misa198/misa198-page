import { FC, useMemo } from "react";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import gfm from "remark-gfm";

import { BlogContentWrapper } from "./styled";

interface PropTypes {
  content: string;
}

const BlogContent: FC<PropTypes> = ({ content }) => {
  const parsedContent = useMemo(() => JSON.parse(content), [content]);

  return (
    <BlogContentWrapper>
      <ReactMarkdown remarkPlugins={[gfm]} rehypePlugins={[rehypeRaw]}>
        {parsedContent}
      </ReactMarkdown>
    </BlogContentWrapper>
  );
};

export default BlogContent;
