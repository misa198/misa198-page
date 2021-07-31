import { FC } from "react";
import Link from "next/link";
import useResizeObserver from "use-resize-observer";

import AboutBackgroundImageDraw from "../../../../assets/images/about-background-draw.svg";
import {
  AboutWrapper,
  AboutBackground,
  AboutContainer,
  AboutContent,
  AboutContentTitle,
  AboutContentDescription,
  AboutContentButton,
  AboutThumb,
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
          <Link href="/portfolio">
            <AboutContentButton
              variant="contained"
              color="primary"
              type="button"
            >
              See more
            </AboutContentButton>
          </Link>
        </AboutContent>
        <AboutThumb>
          <AboutBackgroundImageDraw alt="about" />
        </AboutThumb>
      </AboutContainer>
    </AboutWrapper>
  );
};

export default About;
