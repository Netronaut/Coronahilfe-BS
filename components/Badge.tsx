import React from 'react';
import styled from 'styled-components';
import { Telephone } from './Icons';
import { Splash } from './Typography';

export const UnstyledBadge: React.FC<{ className?: string }> = ({
  className,
}) => (
  <div className={className}>
    <Telephone size={108} />
    <Splash>0531 1805 9703</Splash>
  </div>
);

export const Badge = styled(UnstyledBadge)`
  display: flex;
  flex-direction: row;
  align-items: center;

  > :last-child {
    margin-left: 1rem;
  }
`;
