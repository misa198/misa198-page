import { FC, useEffect, useMemo } from "react";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import gfm from "remark-gfm";
import Prism from "prismjs";
import "prismjs/themes/prism-okaidia.css";

import { BlogContentWrapper } from "./styled";

interface PropTypes {
  content: string;
}

const BlogContent: FC<PropTypes> = ({ content }) => {
  const parsedContent = useMemo(() => JSON.parse(content), [content]);

  useEffect(() => {
    Prism.highlightAll();
  });

  return (
    <BlogContentWrapper>
      <ReactMarkdown remarkPlugins={[gfm]} rehypePlugins={[rehypeRaw]}>
        {parsedContent}
      </ReactMarkdown>
    </BlogContentWrapper>
  );
};

export default BlogContent;
