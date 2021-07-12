import styled from "styled-components";
import { Container } from "@material-ui/core";

import Loading from "src/components/Loading";

export const ProjectsWrapper = styled.section`
  width: 100%;
`;

export const ProjectsContainer = styled(Container)``;

export const ProjectsTitle = styled.h3`
  margin-bottom: 1.6rem;
  padding: 0px;
  color: inherit;
  font-weight: bold;
  text-rendering: optimizelegibility;
  font-size: 1.62671rem;
  line-height: 1.1;
`;

export const ProjectsLoading = styled(Loading)`
  padding: 4rem 0;
`;
