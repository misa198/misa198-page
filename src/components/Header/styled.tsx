import styled from "styled-components";
import { Container } from "@material-ui/core";

export const HeaderWrapper = styled.header`
  width: 100%;
`;

export const HeaderContainer = styled(Container)`
  display: flex !important;
  justify-content: space-between;
  padding: 1.5rem 0;
`;

export const HeaderLogo = styled.div`
  transition: color 300ms;
  cursor: pointer;
  user-select: none;

  &:hover {
    color: ${(props) => props.theme.colorPrimary};
  }
`;

export const HeaderNavLinks = styled.div`
  display: flex;
`;

export const HeaderNavLink = styled.div`
  width: fit-content;
  margin-left: 1.5rem;
  transition: color 300ms;
  cursor: pointer;
  user-select: none;

  &:hover {
    color: ${(props) => props.theme.colorPrimary};
  }
`;
