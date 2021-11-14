import MarkdownPreview from '@uiw/react-markdown-preview';
import '@uiw/react-markdown-preview/esm/styles/markdown.css';
import '@uiw/react-markdown-preview/esm/styles/markdowncolor.css';
import { FC, useMemo } from 'react';
import styles from './Content.module.css';

interface Props {
  content: string;
}

const Content: FC<Props> = ({ content }) => {
  const source = useMemo(() => JSON.parse(content), [content]);

  return (
    <MarkdownPreview
      className={`w-full ${styles.blogContent}`}
      source={source}
    />
  );
};

export default Content;
