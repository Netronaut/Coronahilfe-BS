import css from 'styled-jsx/css';
import { theme } from './theme';

// Global styles
export const styles = css.global`
  html,
  body {
    padding: 0;
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  }

  body {
    color: ${theme.colors.darkblue};
    font-weight: 300;
    line-height: 1.5;
  }

  p,
  li {
    font-size: 125%;
  }

  * {
    box-sizing: border-box;
  }

  .center-text {
    text-align: center;
  }

  .right-text {
    text-align: right;
  }

  .left-text {
    text-align: left;
  }

  .uppercase {
    text-transform: uppercase;
    line-height: 1.7;
  }

  .center {
    align-self: center;
    justify-self: center;
    width: auto;
  }

  .red {
    color: ${theme.colors.red};
  }

  .thin {
    font-weight: 200;
  }

  .fat {
    font-weight: 700;
  }

  .medium-large {
    font-size: 150%;
  }

  .sparse {
    line-height: 1.5;
  }

  .margin-top {
    margin-top: 1rem;
  }

  .nowrap {
    white-space: nowrap;
  }

  .row {
    display: flex;
    flex-direction: row;
    margin: 1em auto;
    justify-content: space-between;
  }

  .row > * {
    margin: 0 1rem;
  }

  .row > *:first-child {
    margin-left: 0;
  }

  .row > *:last-child {
    margin-right: 0;
  }

  .column {
    flex-direction: column;
  }

  .cols-2 > * {
    width: 50%;
    margin: 0;
  }
`;
