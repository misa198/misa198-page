import { FC } from "react";
import Head from "next/head";

import {
  PortfolioWrapper,
  PortfolioContainer,
} from "styles/pages/portfolio.style";
import { domain } from "constants/config";

const Portfolio: FC = () => {
  return (
    <>
      <Head>
        <title>Portfolio - Misa198</title>
        {/* Primary Meta Tags */}
        <meta name="title" content="Portfolio - Misa198" />
        <meta
          name="description"
          content="I am a web developer. Looking forward to working with you."
        />
        {/* Open Graph / Facebook */}
        <meta property="og:url" content={`${domain}/portfolio`} />
        <meta property="og:title" content="Portfolio - Misa198" />
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
        <meta property="twitter:url" content={`${domain}/portfolio`} />
        <meta property="twitter:title" content="Portfolio - Misa198" />
        <meta
          property="twitter:description"
          content="I am a web developer. Looking forward to working with you."
        />
        <meta
          property="twitter:image"
          content="https://res.cloudinary.com/dumfvnj9f/image/upload/v1626761198/misa198/facebook-og_rzhdqd.png"
        />
      </Head>
      <PortfolioWrapper>
        <PortfolioContainer>Updating portfolio...</PortfolioContainer>
      </PortfolioWrapper>
    </>
  );
};

export default Portfolio;
