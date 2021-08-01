import { FC } from "react";
import Head from "next/head";

import {
  Page404Wrapper,
  Page404Image,
  Page404Title,
} from "styles/pages/404.style";
import { domain } from "constants/config";

const Page404: FC = () => {
  return (
    <>
      <Head>
        <title>Not Found - Misa198</title>
        {/* Primary Meta Tags */}
        <meta name="title" content="Misa198" />
        <meta
          name="description"
          content="I am a web developer. Looking forward to working with you."
        />
        {/* Open Graph / Facebook */}
        <meta property="og:url" content={domain} />
        <meta property="og:title" content="Not Found - Misa198" />
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
        <meta property="twitter:title" content="Not Found - Misa198" />
        <meta
          property="twitter:description"
          content="I am a web developer. Looking forward to working with you."
        />
        <meta
          property="twitter:image"
          content="https://res.cloudinary.com/dumfvnj9f/image/upload/v1626761198/misa198/facebook-og_rzhdqd.png"
        />
      </Head>
      <Page404Wrapper>
        <Page404Image />
        <Page404Title>404</Page404Title>
      </Page404Wrapper>
    </>
  );
};

export default Page404;
