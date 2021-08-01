import { FC } from "react";
import Head from "next/head";

import SearchFrom from "components/Pages/Blogs/SearchForm";

const Blogs: FC = () => {
  return (
    <>
      <Head>
        <title>Blogs - Misa198</title>
      </Head>
      <SearchFrom />
    </>
  );
};

export default Blogs;
