import { FC } from "react";

import { AboutWrapper, AboutBackground, AboutContainer } from "./styled";

const About: FC = () => {
  return (
    <>
      <AboutBackground />
      <AboutWrapper>
        <AboutContainer>Mew</AboutContainer>
      </AboutWrapper>
    </>
  );
};

export default About;
