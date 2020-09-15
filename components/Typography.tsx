import styled from 'styled-components';

export const Body = styled.div`
  ${(props): string => `
    color: ${props.theme.colors.blue};
    font-family: ${props.theme.font.family};
    font-weight: ${props.theme.font.regular};
    font-size: ${props.theme.font.size.s};
  `}
`;

export const Headline = styled.div`
  ${(props): string => `
    color: ${props.theme.colors.red};
    font-family: ${props.theme.font.family};
    font-weight: ${props.theme.font.bold};
    font-size: ${props.theme.font.size.xl};
  `}
  letter-spacing: 0.43px;
  text-align: justify;
`;

export const TwoLine = styled.div`
  ${(props): string => `
    color: ${props.theme.colors.red};
    font-family: ${props.theme.font.family};
    font-weight: ${props.theme.font.bold};
    font-size: ${props.theme.font.size.xxl};
  `}
`;

export const Secondary = styled.h2`
  ${(props): string => `
    color: ${props.theme.colors.red};
    font-family: ${props.theme.font.family};
    font-weight: ${props.theme.font.bold};
    font-size: ${props.theme.font.size.m};
  `}
`;

export const Hero = styled.div`
  ${(props): string => `
color: ${props.theme.colors.red};
  font-family: ${props.theme.font.family};
  font-weight: ${props.theme.font.medium};
  font-size: ${props.theme.font.size.m};
`}
  font-style: italic;
`;

export const Navigation = styled.div`
  ${(props): string => `
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
`;

export const NavigationSmall = styled.div`
  ${(props): string => `
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
`;

export const Splash = styled.div`
  ${(props): string => `
    color: ${props.theme.colors.blue};
    font-family: ${props.theme.font.condensed};
    font-weight: ${props.theme.font.regular};
    font-size: ${props.theme.font.size.l};
  `}
`;

export const LogoLower = styled.div`
  ${(props): string => `
    color: ${props.theme.colors.blue};
    font-family: ${props.theme.font.family};
    font-weight: ${props.theme.font.regular};
    font-size: ${props.theme.font.size.xl};
  `}
  letter-spacing: -0.75px;
`;
