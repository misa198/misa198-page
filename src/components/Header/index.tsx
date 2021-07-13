import { FC, useState } from "react";
import { Link } from "react-router-dom";
import ScrollLock from "react-scrolllock";
import { useWindowWidth } from "@react-hook/window-size";

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
  const windowWidth = useWindowWidth();

  function switchMenuStatus() {
    if (!isShowMenu) window.scrollTo(0, 0);
    setIsShowMenu(!isShowMenu);
  }

  return (
    <HeaderWrapper>
      <ScrollLock isActive={isShowMenu && windowWidth < 768} />
      <HeaderContainer>
        <Link to="/">
          <HeaderLogo>Misa198</HeaderLogo>
        </Link>
        <HeaderBurger onClick={switchMenuStatus} />
        <HeaderNavLinksOverlay
          isShowMenu={isShowMenu}
          onClick={switchMenuStatus}
        />
        <HeaderNavLinks isShowMenu={isShowMenu}>
          <HeaderNavLinkCloseWrapper>
            <HeaderNavLinkClose onClick={switchMenuStatus} />
          </HeaderNavLinkCloseWrapper>

          <HeaderNavLink>
            <Link to="/" onClick={switchMenuStatus}>
              Home
            </Link>
          </HeaderNavLink>
          <HeaderNavLink>
            <Link to="/portfolio" onClick={switchMenuStatus}>
              Portfolio
            </Link>
          </HeaderNavLink>
          <HeaderNavLink>
            <a
              href="https://viblo.asia/u/misa198"
              target="_blank"
              rel="noreferrer"
            >
              Blogs
            </a>
          </HeaderNavLink>
        </HeaderNavLinks>
      </HeaderContainer>
    </HeaderWrapper>
  );
};

export default Header;
