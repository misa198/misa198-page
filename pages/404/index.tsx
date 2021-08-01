import { FC } from "react";

import {
  Page404Wrapper,
  Page404Image,
  Page404Title,
} from "styles/pages/404.style";

const Page404: FC = () => {
  return (
    <Page404Wrapper>
      <Page404Image />
      <Page404Title>404</Page404Title>
    </Page404Wrapper>
  );
};

export default Page404;
