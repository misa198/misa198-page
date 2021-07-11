import { FC } from "react";
import { Link } from "react-router-dom";
import useResizeObserver from "use-resize-observer";

import {
  AboutWrapper,
  AboutBackground,
  AboutContainer,
  AboutContent,
  AboutContentTitle,
  AboutContentDescription,
  AboutContentButton,
  AboutThumb,
  AboutThumbImage,
} from "./styled";

const About: FC = () => {
  const { ref, height = 0 } = useResizeObserver<HTMLDivElement>();

  return (
    <AboutWrapper id="about" ref={ref}>
      <AboutBackground height={height} />
      <AboutContainer>
        <AboutContent>
          <AboutContentTitle>Hello, I am Thanh Vu.</AboutContentTitle>
          <AboutContentDescription>Nice to meet you!</AboutContentDescription>
          <Link to="/portfolio">
            <AboutContentButton variant="contained" color="primary">
              See more
            </AboutContentButton>
          </Link>
        </AboutContent>
        <AboutThumb>
          <AboutThumbImage />
        </AboutThumb>
      </AboutContainer>
    </AboutWrapper>
  );
};

export default About;
