import styled from 'styled-components';
import { breakpoints } from './layout';

interface IProps {
  indent?: 'small' | 'medium' | 'large';
  center?: boolean;
  src: string;
  size?: number;
}

export const BannerBackground = styled.div<IProps>`
  display: flex;
  flex-direction: row;

  ${({ theme, indent = 'small', center = false, src, size }) => `
  
    ${breakpoints.small(`
      background-image: url(${src});
      background-repeat: repeat-x;
      background-position: center;
      justify-content: center;
      justify-content: ${center ? 'center' : 'start'};
      
      ${
        center
          ? ''
          : `padding:
            ${theme.grid.layout.top}
            ${theme.grid.layout.right[indent]}
            ${theme.grid.layout.bottom}
            ${theme.grid.layout.left[indent]};`
      }
      
      ${size ? `background-size: ${size / 16}rem;` : ''}
      
    `)}

  `}
`;
