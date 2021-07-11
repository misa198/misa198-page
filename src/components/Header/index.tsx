import { FC, useState } from "react";
import { Link } from "react-router-dom";

import {
  HeaderWrapper,
  HeaderContainer,
  HeaderLogo,
  HeaderBurger,
  HeaderNavLinksOverlay,
  HeaderNavLinks,
  HeaderNavLinkCloseWrapper,
  HeaderNavLinkClose,
  HeaderNavLink,
} from "./styled";

const Header: FC = () => {
  const [isShowMenu, setIsShowMenu] = useState<boolean>(false);

  function switchMenuStatus() {
    setIsShowMenu(!isShowMenu);
  }

  return (
    <HeaderWrapper>
      <HeaderContainer>
        <Link to="/">
          <HeaderLogo>Misa198</HeaderLogo>
        </Link>
        <HeaderBurger onClick={switchMenuStatus} />
        <HeaderNavLinksOverlay isShowMenu={isShowMenu} />
        <HeaderNavLinks isShowMenu={isShowMenu}>
          <HeaderNavLinkCloseWrapper>
            <HeaderNavLinkClose onClick={switchMenuStatus} />
          </HeaderNavLinkCloseWrapper>
          <Link to="/#about">
            <HeaderNavLink>About</HeaderNavLink>
          </Link>
          <Link to="/#projects">
            <HeaderNavLink>Projects</HeaderNavLink>
          </Link>
          <Link to="/#contact">
            <HeaderNavLink>Contact</HeaderNavLink>
          </Link>
          <Link to="/portfolio">
            <HeaderNavLink>Portfolio</HeaderNavLink>
          </Link>
          <Link to="/blogs">
            <HeaderNavLink>Blogs</HeaderNavLink>
          </Link>
        </HeaderNavLinks>
      </HeaderContainer>
    </HeaderWrapper>
  );
};

export default Header;
