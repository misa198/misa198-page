import MarkdownPreview from "@uiw/react-markdown-preview";
import "@uiw/react-markdown-preview/esm/styles/markdown.css";
import "@uiw/react-markdown-preview/esm/styles/markdowncolor.css";
import { FC, useMemo } from "react";
import { BlogContentWrapper } from "./styled";

interface PropTypes {
  content: string;
}

const BlogContent: FC<PropTypes> = ({ content }) => {
  const parsedContent = useMemo(() => JSON.parse(content), [content]);

  return (
    <BlogContentWrapper>
      <MarkdownPreview source={parsedContent} />
    </BlogContentWrapper>
  );
};

export default BlogContent;
