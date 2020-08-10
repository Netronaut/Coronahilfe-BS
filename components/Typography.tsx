import React, { useContext } from 'react';
import styled, { ThemeContext } from 'styled-components';

type TypographyProps = {
  theme?: Record<string, any>;
};

const withThemeContext = (
  Component: React.FC<TypographyProps>,
): React.FC<TypographyProps> => (props): React.ReactElement => {
  const theme = useContext(ThemeContext);
  return <Component {...props} theme={theme} />;
};

export const Body = withThemeContext(styled.p`
  ${props => `
    color: ${props.theme.colors.blue};
    font-family: ${props.theme.font.family};
    font-weight: ${props.theme.font.regular};
    font-size: ${props.theme.font.size.s};
  `}
`);

export const Headline = withThemeContext(styled.div`
  ${props => `
    color: ${props.theme.colors.red};
    font-family: ${props.theme.font.family};
    font-weight: ${props.theme.font.bold};
    font-size: ${props.theme.font.size.xl};
  `}
  letter-spacing: 0.43px;
  text-align: justify;
`);

export const TwoLine = withThemeContext(styled.div`
  ${props => `
    color: ${props.theme.colors.red};
    font-family: ${props.theme.font.family};
    font-weight: ${props.theme.font.bold};
    font-size: ${props.theme.font.size.xxl};
  `}
`);

export const Secondary = withThemeContext(styled.h2`
  ${props => `
    color: ${props.theme.colors.red};
    font-family: ${props.theme.font.family};
    font-weight: ${props.theme.font.bold};
    font-size: ${props.theme.font.size.m};
  `}
`);

export const Hero = withThemeContext(styled.div`
  ${props => `
color: ${props.theme.colors.red};
  font-family: ${props.theme.font.family};
  font-weight: ${props.theme.font.medium};
  font-size: ${props.theme.font.size.m};
`}
  font-style: italic;
`);

export const Navigation = withThemeContext(styled.div`
  ${props => `
    color: ${props.theme.colors.blue};
    font-family: ${props.theme.font.family};
    font-weight: ${props.theme.font.medium};
    font-size: ${props.theme.font.size.m};

    `}
  a {
    color: inherit;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`);

export const NavigationSmall = withThemeContext(styled.div`
  ${props => `
    color: ${props.theme.colors.blue};
    font-family: ${props.theme.font.family};
    font-weight: ${props.theme.font.regular};
    font-size: ${props.theme.font.size.xxs};
  `}

  a {
    color: inherit;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`);

export const Splash = withThemeContext(styled.div`
  ${props => `
    color: ${props.theme.colors.blue};
    font-family: ${props.theme.font.condensed};
    font-weight: ${props.theme.font.regular};
    font-size: ${props.theme.font.size.l};
  `}
`);

export const LogoLower = withThemeContext(styled.div`
  ${props => `
    color: ${props.theme.colors.blue};
    font-family: ${props.theme.font.family};
    font-weight: ${props.theme.font.regular};
    font-size: ${props.theme.font.size.xl};
  `}
  letter-spacing: -0.75px;
`);
