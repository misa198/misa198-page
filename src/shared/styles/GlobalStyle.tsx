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
  }

  a {
    color: ${(props) => props.theme.colorBlack08};
    text-decoration: none;
  }
`;
