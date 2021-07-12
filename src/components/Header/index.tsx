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
            <Link to="/blogs" onClick={switchMenuStatus}>
              Blogs
            </Link>
          </HeaderNavLink>
        </HeaderNavLinks>
      </HeaderContainer>
    </HeaderWrapper>
  );
};

export default Header;
