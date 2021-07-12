import { FC } from "react";
import { Helmet } from "react-helmet";

import { PortfolioWrapper, PortfolioContainer } from "./styled";

const Portfolio: FC = () => {
  return (
    <>
      <Helmet>
        <title>Portfolio - Misa198</title>
      </Helmet>
      <PortfolioWrapper>
        <PortfolioContainer>Updating...</PortfolioContainer>
      </PortfolioWrapper>
    </>
  );
};

export default Portfolio;
