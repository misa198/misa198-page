import styled from "styled-components";
import { down } from "styled-breakpoints";

export const ProjectListWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 1.2rem;
  grid-row-gap: 1.2rem;
  animation: appear 300ms;

  ${down("lg")} {
    grid-template-columns: repeat(2, 1fr);
  }

  ${down("md")} {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const ProjectItem = styled.div``;
