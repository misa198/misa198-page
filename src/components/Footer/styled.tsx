import styled from "styled-components";
import { down } from "styled-breakpoints";
import { Container } from "@material-ui/core";

export const FooterWrapper = styled.footer`
  width: 100%;
  background-image: url("/images/footer-background.svg");
  background-size: cover;
  background-position: center top;
  background-repeat: no-repeat;
  overflow-x: hidden;
`;

export const FooterContainer = styled(Container)`
  margin-top: 13rem;
`;

export const FooterLogo = styled.div`
  font-family: "Righteous", cursive;
  font-weight: bold;
  font-size: 2rem;
  margin-bottom: 1.5rem;

  ${down("sm")} {
    text-align: center;
  }
`;

export const FooterContent = styled.div`
  display: flex !important;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;

  ${down("sm")} {
    flex-direction: column;
  }
`;

export const FooterCopyright = styled.div`
  width: fit-content;

  ${down("sm")} {
    margin-bottom: 1.5rem;
  }
`;

export const FooterBackLinks = styled.div`
  display: flex;
  width: fit-content;
`;

export const FooterBackLink = styled.a`
  width: fit-content;
  height: fit-content;
  margin-left: 1.2rem;
  color: ${(props) => props.theme.colorPrimary};
`;
