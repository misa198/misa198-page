import { FC } from "react";

import {
  IntroduceWrapper,
  IntroduceContainer,
  IntroduceThumbWrapper,
  IntroduceThumb,
  IntroduceContent,
  IntroduceContentTitle,
  IntroduceContentText,
} from "./styled";

const Introduce: FC = () => {
  return (
    <IntroduceWrapper>
      <IntroduceContainer>
        <IntroduceThumbWrapper>
          <IntroduceThumb />
        </IntroduceThumbWrapper>
        <IntroduceContent>
          <IntroduceContentTitle>Hi there!</IntroduceContentTitle>
          <IntroduceContentText>
            I am a web developer. Looking forward to working with you.
          </IntroduceContentText>
        </IntroduceContent>
      </IntroduceContainer>
    </IntroduceWrapper>
  );
};

export default Introduce;
