import { FC } from "react";
import { Helmet } from "react-helmet";

import { BlogsWrapper, BlogsContainer } from "./styled";

const Blogs: FC = () => {
  return (
    <>
      <Helmet>
        <title>Blogs - Misa198</title>
      </Helmet>
      <BlogsWrapper>
        <BlogsContainer>Updating...</BlogsContainer>
      </BlogsWrapper>
    </>
  );
};

export default Blogs;
