import React from 'react';
import styled from 'styled-components';
import { TwoLine, Body } from './Typography';

const Container = styled.div`
  display: flex;
  align-items: center;

  ${({ theme }) => `
    width: ${theme.grid.step.width};
    height: ${theme.grid.step.height};
    
    & >:first-child {
      width: 1em;
      margin-right: .4em;
    }
  `}
`;

export const Step: React.FC<{ num: number }> = ({ num, children }) => (
  <Container>
    <TwoLine>{num}.</TwoLine>
    <Body>{children}</Body>
  </Container>
);
