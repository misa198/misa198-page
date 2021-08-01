import { FC } from "react";
import ScrollTop from "react-scroll-up";
import { ChevronUp } from "react-feather";

import { ScrollTopButtonWrapper } from "./styled";

const ScrollToTopButton: FC = () => {
  return (
    <ScrollTop showUnder={100}>
      <ScrollTopButtonWrapper>
        <ChevronUp />
      </ScrollTopButtonWrapper>
    </ScrollTop>
  );
};

export default ScrollToTopButton;
