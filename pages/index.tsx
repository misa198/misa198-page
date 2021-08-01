import { FC, useEffect } from "react";
import dynamic from "next/dynamic";
import { useDispatch } from "react-redux";
import Head from "next/head";

import { fetchPinnedRepositories } from "store/thunks/home.thunk";

import About from "components/Pages/Home/About";
import Introduce from "components/Pages/Home/Introduce";
import Contact from "components/Pages/Home/Contact";

const Projects = dynamic(() => import("components/Pages/Home/Projects"), {
  ssr: false,
});
const Contributions = dynamic(
  () => import("components/Pages/Home/Contributions"),
  {
    ssr: false,
  },
);

const Home: FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPinnedRepositories());
  }, [dispatch]);

  return (
    <>
      <Head>
        <title>Misa198</title>
      </Head>
      <About />
      <Projects />
      <Contributions />
      <Introduce />
      <Contact />
    </>
  );
};

export default Home;
