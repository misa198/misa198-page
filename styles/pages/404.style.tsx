import styled from "styled-components";
import { Container } from "@material-ui/core";

export const Page404Wrapper = styled(Container)``;

export const Page404Image = styled.div`
  margin: auto;
  margin-top: 3rem;
  width: 70%;
  max-width: 768px;
  padding-top: 48%;
  background-image: url("/images/not-found.svg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

export const Page404Title = styled.h1`
  margin: auto;
  width: fit-content;
  margin-top: 3rem;
  font-size: 2.5rem;
`;
