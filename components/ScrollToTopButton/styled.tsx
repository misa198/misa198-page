import styled from "styled-components";

export const ScrollTopButtonWrapper = styled.div`
  position: absolute;
  bottom: 0px;
  right: 0;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${(props) => props.theme.colorPrimary};
  background-color: ${(props) => props.theme.colorWhite};
  border: 1px solid ${(props) => props.theme.colorPrimary};
  border-radius: 0.25rem;
  user-select: none;
  cursor: pointer;
`;
