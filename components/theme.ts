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
  xxl: '6.25rem',
};

const grid = {
  margin,
  navigation: {
    height: '8rem',
    subnav: {
      height: margin.xxl,
    },
  },
  layout: {
    left: '6rem',
    right: '10rem',
  },
  step: {
    width: '26.25rem',
    height: margin.xxl,
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
