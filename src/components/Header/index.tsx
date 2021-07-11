import { FC } from "react";
import { Link } from "react-router-dom";

import {
  HeaderWrapper,
  HeaderContainer,
  HeaderLogo,
  HeaderNavLinks,
  HeaderNavLink,
} from "./styled";

const Header: FC = () => {
  return (
    <HeaderWrapper>
      <HeaderContainer>
        <Link to="/">
          <HeaderLogo>Misa198</HeaderLogo>
        </Link>
        <HeaderNavLinks>
          <Link to="/#about">
            <HeaderNavLink>About</HeaderNavLink>
          </Link>
          <HeaderNavLink>Project</HeaderNavLink>
          <Link to="/blogs">
            <HeaderNavLink>Blogs</HeaderNavLink>
          </Link>
          <Link to="/#contact">
            <HeaderNavLink>Contact</HeaderNavLink>
          </Link>
        </HeaderNavLinks>
      </HeaderContainer>
    </HeaderWrapper>
  );
};

export default Header;
