import styled from 'styled-components';
import { breakpoints } from '../layout';
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

    margin-top: ${theme.grid.layout.top}
    margin-bottom: ${theme.grid.layout.bottom};
    margin-left: 10px;
    margin-right: 10px;

    > * {
      margin-top: 10px;
      margin-bottom: 10px;
    }

    ${Cell} {
      ${breakpoints.small(`
        margin-left: ${theme.grid.margin.l};
        margin-right: ${theme.grid.margin.l};
      `)}

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

    flex-direction: column;
    align-items: center;

    ${breakpoints.small(`
      flex-direction: ${vertical ? 'column' : 'row'};
      align-items: revert;
      margin-right: ${theme.grid.layout.right[indent]};
      margin-left: ${theme.grid.layout.left[indent]};

      > * {
        margin-top: revert;
        margin-bottom: revert;
      }
  
    `)}
    
  `}
`;
