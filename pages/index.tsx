import { FC, useEffect } from "react";
import dynamic from "next/dynamic";
import { useDispatch } from "react-redux";
import Head from "next/head";

import { fetchPinnedRepositories } from "store/thunks/home.thunk";

import About from "components/Pages/Home/About";
import Introduce from "components/Pages/Home/Introduce";
import Contact from "components/Pages/Home/Contact";
import { domain } from "constants/config";

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
        {/* Primary Meta Tags */}
        <meta name="title" content="Misa198" />
        <meta
          name="description"
          content="I am a web developer. Looking forward to working with you."
        />
        {/* Open Graph / Facebook */}
        <meta property="og:url" content={domain} />
        <meta property="og:title" content="Misa198" />
        <meta
          property="og:description"
          content="I am a web developer. Looking forward to working with you."
        />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/dumfvnj9f/image/upload/v1626761198/misa198/facebook-og_rzhdqd.png"
        />
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={domain} />
        <meta property="twitter:title" content="Misa198" />
        <meta
          property="twitter:description"
          content="I am a web developer. Looking forward to working with you."
        />
        <meta
          property="twitter:image"
          content="https://res.cloudinary.com/dumfvnj9f/image/upload/v1626761198/misa198/facebook-og_rzhdqd.png"
        />
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
