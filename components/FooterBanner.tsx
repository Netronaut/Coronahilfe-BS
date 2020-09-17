import styled from 'styled-components';

export const FooterBanner = styled.div`
  height: 380px;
  background-color: ${({ theme }): string => theme.colors.bluewhite};
  background-image: url(/footer-call-badge.png);
  background-position: bottom right;
  background-repeat: no-repeat;
  background-size: 923px;
`;
