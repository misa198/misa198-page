import { FC } from "react";
import { Tooltip } from "@material-ui/core";
import { GitHub, Twitter, GitPullRequest } from "react-feather";

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
              href="https://github.com/misa198/misa198.github.io"
              target="_blank"
            >
              <Tooltip title="Fork me">
                <GitPullRequest />
              </Tooltip>
            </FooterBackLink>
          </FooterBackLinks>
        </FooterContent>
      </FooterContainer>
    </FooterWrapper>
  );
};

export default Footer;
