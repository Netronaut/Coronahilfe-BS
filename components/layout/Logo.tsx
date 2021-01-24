import React from 'react';
import styled from 'styled-components';
import { LogoLower, Headline } from '../Typography';
import { breakpoints } from './theme';

const FirstLine = styled(Headline)`
  letter-spacing: 0.8px;
`;

const LogoUnstyled: React.FC<{ className?: string }> = ({ className }) => (
  <h1 className={className}>
    <FirstLine>Studentische</FirstLine>
    <Headline>Einkaufshilfe</Headline>
    <LogoLower>Braunschweig</LogoLower>
  </h1>
);

export const Logo = styled(LogoUnstyled)`
  display: flex;
  width: 382px;
  flex-flow: wrap;

  align-items: center;
  flex-direction: column;
  text-transform: uppercase;

  ${breakpoints.small(`
    align-items: flex-start;
  `)}
`;
