import Contributions from '@components/pages/home/Contributions';
import Introduction from '@components/pages/home/Introduction';
import Projects from '@components/pages/home/Projects';
import { domain } from 'constants/config';
import Head from 'next/head';
import { FC, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchPinnedRepositories } from 'store/thunks/home.thunk';

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
      <Introduction />
      <Projects />
      <Contributions />
    </>
  );
};

export default Home;
