import styled from "styled-components";
import { down } from "styled-breakpoints";
import { Container } from "@material-ui/core";
import { ReactComponent as IntroduceBackground } from "src/assets/images/introduce-background.svg";

export const IntroduceWrapper = styled.section`
  width: 100%;
  margin-top: 4rem;
  background-image: url("/images/introduce-background.svg");
  background-position: left top;
  background-size: contain;
  background-repeat: no-repeat;
`;

export const IntroduceContainer = styled(Container)`
  display: flex !important;
  align-items: center;

  ${down("sm")} {
    flex-direction: column;
  }
`;

export const IntroduceThumbWrapper = styled.div`
  flex: 4;
  padding: 0 2rem;
`;

export const IntroduceThumb = styled(IntroduceBackground)`
  width: 100%;
`;

export const IntroduceContent = styled.div`
  flex: 5;

  ${down("sm")} {
    margin-top: 2rem;
    text-align: center;
  }
`;

export const IntroduceContentTitle = styled.h3`
  margin-bottom: 2rem;
  font-size: 26pt;

  ${down("md")} {
    font-size: 20pt;
    margin-bottom: 1rem;
  }
`;

export const IntroduceContentText = styled.p`
  font-size: 20pt;
  font-weight: normal;
  line-height: 1.3;
  padding-right: 2rem;

  ${down("md")} {
    font-size: 16pt;
  }

  ${down("sm")} {
    padding-right: 0;
  }
`;
