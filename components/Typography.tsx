import styled from 'styled-components';
import { theme } from './theme';

export const Body = styled.p`
  color: ${theme.colors.blue};
  font-family: ${theme.font.family};
  font-weight: ${theme.font.regular};
  font-size: 24pt;
`;

export const Headline = styled.h1`
  color: ${theme.colors.red};
  font-family: ${theme.font.family};
  font-weight: ${theme.font.bold};
  font-size: 51pt;
`;

export const TwoLine = styled.div`
  color: ${theme.colors.red};
  font-family: ${theme.font.family};
  font-weight: ${theme.font.bold};
  font-size: 70pt;
`;

export const Secondary = styled.h2`
  color: ${theme.colors.red};
  font-family: ${theme.font.family};
  font-weight: ${theme.font.bold};
  font-size: 28pt;
`;

export const Hero = styled.div`
  color: ${theme.colors.red};
  font-family: ${theme.font.family};
  font-weight: ${theme.font.medium};
  font-style: italic;
  font-size: 28pt;
`;

export const Meta = styled.div`
  color: ${theme.colors.blue};
  font-family: ${theme.font.family};
  font-weight: ${theme.font.regular};
  font-size: 14pt;
`;

export const Navigation = styled.div`
  color: ${theme.colors.blue};
  font-family: ${theme.font.family};
  font-weight: ${theme.font.medium};
  font-size: 28pt;
`;

export const NavigationMedium = styled.div`
  color: ${theme.colors.blue};
  font-family: ${theme.font.family};
  font-weight: ${theme.font.medium};
  font-size: 18pt;
`;

export const Splash = styled.div`
  color: ${theme.colors.blue};
  font-family: ${theme.font.condensed};
  font-weight: ${theme.font.regular};
  font-size: 44pt;
`;
