import styled from "styled-components";
import { down } from "styled-breakpoints";
import { Container, Button } from "@material-ui/core";

import { ReactComponent as AboutBackgroundImage } from "src/assets/images/about-background.svg";

export const AboutWrapper = styled.section`
  width: 100%;
  padding-top: 5rem;
`;

export const AboutBackground = styled.div<{ height: number }>`
  width: 100%;
  height: ${(props) => props.height}px;
  background-image: url("/images/background.svg");
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  background-position: right top;
  background-repeat: no-repeat;
`;

export const AboutContainer = styled(Container)`
  display: flex !important;
  align-items: center;
  padding: 4rem 0px;
`;

export const AboutContent = styled.div`
  flex: 5;

  ${down("sm")} {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const AboutContentTitle = styled.h3`
  font-size: 36pt;
  margin-bottom: 1.5rem;
  transition: all 300ms;

  ${down("lg")} {
    font-size: 30pt;
  }

  ${down("sm")} {
    text-align: center;
  }
`;

export const AboutContentDescription = styled.p`
  font-size: 32pt;
  color: ${(props) => props.theme.colorBlack05};
  margin-bottom: 2rem;
  transition: all 300ms;

  ${down("lg")} {
    font-size: 25pt;
  }

  ${down("sm")} {
    text-align: center;
  }
`;

export const AboutContentButton = styled(Button)`
  font-weight: 400 !important;
  text-transform: none !important;
`;

export const AboutThumb = styled.div`
  flex: 5;

  ${down("sm")} {
    flex: 0;
  }
`;

export const AboutThumbImage = styled(AboutBackgroundImage)``;
