import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  p,
  div {
    box-sizing: border-box;
  }

  html {
    font-size: 12px;

    @media screen and (min-width: 1440px) {
      font-size: 16px;
    }
  }

  body {
    margin: 0;
  }
`;
