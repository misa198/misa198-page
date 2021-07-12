import { FC } from "react";
import { Tooltip } from "@material-ui/core";
import { GitHub, Twitter, Linkedin } from "react-feather";

import {
  FooterWrapper,
  FooterContainer,
  FooterLogo,
  FooterContent,
  FooterCopyright,
  FooterBackLinks,
  FooterBackLink,
} from "./styled";

const Footer: FC = () => {
  return (
    <FooterWrapper>
      <FooterContainer>
        <FooterLogo>Misa198</FooterLogo>
        <FooterContent>
          <FooterCopyright>© 2021 | Made by Misa198</FooterCopyright>
          <FooterBackLinks>
            <FooterBackLink href="https://github.com/misa198" target="_blank">
              <Tooltip title="Github">
                <GitHub />
              </Tooltip>
            </FooterBackLink>
            <FooterBackLink
              href="https://twitter.com/misa19820"
              target="_blank"
            >
              <Tooltip title="Twitter">
                <Twitter />
              </Tooltip>
            </FooterBackLink>
            <FooterBackLink
              href="https://www.linkedin.com/in/th%C3%A0nh-v%C5%A9-2223581b3/"
              target="_blank"
            >
              <Tooltip title="Linkedin">
                <Linkedin />
              </Tooltip>
            </FooterBackLink>
          </FooterBackLinks>
        </FooterContent>
      </FooterContainer>
    </FooterWrapper>
  );
};

export default Footer;
