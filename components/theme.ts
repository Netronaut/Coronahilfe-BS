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
    xxs: '14px',
    xs: '18px',
    s: '24px',
    m: '28px',
    l: '44px',
    xl: '51px',
    xxl: '70px',
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
