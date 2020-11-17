import { createGlobalStyle, css } from 'styled-components';
import { breakpoints } from './theme';

export const GlobalStyle = createGlobalStyle`
  p,
  div {
    box-sizing: border-box;
  }

  html {
    font-size: 12px;

    ${breakpoints.medium(css`
      font-size: 16px;
    `)}
  }

  body {
    margin: 0;
  }
`;
