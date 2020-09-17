import styled from 'styled-components';
import { Row } from './Grid';

export const SectionBreak = styled.div`
  ${({ theme }): string => `
    position: relative;
    height: calc(${theme.grid.margin.xxl} * 2);
    background-color: ${theme.colors.bluewhite};
    margin-bottom: calc(-1 * (${theme.grid.layout.top} + ${theme.grid.margin.xxl}));
    z-index: 1;

    :after {
      content: "";
      position: absolute;
      width: calc(100% - ${theme.grid.layout.left.medium});
      height: ${theme.grid.margin.xxl};
      top: ${theme.grid.margin.xxl};
      left: ${theme.grid.layout.left.medium};
      background-color: white;
    }

    + ${Row} {
      position: relative;
      z-index: 2;
    }
  `}
`;
