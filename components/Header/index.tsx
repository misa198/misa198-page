import { FC, useState } from "react";
import Link from "next/link";
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
        <Link href="/">
          <a>
            <HeaderLogo>Misa198</HeaderLogo>
          </a>
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
            <Link href="/">
              <a onClick={switchMenuStatus}>Home</a>
            </Link>
          </HeaderNavLink>
          <HeaderNavLink>
            <Link href="/portfolio">
              <a onClick={switchMenuStatus}>Portfolio</a>
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
