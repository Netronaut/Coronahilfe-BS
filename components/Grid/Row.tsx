import styled from 'styled-components';

interface RowProps {
  vertical?: boolean;
  indent?: 'small' | 'medium' | 'large';
}

export const Row = styled.div<RowProps>`
  display: flex;
  justify-content: space-between;

  ${({ theme, vertical = false, indent = 'small' }): string => `
    flex-direction: ${vertical ? 'column' : 'row'};

    margin: 0 ${theme.grid.layout.right[indent]} 0 ${theme.grid.layout.left[indent]};
  `}
`;
