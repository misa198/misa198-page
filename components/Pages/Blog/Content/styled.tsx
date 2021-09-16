import styled from "styled-components";

export const BlogContentWrapper = styled.div`
  width: 100%;
  line-height: 1.8;

  * {
    max-width: 100%;
    font-family: "Roboto" !important;
  }

  code {
    font-family: "SFMono-Regular", "Consolas", "Liberation Mono", "Menlo",
      "monospace" !important;
  }

  img {
    border-radius: 0.25rem;
  }

  li {
    margin-left: 2rem;
  }

  p {
    line-height: 1.5;
    font-size: 1rem;
  }
`;
