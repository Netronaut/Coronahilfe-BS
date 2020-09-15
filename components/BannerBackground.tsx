import styled from 'styled-components';

interface IProps {
  indent?: 'small' | 'medium' | 'large';
  center?: boolean;
  src: string;
  size?: number;
}

export const BannerBackground = styled.div<IProps>`
  display: flex;
  flex-direction: row;

  background-repeat: repeat-x;
  background-position: center;

  ${({ theme, indent = 'small', center = false, src, size }) => `
    background-image: url(${src});
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

    ${size ? `background-size: ${size}px;` : ''}
  `}
`;
