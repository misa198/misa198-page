import { FC } from "react";

import IntroduceBackgroundDraw from "../../../../assets/images/introduce-background-draw.svg";
import {
  IntroduceWrapper,
  IntroduceContainer,
  IntroduceThumbWrapper,
  IntroduceContent,
  IntroduceContentTitle,
  IntroduceContentText,
} from "./styled";

const Introduce: FC = () => {
  return (
    <IntroduceWrapper>
      <IntroduceContainer>
        <IntroduceThumbWrapper>
          <IntroduceBackgroundDraw alt="introduce" />
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
