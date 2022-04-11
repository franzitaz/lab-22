import { createGlobalStyle, css } from "styled-components";
import { CartProps } from "../components/Cart";

const GlobalStyles = createGlobalStyle<Pick<CartProps, "isOpen">>`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    &::before,
    &::after {
      box-sizing: inherit;
    }
  }
  html {
    font-size: 62.5%;
  }
  body {
    font-family: 'Roboto', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;

    ${({ isOpen }) => css`
    overflow: ${isOpen ? "hidden" : "auto"};
  `}
  }

`;

export default GlobalStyles;
