import { Theme } from "./../../styled-components.d";
import { createGlobalStyle, css } from "styled-components";

const GlobalStyles = createGlobalStyle<{ theme: Theme }>`
  /* poppins-300 - latin */
  @font-face {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 300;
    font-display: swap;
    src: local(''),
        url('../fonts/poppins-v20-latin-300.woff2') format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
  }
  /* poppins-regular - latin */
  @font-face {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: local(''),
        url('../fonts/poppins-v20-latin-regular.woff2') format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
  }
  /* poppins-600 - latin */
  @font-face {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 600;
    font-display: swap;
    src: local(''),
        url('../fonts/poppins-v20-latin-600.woff2') format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
  }
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  

  ${({ theme }) => css`
    html {
      font-size: 62.5%;
    }

    @media (max-width: 768px) {
      html {
        font-size: 50%;
      }
    }

    body {
      font-family: ${theme.font.family};
      background-color: ${theme.colors.mainBg};
    }
  `}
`;

export default GlobalStyles;
