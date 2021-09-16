import styled from "styled-components";

export const BlogContentWrapper = styled.div`
  width: 100%;
  line-height: 1.8;

  .anchor {
    display: none !important;
  }

  * {
    max-width: 100%;
    font-family: "Roboto";
    line-height: 1.5 !important;
  }

  code {
    * {
      font-family: "Source Code Pro" !important;
    }
  }

  img {
    border-radius: 0.25rem;
  }

  li {
    margin-left: 2rem;
  }

  p {
    font-size: 1rem;
  }
`;
