import { FC } from "react";
import Head from "next/head";

import { PortfolioWrapper, PortfolioContainer } from "styles/pages/home.style";

const Portfolio: FC = () => {
  return (
    <>
      <Head>
        <title>Portfolio - Misa198</title>
      </Head>
      <PortfolioWrapper>
        <PortfolioContainer>Updating portfolio...</PortfolioContainer>
      </PortfolioWrapper>
    </>
  );
};

export default Portfolio;
