import styled from 'styled-components';
import { Cell } from './Cell';

interface RowProps {
  vertical?: boolean;
  center?: boolean;
  indent?: 'small' | 'medium' | 'large';
  nomargin?: boolean;
  right?: boolean;
}

export const Row = styled.div<RowProps>`
  display: flex;

  ${({
    theme,
    vertical = false,
    indent = 'small',
    center = false,
    nomargin = false,
    right = false,
  }): string => `
    justify-content: ${center ? 'space-evenly' : 'space-between'};
    flex-direction: ${vertical ? 'column' : 'row'};

    margin:
      ${theme.grid.layout.top}
      ${theme.grid.layout.right[indent]}
      ${theme.grid.layout.bottom}
      ${theme.grid.layout.left[indent]};

    ${Cell} {
      margin-left: ${theme.grid.margin.l};
      margin-right: ${theme.grid.margin.l};

      &:first-child {
        margin-left: 0;
      }

      &:last-child {
        margin-right: 0;
      }
    }

    ${
      nomargin
        ? `
          margin-top: 0;
          margin-bottom: 0;
        `
        : ''
    }
    ${right ? 'justify-content: flex-end;' : ''}

  `}
`;
