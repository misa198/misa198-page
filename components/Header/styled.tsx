import styled from "styled-components";
import { Container } from "@material-ui/core";
import { Menu, X } from "react-feather";
import { down } from "styled-breakpoints";

export const HeaderWrapper = styled.header<{ route: string }>`
  width: 100%;
  position: relative;
  z-index: 2;
  ${(props) =>
    ["blogs", "blog"].includes(props.route)
      ? `border-bottom: ${props.theme.colorBlack005} 1px solid;`
      : ""};
`;

export const HeaderContainer = styled(Container)`
  display: flex !important;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 0;
`;

export const HeaderLogo = styled.div`
  font-family: "Righteous", cursive;
  font-size: 2rem;
  cursor: pointer;
  user-select: none;
`;

export const HeaderBurger = styled(Menu)`
  display: none;

  ${down("sm")} {
    display: block;
    user-select: none;
    cursor: pointer;
  }
`;

export const HeaderNavLinksOverlay = styled.div<{ isShowMenu: boolean }>`
  display: none;

  ${down("sm")} {
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    min-height: 100vh;
    background-color: ${(props) => props.theme.colorBlack06};
    z-index: 2;
    transition: all 300ms;
    ${(props) =>
      props.isShowMenu ? `opacity: 1;` : `visibility: hidden; opacity: 0;`};
  }
`;

export const HeaderNavLinks = styled.div<{ isShowMenu: boolean }>`
  display: flex;

  ${down("sm")} {
    position: absolute;
    right: 0;
    top: 0;
    width: 280px;
    min-height: 100vh;
    background-color: ${(props) => props.theme.colorWhite};
    z-index: 3;
    display: flex;
    flex-direction: column;
    transition: all 300ms;
    transform: translateX(${(props) => (props.isShowMenu ? "0" : "280px")});
  }
`;

export const HeaderNavLinkCloseWrapper = styled.div`
  display: none;
  justify-content: flex-end;

  ${down("sm")} {
    display: flex;
    width: 100%;
    padding: 1rem 1rem 0.5rem 1rem;
  }
`;

export const HeaderNavLinkClose = styled(X)`
  cursor: pointer;
  user-select: none;
`;

export const HeaderNavLink = styled.div`
  width: fit-content;
  margin-left: 1.5rem;
  cursor: pointer;
  user-select: none;

  * {
    transition: color 300ms;
  }

  &:hover {
    * {
      color: ${(props) => props.theme.colorPrimary};
    }
  }

  ${down("sm")} {
    padding: 0.5rem 0;
  }
`;
