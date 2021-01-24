import { css, FlattenSimpleInterpolation } from 'styled-components';

const colors = {
  blue: '#545D8E',
  lightblue: '#0070F3',
  bluewhite: '#D7EBF0',
  creamwhite: '#FEFEFE',
  red: '#E16C66',
  darkred: '#BE1E3C',
};

const font = {
  family: 'Roboto',
  condensed: 'Roboto Condensed',
  black: 900,
  bold: 700,
  medium: 500,
  regular: 400,
  size: {
    xxs: '0.875rem', // 14px at 16px body font-size
    xs: '1.125rem', // 18px
    s: '1.5rem', // 24px
    m: '1.75rem', // 28px
    l: '2.75rem', // 44px
    xl: '3.25rem', // 52px
    xxl: '4.5rem', // 72px
  },
};

const margin = {
  m: '.5rem',
  l: '1rem',
  xl: '2rem',
  xxl: '3rem',
  xxxl: '6.25rem',
};

const grid = {
  margin,
  navigation: {
    height: '8rem',
    subnav: {
      height: margin.xxxl,
    },
  },
  layout: {
    right: {
      small: '10rem',
      medium: '14rem',
      large: '14rem',
    },
    left: {
      small: '6rem',
      medium: '10rem',
      large: '19rem',
    },
    top: margin.xxl,
    bottom: margin.xxl,
  },
  step: {
    width: '26.25rem',
    height: margin.xxxl,
  },
  process: {
    width: '44.5rem',
    border: {
      width: '4px',
      radius: '25px',
    },
  },
};

export const theme = {
  colors,
  font,
  grid,
};

export const breakpoints = {
  large: (innerCSS: string | FlattenSimpleInterpolation): string => `
    @media screen and (min-width: 1440px) {
      ${innerCSS}
    }
  `,
  medium: (innerCSS: string | FlattenSimpleInterpolation): string => `
    @media screen and (min-width: 1024px) {
      ${innerCSS}
    }
  `,
  small: (innerCSS: string | FlattenSimpleInterpolation): string => `
    @media screen and (min-width: 768px) {
      ${innerCSS}
    }
  `,
};
