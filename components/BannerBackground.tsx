import styled from 'styled-components';

interface IProps {
  indent?: 'small' | 'medium' | 'large';
}

export const BannerBackground = styled.div<IProps>`
  background-image: url(/video-banner-background.svg);
  background-repeat: repeat-x;
  background-position: center;

  justify-content: center;
  flex-direction: row;

  ${({ theme, indent = 'small' }) => `
    padding:
      ${theme.grid.layout.top}
      ${theme.grid.layout.right[indent]}
      ${theme.grid.layout.bottom}
      ${theme.grid.layout.left[indent]};
  `}
`;
