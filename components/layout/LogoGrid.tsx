import styled from 'styled-components';

export const LogoGrid = styled.div`
  display: grid;
  grid-template-columns: 10em 10em;
  grid-auto-flow: dense;
  grid-gap: 4rem;
  justify-content: center;

  position: relative;
  z-index: 2;
  margin: 2rem;
`;
