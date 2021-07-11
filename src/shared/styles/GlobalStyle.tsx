import { createGlobalStyle } from "styled-components";
import { ThemeType } from "src/themes/styled-components.theme";

export default createGlobalStyle<{
  theme: ThemeType;
}>`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box
  }

  body {
    font-family: "Roboto", "Helvetica", "Arial", sans-serif;
    font-size: 1rem;
    color: ${(props) => props.theme.colorBlack08};
    scroll-behavior: smooth;
  }

  a {
    color: ${(props) => props.theme.colorBlack08};
    text-decoration: none;
  }

  #root {
    overflow-x: hidden;
    min-height: 100vh;
    width: 100vw;
  }

  @keyframes appear {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;
