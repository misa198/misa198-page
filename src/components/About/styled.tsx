import styled from "styled-components";
import { Container } from "@material-ui/core";

export const AboutWrapper = styled.section`
  width: 100%;
`;

export const AboutBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: -1;
  width: 100%;
  min-height: 400px;
  background-image: url("/images/background.svg");
  background-position: right top;
  background-repeat: no-repeat;
`;

export const AboutContainer = styled(Container)``;
