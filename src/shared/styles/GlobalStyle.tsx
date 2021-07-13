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

  .Toastify__toast--success {
    background: ${(props) => props.theme.colorPrimary}
  }

  ::-webkit-scrollbar {
    width: 5px;
  }
  
  ::-webkit-scrollbar-track {
    border-radius: 10px;
  }
   
  ::-webkit-scrollbar-thumb {
    background: ${(props) => props.theme.colorBlack02};
    border-radius: 10px;
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
